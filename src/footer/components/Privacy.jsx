import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function Privacy() {
  return (
    <div>
      <title>Privacy Policy</title>
      <link rel="icon" type="image/x-icon" href="/logo.svg"></link>      
      
      <div className="w-full mx-auto rounded-xl my-5">
        <h2 className="font-bold text-3xl md:text-5xl text-green-900 mb-7">Privacy Policy</h2>
        <p>At SecondMat, your privacy is important to us. This Privacy Policy explains how we collect, use, 
            and protect your information when you use our website and services.</p>
      <div className="md:grid md:grid-cols-3 md:gap-7 grid-auto-columns items-center justify-center mt-3">
      <div className="md:border-r-2 md:pr-3">            
        <div className="my-3">
        <strong>1. Information We Collect</strong>
        <p>We collect information to provide a better user experience and improve our services. This includes:</p>
            <li>Personal Information: When you register, we may collect your name, email, phone number, and location.</li>
            <li>Listing Details: Any information you provide in item listings or communication with other users.</li>
            <li>Usage Data: Information about how you interact with the platform, such as pages visited, items viewed, and searches.</li>
            <li>Device Information: IP address, browser type, and device identifiers for analytics and security.</li>
        </div>

        <div className="my-3">
          <strong>2. How We Use Your Information</strong>
          <p>We use the information we collect to:</p>
            <li>Create and manage your account</li>
            <li>Connect you with buyers and sellers</li>
            <li>Improve and personalize your experience</li>
            <li>Communicate with you (e.g., updates, offers, newsletters)</li>
            <li>Monitor platform security and prevent fraud</li>
        </div>
</div>
<div className="md:border-r-2 md:pr-3">
        <div className="my-3">
          <strong>3. Sharing Your Information</strong>
          <p>We do not sell your personal data. We only share information in these cases:</p>
            <li>With your consent (e.g., displaying contact info on your listings)</li>
            <li>With service providers who help us operate the platform</li>
            <li>To comply with legal obligations or protect rights, safety, and property</li>
        </div>

        <div className="my-3">
          <strong>4. Cookies and Tracking</strong>
          <p>We use cookies to:</p>
            <li>Keep you logged in</li>
            <li>Understand how you use our site</li>
            <li>Improve functionality and performance</li>
            <li>You can control cookies through your browser settings.</li>
        </div>
</div>
<div>
        <div className="my-3">
          <strong>5. Data Security</strong>
          <p>We take reasonable steps to protect your information from unauthorized access, 
            misuse, or disclosure. However, no system is 100% secure, so we encourage you to use 
            strong passwords and monitor your account regularly.</p>
        </div>

        <div className="my-3">
          <strong>6. Your Choices</strong>
          <p>You can update your account info at any time.</p>
          <p>You can request deletion of your account by contacting us.</p>
        </div>

        <div className="my-3">
          <strong>7. Children’s Privacy</strong>
          <p>Our platform is not intended for children under 13. We do not knowingly collect personal information from minors without parental consent.</p>
        </div>

        <div className="my-3">
          <strong>8. Changes to This Policy</strong>
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our site or emailing you.</p>
        </div>
</div>
</div>
        </div>
        <Footer/>
    </div>
  )
}

export default Privacy