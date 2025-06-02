import React from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Category from './components/Category'
import MostSearched from './components/MostSearched'
import Footer from './components/Footer'
import InfoSection from './components/InfoSection'
import ItemsNearYou from './components/ItemsNearYou'
import WelcomePic from './components/WelcomePic'
import HeaderNoInput from './components/HeaderNoInput'

function Home() {
  return (
    <div>
        <title>SecondMat</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>      

        <Header/>

        <WelcomePic/>

        <HomePage/>

        <Category/>

        <MostSearched/>

        <ItemsNearYou/>

        <InfoSection/>

        <Footer/>
       
    </div>
  )
}

export default Home