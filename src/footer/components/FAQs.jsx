import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IoOpenOutline } from "react-icons/io5";

function FAQs() {
  return (
    <div>
        <title>FAQs</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>        
        <Header/>
        
    <div className="w-full p-10 md:px-20">
        
        <div>
        <h2 className="font-bold text-3xl md:text-5xl text-green-900">FAQs</h2>
        <div className="border rounded-lg hover:shadow-md border-green-900 my-5">
            <h3 className="m-7 bg-green-800 p-2 rounded-md font-semibold text-2xl md:text-3xl text-white">General</h3>
                    <Accordion type="single" collapsible className="m-7">
            
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-md md:text-lg">What is SecondMat?</AccordionTrigger>
                            <AccordionContent>
                            SecondMat is a secondhand marketplace where you can buy and sell pre-loved items locally, helping reduce waste and protect the environment.
                            </AccordionContent>
                        </AccordionItem>
            
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-md md:text-lg">Is it free to use?</AccordionTrigger>
                            <AccordionContent>
                            Yes! Signing up, listing items, and browsing are all free.
                            </AccordionContent>
                        </AccordionItem>
            
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-md md:text-lg">How do I create an account?</AccordionTrigger>
                            <AccordionContent>
                            Simply click on "Sign In/Sign Up" and use your email to create an account, then start buying or selling!
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
        </div>
        
        <div className="border rounded-lg hover:shadow-md border-green-900 my-5">
            <h3 className="m-7 bg-green-800 p-2 rounded-md font-semibold text-2xl md:text-3xl text-white">Buying</h3>
                    <Accordion type="single" collapsible className="m-7">
            
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-md md:text-lg">How do I find items to buy?</AccordionTrigger>
                            <AccordionContent>
                            Use the search bar or browse by categories. You can also set filters for location, price, and condition.
                            </AccordionContent>
                        </AccordionItem>
            
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-md md:text-lg">How do I contact a seller?</AccordionTrigger>
                            <AccordionContent>
                            Click on an item you like and tap "Message Owner" to negotiate or ask questions.
                            </AccordionContent>
                        </AccordionItem>
            
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-md md:text-lg">How do I pay for an item?</AccordionTrigger>
                            <AccordionContent>
                            Payment is arranged directly between buyer and seller, usually via cash or secure digital payment when meeting for pick-up.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-md md:text-lg">Is it safe to buy from other users?</AccordionTrigger>
                            <AccordionContent>
                            We recommend meeting in public, well-lit places and inspecting items before completing the purchase.
                            </AccordionContent>
                        </AccordionItem>
                        
                        </Accordion>
        </div>

        <div className="border rounded-lg hover:shadow-md border-green-900 my-5">
            <h3 className="m-7 bg-green-800 p-2 rounded-md font-semibold text-2xl md:text-3xl text-white">Selling</h3>
                    <Accordion type="single" collapsible className="m-7">
            
                        <AccordionItem value="item-7">
                            <AccordionTrigger className="text-md md:text-lg">How do I post an item for sale?</AccordionTrigger>
                            <AccordionContent>
                            Click "New Listing" upload photos, add a description, set a price, and post it live.
                            </AccordionContent>
                        </AccordionItem>
            
                        <AccordionItem value="item-8">
                            <AccordionTrigger className="text-md md:text-lg">Can I edit or delete a listing?</AccordionTrigger>
                            <AccordionContent>
                            Yes, go to “My Listings,” select the item, and choose “Edit” or “Delete.”
                            </AccordionContent>
                        </AccordionItem>
            
                        <AccordionItem value="item-9">
                            <AccordionTrigger className="text-md md:text-lg">What kind of items can I sell?</AccordionTrigger>
                            <AccordionContent>
                            You can sell secondhand or upcycled items that are legal and safe. No illegal, counterfeit, or dangerous items are allowed.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-10">
                            <AccordionTrigger className="text-md md:text-lg">How do I handle payments from buyers?</AccordionTrigger>
                            <AccordionContent>
                            Cash at pick-up is recommended, or use secure online transfers agreed upon in advance.
                            </AccordionContent>
                        </AccordionItem>

                        </Accordion>
        </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default FAQs