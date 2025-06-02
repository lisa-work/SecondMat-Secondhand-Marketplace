import React, { useEffect, useState } from 'react'
import Item from './Item'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { db } from '../../configs';
import { Images, Listing } from '../../configs/schema';
import { and, desc, eq, ne } from 'drizzle-orm';
import Service from '@/Shared/Service';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function ItemsSameSeller({sellerEmail, id}) {
      const [itemList, setItemList] = useState([]);

    useEffect(()=> {
      GetItemsSameSeller();
    }, [sellerEmail, id])

    const GetItemsSameSeller=async()=>{
              console.log("Seller Email: " + sellerEmail)

              const result = await db.select().from(Listing)
              .innerJoin(Images, eq(Listing.id, Images.ListingId))
              .where(
                  and(
                      eq(Listing?.createdBy, sellerEmail),
                      eq(Listing.status, 'active'),
                      ne(Listing.id, id)
                  )
              )
              .orderBy(desc(Listing.sellingPrice))
               
              const resp = Service.FormatResult(result);
              console.log(resp);
              setItemList(resp);

    }      

  return (
    <div className="mx-24" id="neighborhood">
      <h2 className='mt-10 font-bold text-xl md:text-2xl 
      text-center mb-6 text-green-900'>Items From The Same Seller</h2>

      <div>
        <div>
          <Carousel className="mb-7">
          <CarouselContent>
            {itemList?.length>0? itemList.map((item, index) => (
                <CarouselItem key={index} className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
                    <Item item={item}/>
                </CarouselItem>
            )):
            <div>{itemList.length == 0 &&
                <h2 className="mt-3 text-md italic font-semibold text-gray-300 hover:text-gray-400 mx-5">There is no other items from the same seller</h2>}
            </div>
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>

        <div className="flex flex-row-reverse">
          <Link to={"/search-same-seller?seller="+sellerEmail}>
            <Button className="mb-5 flex justify-center items-center 
              bg-green-900 hover:bg-green-800 hover:scale-103 transition-all duration-300 cursor-pointer">View More</Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default ItemsSameSeller