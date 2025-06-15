import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function Refund() {
  return (
    <div>
        <title>Refund Policy</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>  
              
        <div className="w-full mx-auto rounded-xl my-5">
            <h2 className="font-bold text-3xl md:text-5xl text-green-900 mb-7">Refund Policy</h2>
            <div className="my-3">
                <p>At SecondMat, we provide a platform for buyers and sellers to connect and complete secondhand transactions. Because we do not directly sell or ship items, all sales are made directly between users.
                    As a result, refunds, returns, or exchanges are not guaranteed by SecondMat and must be agreed upon between the buyer and seller.</p>
            </div>

            <div className="my-3">
                <h3><strong>Refunds Between Buyers and Sellers</strong></h3>
                    <li>Before purchasing, buyers are encouraged to inspect the item carefully and ask any necessary questions.</li>
                    <li>After the sale, it is up to the seller's discretion whether to offer a refund, exchange, or partial refund if an issue arises.</li>
                    <li>Sellers are encouraged to clearly communicate their refund policy (if any) in their item description or during the transaction.</li>
            </div>

            <div className="my-3">
                <h3><strong>Platform Responsibilities</strong></h3>
                    <li>SecondMat does not process payments, hold funds, or mediate disputes over refunds.</li>
                    <li>We encourage buyers and sellers to resolve issues respectfully through communication.</li>
                    <li>If a serious dispute arises (such as fraud or misrepresentation), users can report the transaction to our support team for review.</li>
            </div>

            <div className="my-3">
                <h3><strong>Best Practices for Safer Transactions</strong></h3>
                    <li>Meet in person when possible and inspect items carefully before finalizing the sale.</li>
                    <li>If you agree on a refund, document the agreement in your conversation (such as in chat messages) for clarity.</li>
                    <li>Use secure, traceable payment methods if digital transactions are involved.</li>
            </div>

            <div className="my-3">
                <h3><strong>Reporting Problems</strong></h3>
                <p>
                If you believe you have been a victim of fraud, misrepresentation, 
                or other misconduct, please report the incident immediately.</p>
                <p>📧 Contact Us: [your-email@example.com]</p>
                <p>We take reported violations seriously and may suspend or ban 
                accounts that break our community rules.
                </p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Refund