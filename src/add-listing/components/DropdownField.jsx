import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

function DropdownField({item, handleInputChange, itemInfo}) {
  return (
    <div>
        <Select 
        required={item.required} 
        onValueChange={(value) => handleInputChange(item.name, value)}
        defaultValue={itemInfo?.[item?.name]}
        >
        <SelectTrigger className="w-full">
            <SelectValue 
            placeholder={itemInfo?.[item?.name]?itemInfo?.[item?.name]:item.label}
            />
        </SelectTrigger>
        <SelectContent>
            {item?.options?.map((option, index) => (
                <SelectItem key={index} value={option}>{option}</SelectItem>
            ))}
        </SelectContent>
        </Select>
    </div>
  )
}

export default DropdownField