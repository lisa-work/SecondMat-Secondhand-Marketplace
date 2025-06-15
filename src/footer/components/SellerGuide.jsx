import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

function SellerGuide() {
  return (
    <div className="w-full p-10 md:px-20">
        <h2 className="m-7 bg-green-800 p-2 rounded-md font-semibold text-2xl md:text-3xl text-white">Seller Guide</h2>
            <Accordion type="single" collapsible className="m-7">

            <AccordionItem value="item-1">
                <AccordionTrigger className="text-md md:text-lg">How do I list an item for sale?</AccordionTrigger>
                <AccordionContent>
                Tap "Add New Listing", upload clear photos, write an honest description, set your price, and choose a pick-up location or ship the items. Then post it for buyers to see!
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger className="text-md md:text-lg">What can I sell?</AccordionTrigger>
                <AccordionContent>
                You can sell secondhand, pre-loved, or upcycled items that are legal and safe. Prohibited items include counterfeit goods, hazardous materials, and anything illegal.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger className="text-md md:text-lg">How should I price my item?</AccordionTrigger>
                <AccordionContent>
                Check similar listings to set a competitive price. Factor in the condition, brand, and market demand.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger className="text-md md:text-lg">How do I edit or delete my listing?</AccordionTrigger>
                <AccordionContent>
                Go to “My Listings,” select the item you want to change, and choose “Edit” or “Delete” from the options menu.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger className="text-md md:text-lg">How do I bundle multiple items for sale?</AccordionTrigger>
                <AccordionContent>
                Encourage buyers to purchase more by offering bundle deals! Mention it in your item descriptions or negotiate through messages.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
                <AccordionTrigger className="text-md md:text-lg">How should I arrange payment?</AccordionTrigger>
                <AccordionContent>
                Agree with the buyer beforehand. We recommend cash on pick-up or secure digital transfers. Always confirm payment before handing over the item.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
                <AccordionTrigger className="text-md md:text-lg">Tips for a faster sale:</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        <li>Upload multiple clear, high-quality photos</li>
                        <li>Write detailed, honest descriptions</li>
                        <li>Respond quickly to buyer inquiries</li>
                        <li>Offer fair prices and bundle discounts</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
                <AccordionTrigger className="text-md md:text-lg">How do I stay safe when selling?</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        <li>Meet in public places</li>
                        <li>Bring a friend for high-value transactions</li>
                        <li>Accept cash or secure payments only</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
                <AccordionTrigger className="text-md md:text-lg">What if I encounter a problem with a buyer?</AccordionTrigger>
                <AccordionContent>
                If communication issues or problems arise, try to resolve them politely. If necessary, report the buyer or contact our support team for help.
                </AccordionContent>
            </AccordionItem>
            </Accordion>
    </div>
  )
}

export default SellerGuide