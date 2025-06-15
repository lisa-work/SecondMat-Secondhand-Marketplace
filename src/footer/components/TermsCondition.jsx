import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function TermsCondition() {
  return (
    <div>
        <title>Terms & Condition</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>        

    <div className="w-full">
        
        <h2 className="font-bold text-3xl md:text-5xl text-green-900 my-7">Terms and Conditions</h2>


        <div className="my-3">
        <p>Welcome to SecondMat!
        These Terms and Conditions govern your access to and use of the SecondMat website, platform, and services. By using SecondMat, you agree to comply with these terms. Please read them carefully.</p>
        </div>

<div className="md:grid md:grid-cols-2 md:gap-7">
<div className="md:border-r-2 md:pr-3">
        <div className="my-5">
        <h3><strong>1. About SecondMat</strong></h3>
        <p>SecondMat is an online secondhand marketplace where users can buy, sell, and exchange pre-owned items. We aim to promote sustainable consumption and support environmentally friendly practices.</p>
        </div>

        <div className="my-5">
        <h3><strong>2. Acceptance of Terms</strong></h3>
        <p>By creating an account, browsing, or posting a listing on SecondMat, you agree to these Terms and our Privacy Policy. If you do not agree, you may not use our services.</p>
        </div>

        <div className="my-5">
        <h3><strong>3. User Responsibilities</strong></h3>
            <li>Provide accurate, honest information when creating listings or communicating with other users.</li>
            <li>Only post items that are legal, safe, and permitted under our [Prohibited Items Policy].</li>
            <li>Conduct transactions responsibly and communicate clearly and respectfully.</li>
            <li>Maintain the security of your account credentials.</li>
        </div>

        <div className="my-5">
            <h3><strong>4. Listings and Transactions</strong></h3>
                <li>All transactions are directly between users.</li>
                <li>SecondMat does not guarantee the quality, legality, or safety of listed items.</li>
                <li>Buyers are responsible for inspecting items before purchase.</li>
                <li>Sellers are responsible for accurately describing items.</li>
        </div>

        <div className="my-5">
            <h3><strong>5. Payments and Fees</strong></h3>
                <li>SecondMat does not handle payments or charge transaction fees.</li>
                <li>Payment arrangements are made directly between buyers and sellers.</li>
        </div>

        <div className="my-5">
            <h3><strong>6. Refunds and Returns</strong></h3>
                <li>SecondMat does not process refunds or returns.</li>
                <li>Refunds and returns are solely handled between buyers and sellers, in accordance with our [Refund Policy] and [Return Policy].</li>
        </div>
</div>

<div className="md:pl-1">
        <div className="my-5">
            <h3><strong>7. Prohibited Conduct</strong></h3>
            <p>Users agree not to:</p>
            <li>Post illegal, counterfeit, or prohibited items</li>
            <li>Engage in fraudulent transactions or misrepresentations</li>
            <li>Harass, threaten, or abuse other users</li>
            <li>Upload harmful or malicious content</li>
            <li>Violate any applicable laws or regulations</li>
            <p>Violations may result in account suspension or removal without notice.</p>
        </div>

        <div className="my-5">
            <h3><strong>8. Content Ownership</strong></h3>
            <p>You retain ownership of content you post (such as item photos and descriptions) but grant SecondMat a non-exclusive, royalty-free license to use, display, and promote your content on our platform.</p>
        </div>

        <div className="my-5">
            <h3><strong>9. Account Suspension or Termination</strong></h3>
            <p>SecondMat may suspend or terminate user accounts for violations of these Terms, misconduct, or any activity that harms the community or platform integrity.</p>
        </div>

        <div className="my-5">
            <h3><strong>10. Limitation of Liability</strong></h3>
            <p>SecondMat provides the platform “as is.”
            We are not liable for:</p>
                <li>Transactions between users</li>
                <li>Loss or damage arising from the use of our services</li>
                <li>Content posted by users</li>
            <p>Use SecondMat at your own risk.</p>
        </div>

        <div className="my-5">
            <h3><strong>11. Changes to Terms</strong></h3>
            <p>We may update these Terms and Conditions from time to time.
                We will notify you of significant changes by posting a notice on our site or contacting you directly.
                Continued use of SecondMat after changes means you accept the updated terms.</p>
        </div>

        <div className="my-5">
            <h3><strong>12. Governing Law</strong></h3>
            <p>These Terms are governed by the laws of Canada, without regard to conflict of law principles.</p>
        </div>
        </div>
        </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export default TermsCondition