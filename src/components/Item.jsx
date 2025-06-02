import React from 'react'
import { Separator } from './ui/separator'
import { IoLocationOutline } from "react-icons/io5"
import { IoPricetagsOutline } from "react-icons/io5"
import { IoOpenOutline } from "react-icons/io5";
import { VscDebugBreakpointConditionalUnverified } from "react-icons/vsc";
import { BiCategoryAlt } from "react-icons/bi";

function Item({item}) {

  const handleClick = () => {
    window.location.href = '/listing-details/' + item?.id;
  };

  return (

        <div onClick={handleClick} className='rounded-xl border hover:shadow-md cursor-pointer mx-1 h-150 my-2'>
            <img src={item?.images[0]?.imageUrl || 'imgloader.jpg'}
            className="rounded-3xl object-cover p-3 w-200 h-80"/>
            
            <div className="p-4 lg:h-75">
              
            <h2 className='text-sm font-medium mb-2 text-black md:text-md lg:text-xl line-clamp-1'>{item?.listingTitle}</h2>

              <div className="flex flex-row  items-center justify-between">
              <h2 className="text-sm lg:text-md text-gray-500">{item?.view} views</h2>
              <h2 className="text-sm lg:text-md flex items-center justify-end text-blue-500 
                hover:cursor-pointer hover:text-blue-600 hover:underline 
                hover:underline-offset-2">
                <IoOpenOutline className="mr-2"/>
                More Details
              </h2>
              </div>

                <Separator className="mt-3 mb-3"/>

                <div>

                    <div className="text-sm flex items-center mt-2">
                    <IoPricetagsOutline className="mr-2"/>
                    <h2>CAD {item?.sellingPrice}</h2>
                    </div>

                    <div className="text-sm flex items-center mt-2">
                    <IoLocationOutline className="mr-2"/>
                    <h2>{item?.location}</h2>
                    </div>

                    <div className="text-sm flex items-center mt-2">
                    <BiCategoryAlt className="mr-2"/>
                    <h2>{item?.category}</h2>
                    </div>

                    <div className="text-sm flex items-center mt-2">
                    <VscDebugBreakpointConditionalUnverified className="mr-2"/>
                    <h2>{item?.condition}</h2>
                    </div>                          

                  <Separator className="my-3"/>
                  <div className="hidden lg:flex items-center mt-2">
                  <h2 className="font-thin mb-3 line-clamp-2">{item?.description}</h2>
                  </div>
                </div>
            </div>
        </div>
  )
}

export default Item