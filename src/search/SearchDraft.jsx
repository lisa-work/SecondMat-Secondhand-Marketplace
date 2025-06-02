import Service from '@/Shared/Service';
import { db } from './../../configs';
import { Images, Listing } from './../../configs/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '@/components/Header';
import Search from '@/components/Search';
import Item from '@/components/Item';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function SearchDraft() {
    const [searchParam] = useSearchParams();

    const [itemList, setItemList] = useState([]);

    const price=searchParam.get('price');
    const condition=searchParam.get('condition');
    const category=searchParam.get('category');
    const location=searchParam.get('location');

    console.log(price, condition, category, location);

useEffect(() => {
    GetItemList();
}, [])

    const GetItemList=async()=> {

        const result=await db.select().from(Listing)
            .innerJoin(Images, eq(Listing.id, Images.ListingId))
            .where(price!=undefined&&eq(Listing.price, price))
            .where(condition!=undefined&&eq(Listing.condition, condition))
            .where(category!=undefined&&eq(Listing.category, category))
            .where(location!=undefined&&eq(Listing.location, location))
    
            const resp=Service.FormatResult(result);
            console.log(resp);

            setItemList(resp);
        }

    

  return (
    <div>
    <title>Search Result</title>
    <link rel="icon" type="image/x-icon" href="/logo.svg" />
    <Header/>

    <div className="block lg:hidden">
        <Search/>
        {/* Mobile View Results */}
        <div className="py-5 px-10 grid col-span-6">
            <h2 className="font-bold text-4xl text-left text-green-900">Search Result</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
                {itemList.length > 0 ? itemList.map((item,index)=> (
                    <Item key={index} item={item}/>
                )) : [1,2,3,4,5,6].map((_, index) => (
                    <div key={index} className="h-[200px] rounded-xl bg-slate-200 animate-pulse"></div>
                ))}
            </div>
        </div>
    </div>

    <div className="hidden lg:block ">
    <div className="grid grid-cols-8 gap-3">
        <div className="h-fit col-span-1 mt-5 ">
            <h2 className="mx-5 my-2 font-bold lg:text-md xl:text-lg">Price</h2>
            <Input type="range" className="mx-5 border-none outline-none" defaultValue={0} min={0} max={1000} onChange={(e) => setPrice(e.target.value)} />
            <p className="mx-5 text-xs">Under CAD {price}</p>

            <h2 className="mx-5 my-2 font-bold lg:text-md xl:text-lg">Condition</h2>
            <RadioGroup defaultValue={condition} onValueChange={setCondition} className="flex font-thin my-2">
                <div className="flex items-start justify-start space-x-2 flex-col">
                    {Data.Condition.map((c, index) => (
                        <div key={index} className="flex flex-row my-2 mx-5 items-center">
                            <RadioGroupItem value={c.condition} id={`condition-${index}`} className="font-thin" />
                            <Label htmlFor={`condition-${index}`} className="mx-2 lg:text-xs xl:text-sm">{c.condition}</Label>
                        </div>
                    ))}
                </div>
            </RadioGroup>

            <h2 className="mx-5 my-2 font-bold lg:text-md xl:text-lg">Location</h2>
            <RadioGroup defaultValue={location} onValueChange={setLocation} className="flex font-thin my-2">
                <div className="flex items-start justify-start space-x-2 flex-col">
                    {Data.Location.map((loc, index) => (
                        <div key={index} className="flex flex-row my-2 mx-5 items-center">
                            <RadioGroupItem value={loc.name} id={`location-${index}`} className="font-thin" />
                            <Label htmlFor={`location-${index}`} className="mx-2 lg:text-xs xl:text-sm">{loc.name}</Label>
                        </div>
                    ))}
                </div>
            </RadioGroup>
        </div>

        <div className="h-fit mt-5">
                <h2 className="mx-3 font-bold lg:text-md xl:text-lg my-2">Category</h2>
                <RadioGroup defaultValue={category} onValueChange={setCategory} className="flex font-thin my-2">
                    <div className="flex items-start justify-start space-x-2 flex-col">
                        {Data.Category.map((category, index) => (
                            <div className="flex flex-row my-2 mx-4 items-center">
                                <RadioGroupItem key={index} value={category.category} id={index} className="font-thin"/>
                                <Label htmlFor={index} className="mx-2 lg:text-xs xl:text-sm">{category.category}</Label>
                            </div>
                        ))}
                    </div>
                </RadioGroup>        
        </div>


        <div className="p-10 grid col-span-6 rounded-lg shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
                {itemList.length > 0 ? itemList.map((item,index)=> (
                    <Item key={index} item={item}/>
                )) : [1,2,3,4,5,6,7,8].map((_, index) => (
                    <div key={index} className="h-[400px] w-[300px] gap-5 rounded-xl bg-slate-200 animate-pulse"></div>
                ))}
            </div>
        </div>
    </div>
    </div>


        <div>
            <Search/>
        </div>

        <div className='p-10 md:px-20'>
            <h2 className="font-bold text-3xl md:text-4xl text-green-900">Search Result</h2>

            {/* List of ItemList  */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7'>
                {itemList?.length>0? itemList.map((item,index)=>(
                    <div key={index}>
                        <Item item={item} />
                    </div>
                )):
                [1,2,3,4,5,6].map((item,index)=>(
                    <div key={index} className='h-[200px] rounded-xl bg-slate-200 animate-pulse'>
                    </div>
                ))
                }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SearchDraft