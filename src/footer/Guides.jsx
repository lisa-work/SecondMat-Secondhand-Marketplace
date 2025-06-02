import Header from '@/components/Header'
import React from 'react'
import BuyerGuide from './components/BuyerGuide'
import SellerGuide from './components/SellerGuide'
import CommunityGuide from './components/CommunityGuide'
import Footer from '@/components/Footer'
import WelcomePic from '@/components/WelcomePic'

function Guides() {
  return (
    <div>
        <title>Guides</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
        <Header/>
        <WelcomePic/>

          <div id="buyer-guide">
              <BuyerGuide/>
          </div>

          <div id="seller-guide">
              <SellerGuide/>
          </div>
          
          <div id="community-guide">
              <CommunityGuide/>
          </div>
        <Footer/>
    </div>
  )
}

export default Guides