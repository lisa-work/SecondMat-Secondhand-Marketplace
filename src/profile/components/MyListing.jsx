import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import { db } from './../../../configs'
import { Images, Listing } from './../../../configs/schema'
import { desc, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Service from '@/Shared/Service'
import Item from '@/components/Item'
import { FaTrash } from "react-icons/fa"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WelcomePic from '@/components/WelcomePic'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'
import { FaRedo } from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"



function MyListing() {

    const {user} = useUser();
    const [itemList, setItemList] = useState([]);
    const [deletedList, setDeletedList] = useState([]);

    useEffect(() => {
        if (user) {
            GetUserListing();
            GetUserDeleted();
        }
    }, [user]);

    const GetUserListing = async() => {
        const result = await db.select().from(Listing)
        .leftJoin(Images, eq(Listing.id, Images.ListingId))
        .where(eq(Listing.createdBy,user?.primaryEmailAddress?.emailAddress))
        .where(eq(Listing?.status, 'active'))
        .orderBy(desc(Listing.id))

        const resp = Service.FormatResult(result)
        console.log(resp);
        setItemList(resp);
    }

        const GetUserDeleted = async() => {
        const result = await db.select().from(Listing)
        .leftJoin(Images, eq(Listing.id, Images.ListingId))
        .where(eq(Listing.createdBy,user?.primaryEmailAddress?.emailAddress))
        .where(eq(Listing?.status, 'history'))
        .orderBy(desc(Listing.id))

        const resp = Service.FormatResult(result)
        console.log(resp);
        setDeletedList(resp);
    }

    const moveToHistory = async (id) => {
        try {
            await db
            .update(Listing)
            .set({ status: 'history' })
            .where(eq(Listing.id, id));
            toast("Moving to History...");
            location.reload();
            window.scrollTo(400, 400);
        } catch (error) {
            console.error("Error moving to history:", error);
            toast('Something went wrong while deleting the item')
        }
    }

    const restoreItem = async (id) => {
        try {
            await db
            .update(Listing)
            .set({ status: 'active' })
            .where(eq(Listing.id, id));
            toast("Restoring...");
            location.reload();
            window.scrollTo(400, 400);
        } catch (error) {
            console.error("Error restoring the item:", error);
            toast('Something went wrong while restoring the item')
        }
    }

const deletePermanently = async (id) => {
    const confirmed = window.confirm("Are you sure you want to permanently delete this item and all its associated images?");
    if (!confirmed) {
        return;
    }

    try {
        await db.delete(Images).where(eq(Images.ListingId, id));

        await db.delete(Listing).where(eq(Listing.id, id));

        toast("Item permanently deleted");
        location.reload();
        window.scrollTo(400, 400);
    } catch (error) {
        console.error("Error deleting the items:", error);
        toast('Something went wrong while deleting the item');
    }
};


  return (
    <div>
        <title>My Listing</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
        <Header/>
        <WelcomePic/>

        <div className="px-10 md:px-20 my-10">
            <div className="flex justify-between items-center ">
                    <h2 className="font-bold text-4xl text-green-900">My Listing</h2>
                    <Link to={'/add-listing'}>
                        <Button className="hover:shadow-md hover:bg-green-900 cursor-pointer transition-all bg-green-800">
                            + Add New Listing
                        </Button>
                    </Link>
            </div>

            <div>
                {itemList.length == 0 &&
                <h2 className="mt-3 text-md italic font-semibold text-gray-300 hover:text-gray-400">No Active Listing</h2>}
            </div>

            <div className="mt-5">
                {itemList.length > 0 &&
                <Carousel className="mb-7">
                <CarouselContent>
                {itemList.map((item, index) => (
                    <CarouselItem key={index} className='basis-1/2 md:basis-1/3 lg:basis-1/4'>
                        <Item item={item}/>
                        <div 
                        className='p-3 mt-2 bg-gray-50 rounded-lg flex justify-between'>
                            <Link to={'/add-listing?mode=edit&id='+item?.id} className="w-full">
                                <Button variant="outline" className="w-full cursor-pointer">Edit</Button>
                            </Link>

                            <div className="ml-3">

                                
                            <Button variant="destructive" className="cursor-pointer hover:bg-red-700" 
                            onClick={() => moveToHistory(item.id)}><FaTrash /></Button>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
                }
            </div>

    <Separator className="mt-5"/>

            <div className="flex justify-between items-center mt-5 ">
                    <h2 className="font-bold text-4xl text-green-900">Deleted Listing</h2>
            </div>

            <div>
                {deletedList.length == 0 &&
                <h2 className="mt-3 text-md italic font-semibold text-gray-300 hover:text-gray-400">No Deleted Listing</h2>}
            </div>

            <div className="mt-5">
                {deletedList.length > 0 &&
                <Carousel className="mb-7">
                <CarouselContent>
                {deletedList.map((item, index) => (
                    <CarouselItem key={index} className='basis-1/2 md:basis-1/3 lg:basis-1/4'>
                        <Item item={item}/>
                        
                        <div 
                        className='p-3 mt-2 bg-gray-50 rounded-lg flex justify-between items-center'>
                            <Button variant="outline" className="w-[80%] cursor-pointer"
                             onClick={() => deletePermanently(item.id)}>Delete Permanently</Button>

                            <div>

                            <Button variant="destructive" className="cursor-pointer hover:bg-red-700 p-3" 
                            onClick={() => restoreItem(item.id)}>
                            <FaRedo />
                            </Button>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
                }
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default MyListing