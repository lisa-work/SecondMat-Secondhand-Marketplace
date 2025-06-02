import Header from '@/components/Header'
import { db } from './../../../configs';
import { Images, Listing } from './../../../configs/schema';
import { and, eq, lt } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Service from '@/Shared/Service';
import Item from '@/components/Item';
import Footer from '@/components/Footer';
import SearchViews from '@/components/SearchViews';


function SearchByHighestViews() {

    const [itemList, setItemList] = useState([]);
    const [searchParam] = useSearchParams();

    const price=searchParam.get('price');
    const condition=searchParam.get('condition');
    const category=searchParam.get('category');
    const location=searchParam.get('location');
    const keyword=searchParam.get('keyword');

    console.log(price, condition, category, location);


    useEffect(() => {
        GetPopularItemList();
    }, [])


    const GetPopularItemList = async () => {
        try {
            const conditions = [eq(Listing.status, 'active')];
    
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
    
            const result = await db.select().from(Listing)
                .innerJoin(Images, eq(Listing.id, Images.ListingId))
                .where(and(...conditions))
                .limit(10);
    
            const resp = Service.FormatResult(result);
            console.log(resp);

            setItemList(resp);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

  return (
    <div>
        <title>Highest View Items</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
        <Header/>

        <div>
            <SearchViews/>
        </div>

        <div className="p-10 md:px-20">
            <h2 className="font-bold lg:text-4xl text-3xl text-green-900">Top 10 Highest View Items</h2>
             
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
        <Footer/>
    </div>
  )
}
export default SearchByHighestViews