import Data from '@/Shared/Data'
import React from 'react'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className='mt-10' id="category">
      <h2 className='font-bold text-xl md:text-2xl 
        text-center mb-6 text-green-900'>Explore By Category</h2>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 lg:grid-cols-4  
          xl:grid-cols-6 gap-5 grid-center items-center text-center mb-5 w-[65%]"> 
              {Data.Category.map((category, index) => (
                <Link to={'/search-category?category='+category.category} key={index}>
                  <div className="border rounded-2xl items-center 
                  flex flex-col p-2 hover:scale-108 hover:shadow-sm transition-all">
                      <img src={category.icon} width={125} height={125}/>
                      <h2 className="mt-1 text-[0.65rem] md:text-sm">{category.category}</h2>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  )
}

export default Category