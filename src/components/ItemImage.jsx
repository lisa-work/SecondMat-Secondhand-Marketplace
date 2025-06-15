import React from 'react'
import { Separator } from './ui/separator'
import { IoLocationOutline } from "react-icons/io5"
import { IoPricetagsOutline } from "react-icons/io5"
import { IoOpenOutline } from "react-icons/io5";
import { VscDebugBreakpointConditionalUnverified } from "react-icons/vsc";
import { BiCategoryAlt } from "react-icons/bi";

function ItemImage({item}) {

  const handleClick = () => {
    window.location.href = '/listing-details/' + item?.id;
  };

  return (

        <div onClick={handleClick} className='rounded-xl border hover:shadow-md cursor-pointer mx-1 h-fit my-2'>
            <img src={item?.images[0]?.imageUrl || 'imgloader.jpg'}
            className="rounded-2xl object-cover p-1 w-25 h-25"/>
        </div>
  )
}

export default ItemImage