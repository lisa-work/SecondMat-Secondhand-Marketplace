import { Input } from '@/components/ui/input'
import React from 'react'

function NumberField({item, handleInputChange, itemInfo}) {
  return (
    <div className="flex flex-row">
      <div className="w-full">
        <Input type="number"
        step="0.01" 
        name={item?.name} 
        required={item?.required}
        defaultValue={itemInfo?.[item.name]}
        onChange={(e) => handleInputChange(item.name, e.target.value)}/>
      </div>
    </div>
  )
}

export default NumberField