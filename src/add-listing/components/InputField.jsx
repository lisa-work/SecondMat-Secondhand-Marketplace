import { Input } from '@/components/ui/input'
import React, { useState, useEffect } from 'react'

function InputField({ item, handleInputChange, itemInfo }) {
  const maxCharacters = 300;
  const originalValue = itemInfo?.[item.name] ?? ""; 
  const [text, setText] = useState(originalValue); 

  useEffect(() => {
    setText(originalValue);
  }, [originalValue]);

  return (
    <div className="flex flex-row">
      <div className="w-full">
        <Input
          type="text"
          name={item?.name}
          required={item?.required}
          maxLength={maxCharacters}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            handleInputChange(item.name, e.target.value);
          }}
        />
        <p className="flex justify-end items-end text-xs text-gray-400 mt-1">
          {maxCharacters - text.length} characters left
        </p>
      </div>
    </div>
  )
}

export default InputField