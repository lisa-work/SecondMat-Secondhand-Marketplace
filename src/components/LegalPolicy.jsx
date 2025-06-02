import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from './Header'
import WelcomePic from './WelcomePic'
import TermsCondition from '@/footer/components/TermsCondition'
import Returns from '@/footer/components/Returns'
import Refund from '@/footer/components/Refund'
import Privacy from '@/footer/components/Privacy'
import Prohibited from '@/footer/components/Prohibited'
import { Separator } from './ui/separator'



function LegalPolicy() {
  return (
    
    <div>

        <title>SecondMat Policy</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
        <Header/>

        <WelcomePic/>

        <Tabs defaultValue="terms-condition" className="w-full mt-7 p-10">

            <TabsList className="shadow-md gap-3 bg-gray-50">
                <TabsTrigger value="terms-condition" id="terms-condition" className="text-md text-green-900 font-bold 
                hover:underline underline-offset-2 focus:no-underline">Terms & Condition</TabsTrigger>
                <TabsTrigger value="returns-policy" id="return-policy" className="text-md text-green-900 font-bold 
                hover:underline underline-offset-2 focus:no-underline">Returns Policy</TabsTrigger>
                <TabsTrigger value="refund-policy" id="refund-policy" className="text-md text-green-900 font-bold 
                hover:underline underline-offset-2 focus:no-underline">Refund Policy</TabsTrigger>
                <TabsTrigger value="privacy-policy" id="privacy-policy" className="text-md text-green-900 font-bold
                hover:underline underline-offset-2 focus:no-underline">Privacy Policy</TabsTrigger>
                <TabsTrigger value="prohibited-items-policy" id="prohibited-items-policy" className="text-md text-green-900 font-bold 
                hover:underline underline-offset-2 focus:no-underline">Prohibited Items Policy</TabsTrigger>
            </TabsList>

            <Separator className="mt-3 shadow-md"/>

            <TabsContent value="terms-condition" id="terms-condition">
                <TermsCondition/>
            </TabsContent>

            <TabsContent value="returns-policy" id="return-policy">
                <Returns/>
            </TabsContent>

            <TabsContent value="refund-policy" id="refund-policy">
                <Refund/>
            </TabsContent>

            <TabsContent value="privacy-policy" id="privacy-policy">
                <Privacy/>
            </TabsContent>

            <TabsContent value="prohibited-items-policy" id="prohibited-items-policy">
                <Prohibited/>
            </TabsContent>
        </Tabs>
    </div>
  )
}

export default LegalPolicy