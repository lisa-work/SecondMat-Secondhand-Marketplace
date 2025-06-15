import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function Returns() {
  return (
    <div>
        <title>Return Policy</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>        
        
        <div className="w-full rounded-xl my-5 mx-auto">
        <h2 className="font-bold text-3xl md:text-5xl text-green-900 mb-7">Return Policy</h2>
        <div className="my-3"> 
            <p>At SecondMat, we connect buyers and sellers for secondhand transactions. Since we do not sell items directly, returns are managed at the discretion of individual sellers.
                We encourage all users to clearly communicate expectations before completing any transaction to ensure a smooth experience.</p>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-7">
        <div className="md:border-r-2 md:pr-3">
                <div className="my-5">
                    <h3><strong>Returns Between Buyers and Sellers</strong></h3>
                            <h4 className="underline">Before Purchase:</h4>
                            <p>Buyers should carefully review item descriptions, request additional photos if needed, and ask the 
                            seller any questions before making a decision.</p>
                            <h4 className="underline">After Purchase:</h4>
                            <p>Returns are not automatically available. Sellers may choose to accept returns, exchanges, 
                                or refunds on a case-by-case basis.</p>
                            <li>If a seller agrees to accept a return, both parties must agree on the terms (who covers return costs, refund method, etc.) before proceeding.</li>
                            <li>All agreements should be clearly documented in messages for reference.</li>
                </div>

                <div className="my-5">
                    <h3><strong>Platform Responsibilities</strong></h3>
                        <li>SecondMat does not guarantee, process, or enforce returns between users.</li>
                        <li>We do not hold payments or intervene in agreements between buyers and sellers.</li>
                        <li>If a serious issue arises (e.g., fraudulent listing, significant item misrepresentation), users can report the case to our support team for review.</li>
                </div>
        </div>

        <div>
                <div className="my-5">
                    <h3><strong>Guidelines for Smooth Transactions</strong></h3>
                        <li>Sellers: Clearly state your return policy (if any) in your listings.</li>
                        <li>Buyers: Confirm the item meets your expectations before purchasing, especially for final sales where returns are not accepted.</li>
                        <li>Both Parties: Be respectful, communicate clearly, and try to resolve any disputes amicably.</li>
                </div>

                <div className="my-5">
                    <h3><strong>Items Typically Not Returnable</strong></h3>
                    <p>Due to the nature of secondhand sales, these items are typically not returnable unless otherwise agreed:</p>
                        <li>Items sold "as-is"</li>
                        <li>Items with disclosed defects</li>
                        <li>Items exchanged in-person after buyer inspection</li>
                </div>

                <div className="my-5">
                    <h3><strong>Reporting Issues</strong></h3>
                    <p>If you believe an item was seriously misrepresented or you encounter fraudulent behavior, please report it to us.</p>
                    <p>📧 Contact Us: [ngocanhthu.work@gmail.com]</p>
                    <p>We review all reports carefully and take necessary action to maintain a safe community.</p>
                </div>
        </div>
        </div>
                <div className="italic">
                    <h3><strong>Final Note</strong></h3>
                    <p>All purchases are considered final unless otherwise agreed upon between buyer and seller.
                    Thank you for helping us build a respectful, responsible, and sustainable marketplace! 🌿</p>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Returns