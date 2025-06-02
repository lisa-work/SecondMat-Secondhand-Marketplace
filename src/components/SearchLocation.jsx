import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { IoSearchOutline } from "react-icons/io5"
import Data from '@/Shared/Data'
import { Link } from 'react-router-dom';
import { Input } from './ui/input';


function SearchLocation() {

    const [location, setLocation] = useState();
    const [condition, setCondition] = useState();
    const [price, setPrice] = useState(1000);
    const [category, setCategory] = useState();
    const [keyword, setKeyword] = useState();
    const [searchbyKey, setKey] = useState();

    const searchKey = (key) => {
      setKey(key);
        console.log(key);
    }

    const handleClick = () => {
    window.location.href = "/search-location?location="+location+"&keyword="+keyword+"&price="+price+"&condition="+condition+"&category="+category;
    }

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const initialKeyword = params.get('keyword') || '';
  const initialCondition = params.get('condition') || "";
  const initialLocation= params.get('location') || "";
  const initialCategory = params.get('category') || "";
  const initialPrice = params.get('price') || "";
  setKeyword(initialKeyword);
  setCondition(initialCondition);
  setLocation(initialLocation);
  setCategory(initialCategory);
  setPrice(initialPrice);
  console.log("Search by: ", keyword, condition, location, category, price)   
}, []);

return (
<div>

    <h2 className="mt-10 xl:hidden flex items-center justify-center text-2xl md:text-3xl font-bold
         text-emerald-900 underline underline-offset-2">
             Web-based market made better
    </h2>

    <div className="flex items-center justify-center my-3 xl:hidden">
        <div className="p-3 border-2 m-5 bg-white rounded-4xl 
            hover:shadow-md 
            flex flex-row items-center w-[65%] h-12 md:w-[80%] lg:w-[70%]">
            <Input className='border-none shadow-none h-12
                md:rounded-full md:flex md:flex-row 
                items-center w-full'
                type="input" placeholder="What are you looking for?"
                onChange={(e)=>searchKey(e.target.value)}
                />

                <Link to={"/key?keyword="+searchbyKey}>
                    <IoSearchOutline className='flex text-4xl rounded-full bg-emerald-800 p-2 text-white hover:scale-105 
                    hover:font-bold transition-all'/>   
                </Link>
         
        </div>
    </div>

    <h2 className='mt-10 font-bold text-xl md:text-2xl 
        text-center text-green-900' >Explore By Your Criteria</h2>

    <div className="relative">
        <div className="flex items-center justify-center">
            <div className='p-3 border-2 m-5 rounded-md 
                md:rounded-4xl flex-col hover:shadow-md 
                md:flex md:flex-row gap-10 items-center w-[65%] md:h-17 md:w-[80%] lg:w-[70%]'>

<div className="flex flex-col w-full h-ful">
                    <Input className="h-fit outline-none border-none w-full" type="range" min={0} max={1000} onChange={(e) => setPrice(e.target.value)} value={price}/>
                    <p className="text-xs flex justify-start">Under CAD {price}</p>
</div>

    <div className="flex items-start justify-start my-3 w-full">
        <div className="bg-white">
            <Input className='border-1 text-sm shadow-none
                md:rounded-full md:flex md:flex-row 
                items-center w-full
                outline-none md:border-none hover:opacity-70'
                type="input" placeholder="Keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                />
        </div>
    </div>


                <Select onValueChange={(value) => {
                    setCondition(value);
                }}>
                        <SelectTrigger className="outline-none my-3 md:border-none shadow-none w-[80%] hover:opacity-70">
                            <SelectValue placeholder={condition || "Condition"}/>
                        </SelectTrigger>
                        <SelectContent>
                        {Data.Condition.map((condition, index) => (
                                <SelectItem key={index} value={condition.condition}>{condition.condition}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>


                    <Select onValueChange={(value) => setLocation(value)}>
                        <SelectTrigger className="outline-none my-3 md:border-none shadow-none w-[90%] hover:opacity-70">
                            <SelectValue placeholder={location || "Location"} />
                        </SelectTrigger>
                        <SelectContent>
                            {Data.Location.map((location, index) => (
                                <SelectItem key={index} value={location.name}>{location.name}</SelectItem>
                            ))}     
                        </SelectContent>
                    </Select>

                    <Select onValueChange={(value) => setCategory(value)}>
                        <SelectTrigger className="outline-none my-3 md:border-none shadow-none w-full hover:opacity-70">
                            <SelectValue placeholder={category || "Category"} />
                        </SelectTrigger>
                        <SelectContent>
                            {Data.Category.map((category, index) => (
                                <SelectItem key={index} value={category.category}>{category.category}</SelectItem>
                            ))}     
                        </SelectContent>
                    </Select>

                <div className="flex justify-end" onClick={handleClick}>
                    <IoSearchOutline className='flex text-4xl rounded-full bg-emerald-800 p-2 text-white hover:scale-105 
                    hover:font-bold transition-all'/>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}

export default SearchLocation