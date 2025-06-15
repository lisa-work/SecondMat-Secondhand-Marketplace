import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import Data from '@/Shared/Data'
import { Link } from 'react-router-dom';
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
import { and, eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import { FaLocationDot } from "react-icons/fa6";
import { Button } from './ui/button';
import ItemImage from './ItemImage';


function ItemsNearYou() {
      const [location, setLocation] = useState();
      const [itemList, setItemList] = useState([]);

    useEffect(()=> {
      GetItemsNearYou();
    }, [])

    const GetItemsNearYou=async(location = "North York")=>{
              setLocation(location)
              console.log(location)

          const result = await db.select().from(Listing)
          .innerJoin(Images, eq(Listing.id, Images.ListingId))
          .where(
              and(
                  eq(Listing.status, 'active'),
                  eq(Listing.location, location),
              )
          )
          .limit(20);
               
              const resp = Service.FormatResult(result);
              console.log(resp);
              setItemList(resp);

    }
       

  return (
    <div className="mx-24" id="neighborhood">
      <h2 className='mt-10 font-bold text-xl md:text-2xl 
      text-center mb-6 text-green-900'>Items Near You</h2>

      <div>
        <div>
          <div className='flex items-center border-1 my-5 rounded-xl 
                hover:shadow-md hover:opacity-80 w-fit h-10 border-green-900 ' >
                    <FaLocationDot className="mx-2 text-green-900"/>
                    <Select onValueChange={(value) => GetItemsNearYou(value)} defaultValue="North York">
                        <SelectTrigger className="my-3 w-full border-none outline-none text-green-900">
                            <SelectValue placeholder="Location" className="text-green-900" />
                        </SelectTrigger>
                        <SelectContent className="text-green-900">
                            {Data.Location.map((location, index) => (
                                <SelectItem key={index} value={location.name}>{location.name}</SelectItem>
                            ))}     
                        </SelectContent>
                    </Select>
          </div>

        <div className="hidden md:block">
          <Carousel className="mb-7">
          <CarouselContent>
            {itemList?.length>0? itemList.map((item, index) => (
                <CarouselItem key={index} className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
                    <Item item={item}/>
                </CarouselItem>
            )):
            <div>{itemList.length == 0 &&
                <h2 className="mt-3 text-md italic font-semibold text-gray-300 hover:text-gray-400 mx-5">Found No Items Near You</h2>}
            </div>
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
            <Link to={"/search-location?location="+location}>
              <Button className="mb-5 flex justify-center items-center 
              bg-green-900 hover:bg-green-800 hover:scale-103 transition-all duration-300 cursor-pointer">View More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemsNearYou