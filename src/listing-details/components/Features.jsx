import React from 'react'
import { FaCheck } from "react-icons/fa6";

function Features({features}) {
console.log(features);
  return (
    <div>
        <div className="p-5 rounded-xl border shadow-md my-7 w-full hover:shadow-lg">
            <h2 className="font-bold text-2xl text-green-800">Note</h2>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 mt-3 gap-5">
                {features&&Object.entries(features).map(([features, value]) => (
                    <div key={features}>
                        <div className="flex gap-2 items-center">
                            <FaCheck className="text-lg p-1 rounded-full bg-green-100 text-green-900"/>
                            <h2>{features}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    // 
  )
}

export default Features