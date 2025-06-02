import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import React from 'react'
import MyInbox from './components/Inbox'
import Footer from '@/components/Footer'
import WelcomePic from '@/components/WelcomePic'


function ChatInbox() {
  return (
    <div>
        <Header/>
        <WelcomePic/>
        <div>
            <div className="px-10 md:px-20 my-10">
              <Button className="mb-5 bg-green-800">Inbox</Button>
              <MyInbox/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ChatInbox