import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import moment from 'moment'

import Header from '@/components/Header'
import InputField from './components/InputField'
import DropdownField from './components/DropdownField'
import TextAreaField from './components/TextAreaField'
import UploadImages from './components/UploadImages'
import IconField from './components/IconField'
import Footer from '@/components/Footer'

import { db } from './../../configs'
import { Images, Listing } from './../../configs/schema'
import { eq } from 'drizzle-orm'

import Details from './../Shared/Details.json'
import features from './../Shared/features.json'
import Service from '@/Shared/Service'

import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

import { TbLoader2 } from "react-icons/tb"
import NumberField from './components/NumberField'

function AddListing() {

    const [formData, setFormData] = useState([]);
    const [featuresData, setFeaturesData] = useState([]);
    const [triggerUploadImages,setTriggerUploadImages]=useState();
    const [searchParams] = useSearchParams();
    const [loader, setLoader] = useState(false);
    const [itemInfo, setItemInfo] = useState();
    const navigate=useNavigate();
    const {user} = useUser();

    const mode=searchParams.get('mode');
    const recordId = searchParams.get('id');

    useEffect(()=>
    {
        if (mode=='edit')
        {
            GetListingDetail();
        }
    }, []);

    const GetListingDetail = async() => {
        const result=await db.select().from(Listing)
        .innerJoin(Images, eq(Listing.id, Images.ListingId))
        .where(eq(Listing.id, recordId))

        const resp=Service.FormatResult(result)
        setItemInfo(resp[0]);
        setFormData(resp[0]);
        setFeaturesData(resp[0].features);
        // console.log(resp);
    }


    const handleInputChange=(name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name] : value
        }))

        console.log(formData);
    }

    const handleFeatureChange=(name,value)=>{
        setFeaturesData((prevData)=>({
            ...prevData,
            [name]:value,
        }))
        console.log(featuresData);
    }

    const onSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const missingFields = Details.Details.filter(field => 
        field.required && !formData?.[field.name]
    );

    if (missingFields.length > 0) {
        toast("Please fill in all required fields");
        setLoader(false);
        return;
    }

    toast('Please wait');

    if (mode === "edit") {
        const result = await db.update(Listing).set({
            ...formData,
            features: featuresData,
            createdBy: user?.primaryEmailAddress.emailAddress,
            userName: user?.fullName,
            userImageUrl: user?.imageUrl,
            postedOn: moment().format('DD/MM/YYYY')
        }).where(eq(Listing.id, recordId))
        .returning({ id: Listing.id });
        console.log(result);
        navigate('/my-listing');
        toast("Listing updated successfully");
        setLoader(false);
    } else {
        try {
            const result = await db.insert(Listing).values({
                ...formData,
                features: featuresData,
                createdBy: user?.primaryEmailAddress.emailAddress,
                postedOn: moment().format('DD/MM/YYYY')
            }).returning({ id: Listing.id });
            
            if (result) {
                console.log("Data saved");
                setTriggerUploadImages(result[0]?.id);
                setLoader(false);
            }
        } catch (e) {
            setLoader(false);
            console.log("Error", e);
            toast("Something went wrong");
        }
    }
}
    
  return (
    <div>
        <title>Listing</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>

        <Header/>

        <div className="px-10 md:px-20 my-10">
            <h2 className="font-bold text-4xl text-green-900">Add New Listing</h2>
            <form className="p-10 border rounded-xl mt-10 onSubmit={onSubmit}">
                <div>
                    <h2 className="font-medium text-xl mb-6 text-green-900">Item Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {Details.Details.map((item, index) => (
                            <div key={index}>
                                <label className="text-sm flex items-center mb-3">
                                    <IconField icon={item?.icon}/>
                                    {item?.label} {item.required&&<span className="text-red-600">*</span>}
                                </label>
                                    {item.fieldType == 'text'
                                    ?<InputField item={item} 
                                    handleInputChange={handleInputChange} 
                                    itemInfo={itemInfo}
                                    />
                                    :
                                    item.fieldType == 'number' 
                                    ?<NumberField item={item} 
                                    handleInputChange={handleInputChange} 
                                    itemInfo={itemInfo}
                                    />
                                    :item.fieldType == 'dropdown'?
                                    <DropdownField item={item} 
                                    handleInputChange={handleInputChange} 
                                    itemInfo={itemInfo}
                                    />
                                    :item.fieldType == "textarea"?
                                    <TextAreaField item={item} 
                                    handleInputChange={handleInputChange} 
                                    itemInfo={itemInfo}
                                    />
                                    :null}
                            </div>
                        ))}
                    </div>
                </div>

                <Separator className="my-6"/>

                <div>
                    <h2 className="font-medium text-xl my-6 text-green-900">Optional</h2>     
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {features.features.map((item,index) => (
                            <div key={index} className="flex items-center gap-4 m-1">
                                <Checkbox 
                                onCheckedChange={(value) => handleFeatureChange(item.name, value)}
                                className="hover:shadow-md"
                                checked={featuresData?.[item.name]}
                                />
                                <h2>{item.label}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                <Separator className="my-6"/>
                
                <UploadImages triggerUploadImages={triggerUploadImages}
                itemInfo={itemInfo}
                mode={mode}
                setLoader={(v) => {setLoader(v);navigate('/my-listing')}}
                />

                <div className="mt-10 flex justify-end">
                    <Button type="submit"
                    disabled={loader} 
                    onClick={(e)=>onSubmit(e)}
                    className="bg-green-700 hover:bg-green-900">
                        {!loader?'Submit':<TbLoader2 className="animate-spin text-lg" />}
                    </Button>
                </div>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default AddListing
