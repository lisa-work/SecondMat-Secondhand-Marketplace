import Service from '@/Shared/Service';
import { db } from './../../configs';
import { Images, Listing } from './../../configs/schema';
import { and, eq, ilike, lt, or } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import Item from '@/components/Item';
import Footer from '@/components/Footer';

import SearchResult from '@/components/SearchResult';

import { useLocation } from "react-router-dom";
import HeaderNoInput from '@/components/HeaderNoInput';

function RadioSearch() {
    const locationHook = useLocation();
    const queryParams = new URLSearchParams(locationHook.search);

    const [itemList, setItemList] = useState([]);

    const [price, setPrice] = useState(queryParams.get("price"));
    const [condition, setCondition] = useState(queryParams.get("condition"));
    const [category, setCategory] = useState(queryParams.get("category"));
    const [location, setLocation] = useState(queryParams.get("location"));
    const [keyword, setKeyword] = useState(queryParams.get("keyword"));

    console.log(keyword, price, condition, category, location);


    useEffect(() => {
        GetItemList();
    }, [])

    const GetItemList = async () => {
        try {
            const conditions = [eq(Listing.status, 'active')];
    
            if (condition && condition !== 'undefined') {
                conditions.push(eq(Listing.condition, condition));
            }
    
            if (location && location !== 'undefined') {
                conditions.push(eq(Listing.location, location));
            }
    
            if (category && category !== 'undefined') {
                conditions.push(eq(Listing.category, category));
            }
    
            if (price && !isNaN(price)) {
                conditions.push(lt(Listing.sellingPrice, Number(price)));
            }
    
            if (keyword && typeof keyword === 'string' && keyword.trim() !== 'undefined') {
                conditions.push(or(
                    ilike(Listing.listingTitle, `%${keyword.trim()}%`),
                ));
            }
    
            const result = await db.select().from(Listing)
                .innerJoin(Images, eq(Listing.id, Images.ListingId))
                .where(and(...conditions));
    
            const resp = Service.FormatResult(result);
            console.log(resp);
    
            setItemList(resp);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    

  return (
<div>
    <title>Search Result</title>
    <link rel="icon" type="image/x-icon" href="/logo.svg" />
<   HeaderNoInput/>

    <div className="grid lg:grid-cols-8 h-full">
        <div className="grid col-span-2 h-full">
        <   SearchResult/>
        </div>
        
        <div className="p-10 grid col-span-6 rounded-lg shadow-lg">
            <h2 className="font-bold text-4xl text-left text-green-900">Search Result</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-7">
                {itemList.length > 0 ? itemList.map((item,index)=> (
                    <Item key={index} item={item}/>
                )) : [1,2,3,4,5,6,7,8].map((_, index) => (
                    <div key={index} className="h-[400px] w-[250px] gap-5 rounded-xl bg-slate-200 animate-pulse"></div>
                ))}
            </div>
        </div>
    </div>
    <Footer/>
</div>
  )
}

export default RadioSearch