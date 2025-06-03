import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WelcomePic from '@/components/WelcomePic'
import React from 'react'
import MyContact from './Contact'

function AboutUs() {
  return (
    <div>
        <title>About SecondMat</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
        <Header/>

        <WelcomePic/>
        <div className="w-full p-10 md:px-20">
            <div>
                <h2 className="font-bold text-3xl md:text-5xl text-green-900">About Us</h2>

                    <div className="border rounded-lg hover:shadow-md border-green-900 my-5">
                        <h3 className="m-7 bg-green-700 p-2 rounded-md font-semibold text-2xl md:text-3xl text-white">Welcome to SecondMat 🌱</h3>
                        <p className="text-md mx-7 my-1">At SecondMat, we believe that every item deserves a second chance — and so does our planet.</p>
                        <p className="text-md mx-7 my-1">Founded on a passion for sustainability and community-driven change, SecondMat is an online marketplace where you can buy, sell, and give new life to secondhand treasures.</p>
                        <p className="text-md mx-7 my-1 mb-7">Our mission is simple: <span className="italic"><b>make secondhand shopping easy, trustworthy, and impactful.</b></span></p>
                    </div>
            

                    <div className="border rounded-lg hover:shadow-md border-green-900 my-5">
                        <h3 className="m-7 bg-green-700 p-2 rounded-md font-semibold text-2xl md:text-3xl text-white">Why We Exist</h3>
                        <ul className="text-md mx-7 my-5 list-disc pl-7">
                            <li className="my-1"><strong>🌍 Protect the Planet:</strong> Every reused item reduces waste, saves resources, and cuts carbon emissions.</li>
                            <li className="my-1"><strong>🛒 Empower Communities:</strong> By connecting local buyers and sellers, we strengthen neighborhoods and support conscious living.</li>
                            <li className="my-1 mb-7"><strong>💚 Promote Mindful Consumption:</strong> We make it simple for everyone to choose better — for their wallets and for the Earth.</li>
                        </ul>
                    </div>

                    <div className="border rounded-lg hover:shadow-md border-green-900 my-5">
                        <h3 className="m-7 bg-green-700 p-2 rounded-md font-semibold text-2xl md:text-3xl text-white">Our Vision</h3>
                        <p className="text-md mx-7 my-1 mb-7">We envision a world where sustainable choices are second nature, where quality pre-loved items are celebrated, and where buying secondhand is the first choice, not the last.</p>
                    </div>

                    <div className="border rounded-lg hover:shadow-md border-green-900 my-5">
                        <h3 className="m-7 bg-green-700 p-2 rounded-md font-semibold text-2xl md:text-3xl text-white">Join Us</h3>
                        <p className="text-md mx-7 my-1">Whether you’re decluttering, hunting for great deals, or taking small steps toward a greener lifestyle, SecondMat is here to support you.</p>
                        <p className="text-md mx-7 my-1 mb-7"><span className="italic"><strong>Together, let's build a vibrant, sustainable future — one listing at a time.</strong></span></p>
                    </div>

                    <div className="border rounded-lg hover:shadow-md border-green-900 my-5" id="contact">
                        <h3 className="m-7 bg-green-700 p-2 rounded-md font-semibold text-2xl md:text-3xl text-white">Contact Information</h3>
                        <ul>
                            <li>
                                    <p className="text-md mx-7 my-1"><strong>📧 Contact Us:</strong></p>
                                    <a href="mailto: ngocanhthu.work@gmail.com" className="text-gray-700 transition hover:opacity-75 text-md mx-7 my-1"> 
                                    ngocanhthu.work@gmail.com </a>
                            </li>

                            <li>
                                    <p className="text-md mx-7 my-1"><strong>🕒 Support Hours:</strong></p>
                                    <p className="text-gray-700 text-md mx-7 my-1">Monday – Friday</p>
                                    <p className="text-gray-700 text-md mx-7 mt-1 mb-7">9:00 AM – 6:00 PM (GMT-4)</p>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs