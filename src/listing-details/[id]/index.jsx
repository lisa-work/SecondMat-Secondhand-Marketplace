import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import DetailHeader from '../components/DetailHeader'
import { useParams } from 'react-router-dom'
import { db } from './../../../configs';
import { Images, Listing } from './../../../configs/schema';
import { eq, sql } from 'drizzle-orm';
import Service from '@/Shared/Service';
import ImageGallery from '../components/ImageGallery';
import Description from '../components/Description';
import Pricing from '../components/Pricing';
import Specification from '../components/Specification';
import Footer from '@/components/Footer';
import MostSearched from '@/components/MostSearched';
import { Separator } from '@/components/ui/separator';
import SimilarItems from '@/components/SimilarItems';
import ItemsSameSeller from '@/components/ItemsSameSeller';
import OwnersDetail from '../components/OwnersDetail';

function ListingDetail() {

    const {id}= useParams();
    const numericId = Number(id);
    const [itemDetail, setItemDetail] = useState();

    useEffect(() => {
        if (id) {
            IncrementViewCount();
            GetItemDetail();
        }
    }, []);


    const IncrementViewCount = async () => {
        await db.update(Listing).set({
            view: sql`${Listing.view} + 1` 
            }).where(eq(Listing.id, numericId))
    }

    const GetItemDetail=async()=> {

        const result=await db.select().from(Listing)
        .innerJoin(Images, eq(Listing.id, Images.ListingId))
        .where(eq(Listing.id, numericId));

        const resp=Service.FormatResult(result);
        setItemDetail(resp[0]);
    }

  return (
    <div>
        <title>Item Details</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
        <Header/>
        
        <div className="p-10 md:px-20">
            <DetailHeader itemDetail={itemDetail}/>
            
            <div className="grid grid-cols-1 items-start justify-around lg:grid-cols-3 w-full mt-1 lg:mt-10 gap-5">

                <div className="col-span-1">
                    <div className="w-full h-full">
                    <ImageGallery itemDetail={itemDetail} className="object-contain"/>
                    </div>
                </div>

                <div className="w-full p-1 col-span-1">
                    <Pricing itemDetail={itemDetail}/>
                    <Specification itemDetail={itemDetail}/>
                </div>


                <div className="w-full p-1 col-span-1 h-full flex">
                    <Description itemDetail={itemDetail}/>
                </div>
            </div>
            <Separator className="my-3"/>
            <OwnersDetail itemDetail={itemDetail}/>
        </div>

        <Separator/>
        <ItemsSameSeller sellerEmail={itemDetail?.createdBy} id={itemDetail?.id}/>

        <Separator/>
        <SimilarItems category={itemDetail?.category} id={itemDetail?.id}/>

        <Separator/>
        <MostSearched/>
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default ListingDetail