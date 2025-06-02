import React, { useState, useEffect } from 'react'
import { Textarea } from "@/components/ui/textarea"

function TextAreaField({ item, handleInputChange, itemInfo }) {
    const maxCharacters = 1000;
    const originalValue = itemInfo?.[item.name] ?? "";

    const [text, setText] = useState(originalValue);

    useEffect(() => {
        setText(originalValue);
    }, [originalValue]);

    return (
        <div className="flex flex-row">
            <div className="w-full">
                <Textarea
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

export default TextAreaField
