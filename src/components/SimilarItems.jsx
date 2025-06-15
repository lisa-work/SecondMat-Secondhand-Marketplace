import React, { useEffect, useState } from 'react'
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
import { and, desc, eq, ne } from 'drizzle-orm';
import Service from '@/Shared/Service';
import { Button } from './ui/button';
import ItemImage from './ItemImage';


function SimilarItems({category, id}) {
      const [itemList, setItemList] = useState([]);

    useEffect(()=> {
      if (category) {
              GetSimilarItems()
      }
    }, [category])

    const GetSimilarItems=async()=>{
      console.log('Fetching similar items for category:', category)
      try {
      const query = db.select().from(Listing)
      .innerJoin(Images, eq(Listing.id, Images.ListingId))
      .where(
          and(
              eq(Listing.status, 'active'),
              eq(Listing.category, category),
              ne(Listing.id, id)
          )
      )
      .orderBy(desc(Listing.sellingPrice))
      .limit(10);

        const result = await query
        const resp = Service.FormatResult(result)
        console.log('Similar items:', resp)
        setItemList(resp)
      } catch (error) {
        console.error('Error fetching similar items:', error)
      }
    }      

  return (
    <div className="mx-5 lg:mx-24" id="neighborhood">
      <h2 className='mt-10 font-bold text-xl md:text-2xl 
      text-center mb-6 text-green-900'>Similar Items</h2>

      <div>
        <div>
          <div className="hidden md:block">
          <Carousel className="mb-7">
          <CarouselContent>
            {itemList?.length>0? itemList.map((item, index) => (
                <CarouselItem key={index} className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
                    <Item item={item}/>
                </CarouselItem>
            )):
            <div>{itemList.length == 0 &&
                <h2 className="mt-3 text-md italic font-semibold text-gray-300 hover:text-gray-400 mx-5">No items from the same category found</h2>}
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
            <Link to={"/search-category?category="+category}>
              <Button className="mb-5 flex justify-center items-center 
              bg-green-900 hover:bg-green-800 hover:scale-103 transition-all duration-300 cursor-pointer">View More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimilarItems