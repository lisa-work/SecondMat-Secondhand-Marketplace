import React from 'react'
import { PiSubtitlesFill } from "react-icons/pi";
import { RiPriceTagLine } from "react-icons/ri";
import { IoPricetags } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import { VscDebugBreakpointConditionalUnverified } from "react-icons/vsc";

const iconMap = {
    ListingTitleIcon: <PiSubtitlesFill />,
    TagLineIcon: <RiPriceTagLine />,
    OriginalPriceIcon: <IoPricetags />,
    SellingPriceIcon: <IoPricetagsOutline />,
    CategoryIcon: <BiSolidCategory />,
    ConditionIcon: <VscDebugBreakpointConditionalUnverified />,
    DescriptionIcon: <TbFileDescription />,
    LocationIcon: <IoLocation />
}
function IconField({icon}) {
  return (
    <div className='text-green-900 bg-green-100 p-1.5 rounded-full mr-2'>
        {iconMap[icon]}
    </div>
  )
}

export default IconField