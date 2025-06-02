import React, { useEffect, useState } from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from './ui/input';
import Data from '@/Shared/Data';
import { Button } from './ui/button';
import { LiaSearchSolid } from "react-icons/lia";
import { Separator } from './ui/separator';


function SearchResult() {
    const [location, setLocation] = useState();
    const [condition, setCondition] = useState();
    const [price, setPrice] = useState(1000);
    const [category, setCategory] = useState();
    const [keyword, setKeyword] = useState();

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
}, []);

    const handleClick = () => {
    window.location.href = "/search-by-criteria?keyword="+keyword+"&price="+price+"&condition="+condition+"&location="+location+"&category="+category;
    }


return (

<div className="h-fit sticky top-0">
    <title>Search By Criteria</title>
    <link rel="icon" type="image/x-icon" href="/logo.svg" />

    <div className="hidden lg:block h-full">

        <div className="flex items-center justify-start w-full mx-3 my-5 ">
            <Input className='h-12 w-[50%] lg:rounded-4xl items-center
                focus-within:ring-1 focus-within:ring-green-900 focus-within:w-[80%]
                transition-all duration-650 ease-in-out' 
                type="input" placeholder="Keyword"
                value={keyword}
                onChange={(e)=>setKeyword(e.target.value)}
                />    
        </div>

        <div className="grid grid-cols-2 col-span-2 gap-4 w-fit sticky top-0 left-0 h-full">
                
            <div className="w-fit h-full border-r">
            <h2 className="mx-5 my-2 font-bold lg:text-md xl:text-lg pt-5">Price</h2>
                <Input type="range" className="mx-5 border-none outline-none w-fit" min={0} max={1000} 
                onChange={(e) => setPrice(e.target.value)} value={price}/>
                <p className="mx-5 text-xs">Under CAD {price}</p>

            <Separator className="my-3"/>

            <h2 className="mx-5 mb-2 mt-3 font-bold lg:text-md xl:text-lg">Condition</h2>
            <RadioGroup defaultValue={condition} onValueChange={setCondition} className="flex font-thin my-2" value={condition}>
                <div className="flex items-start justify-start space-x-2 flex-col">
                    {Data.Condition.map((c, index) => (
                        <div key={index} className="flex flex-row my-2 mx-5 items-center">
                            <RadioGroupItem value={c.condition} id={`condition-${index}`} className="font-thin" />
                            <Label htmlFor={`condition-${index}`} className="mx-2 lg:text-xs xl:text-sm">{c.condition}</Label>
                        </div>
                    ))}
                </div>
            </RadioGroup>

            <Separator className="my-3"/>

            <h2 className="mx-5 mb-2 mt-3 font-bold lg:text-md xl:text-lg">Location</h2>
            <RadioGroup defaultValue={location} onValueChange={setLocation} className="flex font-thin my-2" value={location}>
                <div className="flex items-start justify-start space-x-2 flex-col">
                    {Data.Location.map((loc, index) => (
                        <div key={index} className="flex flex-row my-2 mx-5 items-center">
                            <RadioGroupItem value={loc.name} id={`location-${index}`} className="font-thin" />
                            <Label htmlFor={`location-${index}`} className="mx-2 lg:text-xs xl:text-sm">{loc.name}</Label>
                        </div>
                    ))}
                </div>
            </RadioGroup>
        </div>

        <div className="h-fullw-fit">
                <h2 className="mx-3 font-bold lg:text-md xl:text-lg my-2 pt-5">Category</h2>
                <RadioGroup defaultValue={category} onValueChange={setCategory} className="flex font-thin my-2" value={category}>
                    <div className="flex items-start justify-start space-x-2 flex-col">
                        {Data.Category.map((category, index) => (
                            <div className="flex flex-row my-2 mx-4 items-center">
                                <RadioGroupItem key={index} value={category.category} id={index} className="font-thin"/>
                                <Label htmlFor={index} className="mx-2 lg:text-xs xl:text-sm mb-1">{category.category}</Label>
                            </div>
                        ))}
                    </div>
                </RadioGroup>

                <div className="flex items-center w-full justify-center mt-5 mx-3" onClick={handleClick}>
                    <div className="w-full">
                        <Button className='flex text-md rounded-md items-center justify-center gap-2 bg-emerald-800 p-2 text-white
                        hover:bg-emerald-700 transition-all w-[85%]'><LiaSearchSolid />Search</Button>
                    </div>   
                </div>   
        {/* </div> */}
        </div>
    </div>
    </div>
</div>

  );
}

export default SearchResult;
