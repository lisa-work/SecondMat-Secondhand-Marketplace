import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

function BuyerGuide() {
  return (
    <div>
        <div className="w-full p-10 md:px-20">
        <h2 className="m-7 bg-green-800 p-2 rounded-md font-semibold text-2xl md:text-3xl text-white">Buyer Guide</h2>
        <Accordion type="single" collapsible className="m-7">

            <AccordionItem value="item-1">
                <AccordionTrigger className="text-md md:text-lg">How do I search for items?</AccordionTrigger>
                <AccordionContent className="text-md">
                Use the search bar or browse categories to find the items you’re looking for. 
                Filter results by location, category, price, and condition for a better match.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger className="text-md md:text-lg">How do I contact a seller?</AccordionTrigger>
                <AccordionContent>
                Click on an item you’re interested in and tap "Message Owner" to start a conversation.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger className="text-md md:text-lg">How do I make an offer?</AccordionTrigger>
                <AccordionContent>
                You can suggest a price lower than the listed price by
                clicking on an item you’re interested in and tap "Make An Offer Price".
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger className="text-md md:text-lg">How do I buy multiple items from the same seller?</AccordionTrigger>
                <AccordionContent>
                Ask the seller if they offer bundle deals. You can arrange a 
                discounted price for purchasing multiple items together.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
                <AccordionTrigger className="text-md md:text-lg">How should I pay?</AccordionTrigger>
                <AccordionContent>
                Payment is arranged directly between buyer and seller. We recommend using secure methods such as 
                cash upon pick-up or trusted digital transfers.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
                <AccordionTrigger className="text-md md:text-lg">How do I stay safe when buying?</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        <li>Always meet in a public, well-lit place.</li>
                        <li>Inspect the item before paying.</li>
                        <li>Bring a friend if possible for higher-value purchases.</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
                <AccordionTrigger className="text-md md:text-lg">What if I have a problem with a transaction?</AccordionTrigger>
                <AccordionContent>
                If an issue arises, communicate with the seller first. If you cannot resolve the issue, 
                you can report the listing or contact our support team.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
    </div>
  )
}

export default BuyerGuide