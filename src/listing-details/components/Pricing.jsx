import { Button } from '@/components/ui/button'
import React from 'react'

function Pricing({itemDetail}) {
  return (
    <div className="flex flex-col justify-center items-center mt-1 lg:my-7">
      <div className='p-3 rounded-xl border shadow-md w-full flex flex-col justify-center items-center'>
          <h2 className="font-bold mt-1 text-5xl text-center text-green-900">CAD {itemDetail?.sellingPrice}</h2>
          <Button 
          className="mt-7 mb-2 bg-green-900 text-white hover:bg-green-800 text-md" size="lg">
            Make an offer
          </Button>
      </div>
    </div>
  )
}

export default Pricing