import React from 'react'
import { IoOpenOutline } from "react-icons/io5";

function CommunityGuide() {
  return (
    <div className="w-full p-10 md:px-20">
        <h2 className="m-7 bg-green-800 p-2 rounded-md font-semibold text-2xl md:text-3xl text-white">Community Guide</h2>

        <div className="m-7 border rounded-lg border-green-900 p-3 hover:shadow-md">
            <h3 className="underline underline-offset-2"><strong>1. Respect Everyone</strong></h3>
            <ul className="list-disc pl-8">
                <li>Treat all users with kindness and courtesy.</li>
                <li>Discrimination, harassment, hate speech, or abuse of any kind is strictly prohibited.</li>
                <li>Respect different backgrounds, opinions, and experiences.</li>
            </ul>
        </div>

        <div className="m-7 border rounded-lg border-green-900 p-3 hover:shadow-md">
            <h3 className="underline underline-offset-2"><strong>2. Be Honest and Transparent</strong></h3>
            <ul className="list-disc pl-8">
                <li>Accurately describe your items — mention any flaws, damage, or missing parts.</li>
                <li>Be clear about prices, pick-up locations, and conditions for sale.</li>
                <li>No misleading listings, fake profiles, or fraudulent behavior.</li>
            </ul>
        </div>

        <div className="m-7 border rounded-lg border-green-900 p-3 hover:shadow-md">
            <h3 className="underline underline-offset-2"><strong>3. Promote Sustainability</strong></h3>
            <ul className="list-disc pl-8">
                <li>Prioritize selling and buying secondhand, upcycled, or repurposed goods.</li>
                <li>Encourage waste reduction and mindful consumption.</li>
                <li>Support the community’s goal to live greener, cleaner, and smarter.</li>
            </ul>
        </div>

        <div className="m-7 border rounded-lg border-green-900 p-3 hover:shadow-md">
            <h3 className="underline underline-offset-2"><strong>4. Stay Safe</strong></h3>
            <ul className="list-disc pl-8">
                <li>Arrange to meet buyers/sellers in public, well-lit locations.</li>
                <li>Inspect items before buying or selling.</li>
                <li>Trust your instincts — if something doesn’t feel right, don’t proceed.</li>
            </ul>
        </div>

        <div className="m-7 border rounded-lg border-green-900 p-3 hover:shadow-md">
            <h3 className="underline underline-offset-2"><strong>5. No Prohibited Items</strong></h3>
            <p>Do not list or sell:</p>
            <ul className="list-disc pl-8">
                <li>Illegal items or stolen goods</li>
                <li>Hazardous materials</li>
                <li>Counterfeit or pirated products</li>
                <li>Items violating local laws and regulations</li>
            </ul>
            <div className="flex mt-2 items-center justity-center 
            hover:scale-101 transition-all hover:cursor-pointer">
            <IoOpenOutline className="text-blue-700 "/>
            <a href="#" className="text-sm text-blue-700 underline pl-1">More Information On Prohibited Items Policy</a>
            </div>
        </div>

        <div className="m-7 border rounded-lg border-green-900 p-3 hover:shadow-md">
            <h3 className="underline underline-offset-2"><strong>6. Help Us Grow a Positive Space</strong></h3>
            <ul className="list-disc pl-8">
                <li>Communicate respectfully — respond to messages promptly and politely.</li>
                <li>Leave honest feedback after transactions to help others.</li>
                <li>Report suspicious or inappropriate behavior to our support team.</li>
            </ul>
        </div>

        <div className="m-7 border rounded-lg border-green-900 p-3 hover:shadow-md">
            <h3 className="underline underline-offset-2"><strong>7. Enjoy the Experience</strong></h3>
            <p>This is your community — buy and sell with care, 
                share sustainably, and build connections locally! Together, 
                every small action helps make a big impact on our planet 🌎💚.</p>
        </div>

        <div className="m-7 border rounded-lg border-green-900 p-3 text-green-900 hover:shadow-sm hover:shadow-green-900">
            <h3 className="underline underline-offset-2"><strong>Need Help?</strong></h3>
            <p>If you have questions, feedback, or concerns, please reach out anytime.
            <p>
            📧 Contact Us: ngocanhthu.work@gmail.com
            </p>
            </p>
        </div>

    </div>
  )
}

export default CommunityGuide