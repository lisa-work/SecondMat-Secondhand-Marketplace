import React from 'react'
import { FaCheck } from "react-icons/fa6";

function Description({itemDetail}) {
  return (
    <div className="max-h-112 mb-15 lg:mb-0 w-full ">
{itemDetail?.description ? (
  <div className="p-5 rounded-xl shadow-md hover:shadow-lg mt-7 border h-full bg-white overflow-auto">
    <h2 className="font-bold text-2xl text-green-800">Description</h2>
    <p>{itemDetail?.description}</p>

    {itemDetail?.features && Object.keys(itemDetail.features).length > 0 && (
      <>
        <h2 className="font-bold text-2xl text-green-800 mt-7">Note</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 mt-3 gap-5">
          {Object.entries(itemDetail.features).map(([feature, value]) => (
            <div key={feature}>
              <div className="flex gap-2 items-center">
                <FaCheck className="text-lg p-1 rounded-full bg-green-100 text-green-900" />
                <h2>{feature}</h2>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
) : (
  <div className="w-full h-[150px] mt-7 bg-slate-200 animate-pulse rounded-xl"></div>
)}
    </div>
  )
}

export default Description