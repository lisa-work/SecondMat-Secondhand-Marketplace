import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WelcomePic from '@/components/WelcomePic'
import React from 'react'
import AboutUs from './AboutUs'

function MyContact() {
  return (
    <div>
      
      <title>Contact</title>
      <link rel="icon" type="image/x-icon" href="/logo.svg"></link>

        <div className="w-full px-10 md:px-20">
          <div className="col-span-2 sm:col-span-1">
            <p className="bg-green-800 p-2 rounded-md 
            font-semibold text-2xl md:text-3xl text-white shadow-md">
              Contact Information</p>

            {/* <ul className="mt-6 space-y-4 text-md mx-7 border rounded-lg p-3 hover:shadow-md border-green-900" > */}
            <ul>
              <li>
                <p><strong>📧 Contact Us:</strong></p>
                <a href="mailto: ngocanhthu.work@gmail.com" className="text-gray-700 transition hover:opacity-75"> 
                  ngocanhthu.work@gmail.com </a>
              </li>

              <li>
                <p><strong>🕒 Support Hours:</strong></p>
                <p className="text-gray-700 mt-1">Monday – Friday</p>
                <p className="text-gray-700 mt-1">9:00 AM – 6:00 PM (GMT-4)</p>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
export default MyContact