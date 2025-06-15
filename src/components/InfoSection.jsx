import React from 'react'
import { Separator } from './ui/separator'

function InfoSection() {
  return (
<div>
<Separator/>
  <section>
    <div className="mx-10 max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-center md:gap-8">
        <div className="md:col-span-3">
          <img
            src="./InfoSection.jpg"
            className="rounded-lg"
            alt="Information"/>
        </div>

        <div className="lg:col-span-1">
          <div className="max-w-lg lg:max-w-none">
            <h2 className="text-2xl text-green-700 font-semibold sm:text-3xl">
              Give Goods a Second Life — Give Nature a Second Chance
            </h2>

            <p className="mt-4 text-gray-700">
            SecondMat is here to inspire conscious 
            consumption by giving pre-loved items a second life. 
            We believe that every reused item is a step toward reducing waste, 
            conserving resources, and protecting our planet’s future.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default InfoSection