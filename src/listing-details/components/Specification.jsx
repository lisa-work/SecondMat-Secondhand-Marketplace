import IconField from '@/add-listing/components/IconField'
import ItemSpecification from '@/Shared/ItemSpecification'
import React from 'react'

function Specification({itemDetail}) {
    console.log(itemDetail);

  return (
    <div className='p-5 rounded-xl border shadow-md hover:shadow-lg mt-7 w-full'>
        
        <h2 className="font-bold text-2xl text-green-800">Details</h2>
        {itemDetail? ItemSpecification.map((item, index) => (
            <div key={index} className="mt-5 flex items-center justify-between">  
                <h2 className="flex gap-2"><IconField icon={item.icon}/>{item.label}</h2>
                <h2>{itemDetail?.[item?.name]}</h2>
            </div>
        )):
        <div className="w-[60%] h-[500px] rounded-xl bg-slate-200 animate-pulse mt-7">
        </div>
    }
    </div>
  )
}

export default Specification