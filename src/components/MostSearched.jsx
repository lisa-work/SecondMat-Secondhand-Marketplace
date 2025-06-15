import React, { useEffect, useState } from 'react'
import FakeData from '@/Shared/FakeData'
import Item from './Item'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { db } from './../../configs';
import { Images, Listing } from './../../configs/schema';
import { desc, eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import ItemImage from './ItemImage';

function MostSearched() {
    const [itemList, setItemList] = useState([]);
    
    useEffect(()=> {
      GetPopularItemList();
    }, [])

        const GetPopularItemList=async()=>{
              const result = await db.select().from(Listing)
              .leftJoin(Images, eq(Listing.id, Images.ListingId))
              .where(eq(Listing.status, 'active')) // Only get active listings
              .orderBy(desc(Listing.view)) // Order by view count
              .limit(10)
               
              const resp = Service.FormatResult(result);
              console.log(resp);
              setItemList(resp);

    }

  return (
    <div className="mx-5 lg:mx-24" id="popular">
        <h2 className='mt-10 font-bold text-xl md:text-2xl 
        text-center mb-6 text-green-900' >Top 10 Highest View Items</h2>

    <div className="hidden md:block">
          <Carousel className="mb-7">
          <CarouselContent>
            {itemList?.length>0? itemList.map((item, index) => (
                <CarouselItem key={index} className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
                    <Item item={item}/>
                </CarouselItem>
            )):
                <CarouselItem className='h-[200px] bg-slate-200 animate-pulse'></CarouselItem>
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>

    <div className="md:hidden grid grid-cols-3">
    {itemList?.length>0? itemList.map((item, index) => (
      <ItemImage item={item}/>
    )):
      <div className='h-[200px] bg-slate-200 animate-pulse'></div>
    } 
    </div>

            <div className="flex flex-row-reverse">
            <Link to={"/search-highest-view"}>
              <Button className="mb-5 flex justify-center items-center 
              bg-green-900 hover:bg-green-800 hover:scale-103 transition-all duration-300 cursor-pointer">View More</Button>
            </Link>
          </div>
        
    </div>
  )
}

//FAKE DATA FOR TESTING

// function MostSearched() {
//   console.log(FakeData.List);

// return (
//   <div className="mx-24">
//       <h2 className='mt-10 font-bold text-xl md:text-2xl 
//       text-center mb-6'>Most Searched Items</h2>

//       <Carousel>
//       <CarouselContent>
//       {FakeData.List.map((item, index) => (
//           <CarouselItem key={index} className='basis-1/4'>
//               <Item item={item}/>
//           </CarouselItem>
//       ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//       </Carousel>
//   </div>
// )
// }

export default MostSearched