import React from 'react'
import { BiCategoryAlt } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { IoHappyOutline } from "react-icons/io5";

function DetailHeader({itemDetail}) {
  return (
    <div>
        {itemDetail?.listingTitle? 
        <div>
            <h2 className="font-bold text-green-900 text-3xl md:text-4xl mb-5">{itemDetail?.listingTitle}</h2>
            <p className="text-sm md:text-md mx-1 my-2">{itemDetail?.tagline}</p>

            <div className="grid grid-cols-2 gap-2 justify-start items-start mx-1 md:flex md:flex-row mt-3">

                <div className="flex gap-2 items-center bg-green-800 rounded-full p-2 md:p-3 size-fit">
                  <CiCalendarDate className="h-6 w-6 text-white"/>
                  <h2 className="text-white text-xs md:text-sm">{itemDetail?.postedOn}</h2>
                </div>

                <div className="flex gap-2 items-center bg-green-800 rounded-full p-2 md:p-3 size-fit">
                  <BiCategoryAlt className="h-6 w-6 text-white "/>
                  <h2 className="text-white text-xs md:text-sm">{itemDetail?.category}</h2>
                </div>

                <div className="flex gap-2 items-center bg-green-800 rounded-full p-2 md:p-3 size-fit">
                  <IoLocationOutline className="h-6 w-6 text-white "/>
                  <h2 className="text-white text-xs md:text-sm">{itemDetail?.location}</h2>
                </div>

                
                <div className="flex gap-2 items-center bg-green-800 rounded-full p-2 md:p-3 size-fit">
                  <IoHappyOutline className="h-6 w-6 text-white"/>
                  <h2 className="text-white text-xs md:text-sm">{itemDetail?.view} views</h2>
                </div>
            </div>
        </div>:
          <div className="w-full rounded-xl h-[100px] bg-slate-200 animate-pulse"></div>}
    </div>
  )
}
export default DetailHeader