import Header from '@/components/Header'
import { db } from './../../../configs';
import { Images, Listing } from './../../../configs/schema';
import { and, desc, eq, ilike, lt, or } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Service from '@/Shared/Service';
import Item from '@/components/Item';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import MostSearched from '@/components/MostSearched';
import ItemsNearYou from '@/components/ItemsNearYou';
import SearchSeller from '@/components/SearchSeller';

function SearchSameSellers() {
    const [searchParam] = useSearchParams();
    const [itemList, setItemList] = useState([]);

    const price=searchParam.get('price');
    const condition=searchParam.get('condition');
    const category=searchParam.get('category');
    const location=searchParam.get('location');
    const keyword=searchParam.get('keyword');
    const sellerEmail=searchParam.get('seller');

    console.log(price, condition, category, location);

    useEffect(() => {
        GetItemsSameSeller();
    }, [])

   const GetItemsSameSeller=async()=>{
        const conditions = [eq(Listing?.createdBy, sellerEmail)];
        conditions.push(eq(Listing.status, 'active'));

        if (condition && condition !== 'undefined' && condition !== '') {
            conditions.push(eq(Listing.condition, condition));
        }

        if (location && location !== 'undefined' && location !== '') {
            conditions.push(eq(Listing.location, location));
        }

        if (category && category !== 'undefined' && category !== '') {
            conditions.push(eq(Listing.category, category));
        }

        if (price && price !== 'undefined' && !isNaN(price) && price !== '') {
            conditions.push(lt(Listing.sellingPrice, Number(price)));
        }

        if (keyword && typeof keyword === 'string' && keyword.trim() !== 'undefined' && keyword.trim() !== '') {
            conditions.push(or(
                ilike(Listing.listingTitle, `%${keyword.trim()}%`),
            ));
        }

              console.log("Seller Email: " + sellerEmail)

              const result = await db.select().from(Listing)
              .innerJoin(Images, eq(Listing.id, Images.ListingId))
              .where(and(...conditions))
               
              const resp = Service.FormatResult(result);
              console.log(resp);
              setItemList(resp);

    }      

  return (
    <div>
        <title>Search Result</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
        <Header/>

        <div>
            <SearchSeller/>
        </div>

        <div className="p-10 md:px-20">
            <h2 className="font-bold lg:text-4xl text-3xl text-green-900">Items From The Same Seller</h2>
             
             {/* List of Items */}
             <div className="grid grid-cols-2 md:grid-cols-3 
             lg:grid-cols-4 gap-5 mt-7">
                {itemList?.length>0? itemList.map((item,index)=> (
                    <div key={index}>
                        <Item item={item}/>
                    </div>
                )):
                [1,2,3,4,5,6].map((item, index) => (
                    <div key={index} className="h-[200px] rounded-xl bg-slate-200 animate-pulse">
                    </div>
                ))}
             </div>
        </div>
        <Separator/>
        <MostSearched/>

        <Separator/>
        <ItemsNearYou/>
        
        <Footer/>
    </div>
  )
}

export default SearchSameSellers