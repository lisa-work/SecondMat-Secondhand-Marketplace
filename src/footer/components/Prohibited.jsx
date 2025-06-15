import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function Prohibited() {
  return (
    <div>
        <title>Prohibited Items Policy</title>
        <link rel="icon" type="image/x-icon" href="/logo.svg"></link>        
        
        <div className="w-full">
        <h2 className="font-bold text-3xl md:text-5xl text-green-900 my-7">Prohibited Items Policy</h2>
        <p>
        At SecondMat, we prioritize safety, legality, and sustainability. To protect our community, 
        certain items are not allowed to be listed, sold, or exchanged on our platform.
        Here’s what you cannot sell:
        </p>

        <div className="md:grid md:grid-cols-3 md:gap-7 justify-center items-start">
        <div className="md:border-r-2 md:pr-3">
                <div className="my-3">
                    <h3><strong>1. Illegal and Stolen Goods</strong></h3>
                        <li>Items obtained illegally or without rightful ownership</li>
                        <li>Stolen property of any kind</li>
                        <li>Products that violate any local, national, or international laws</li>
                </div>

                <div className="my-3">
                    <h3><strong>2. Hazardous and Unsafe Materials</strong></h3>
                        <li>Flammable, explosive, or radioactive materials</li>
                        <li>Toxic chemicals and substances</li>
                        <li>Medical devices or pharmaceuticals requiring prescriptions</li>
                        <li>Weapons (including guns, knives designed for combat, and ammunition)</li>
                </div>

                <div className="my-3">
                    <h3><strong>3. Counterfeit and Copyright-Infringing Items</strong></h3>
                        <li>Fake designer goods, knockoffs, and replicas</li>
                        <li>Pirated media (movies, software, music, games)</li>
                        <li>Unauthorized copies of books, artworks, or other protected content</li>
                </div>


                <div className="my-3">
                    <h3><strong>4. Regulated Goods</strong></h3>
                        <li>Alcohol, tobacco, vaping products</li>
                        <li>Drugs, narcotics, or drug paraphernalia</li>
                        <li>Fireworks and explosives</li>
                        <li>Live animals or wildlife products</li>
                </div>
        </div>
        <div className="md:border-r-2 md:pr-3">       

                <div className="my-3">
                    <h3><strong>5. Adult Content</strong></h3>
                        <li>Explicit adult materials (videos, magazines, toys, etc.)</li>
                        <li>Sexually explicit or suggestive content</li>
                        <li>Services of an adult or inappropriate nature</li>
                </div>

                <div className="my-3">
                    <h3><strong>6. Sensitive and Personal Items</strong></h3>
                        <li>Used cosmetics or skincare products (for hygiene reasons)</li>
                        <li>Used undergarments (unless clearly marked new with tags)</li>
                        <li>Personal identification documents (e.g., passports, licenses)</li>
                </div>

                <div className="my-3">
                    <h3><strong>7. Other Restricted Items</strong></h3>
                        <li>Gift cards or prepaid cards</li>
                        <li>Gambling devices or lottery tickets</li>
                        <li>Recalled items or unsafe consumer products</li>
                </div>
        </div>

        <div>
                <div className="my-3">
                    <h3><strong>Why This Matters</strong></h3>
                    <pre>Keeping these items off our marketplace helps:</pre>
                        <li>Protect buyers and sellers</li>
                        <li>Build a trustworthy and responsible community</li>
                        <li>Support a safe and enjoyable experience for everyone</li>
                </div>

                <div className="my-3">
                    <h3><strong>What Happens if You Violate This Policy?</strong></h3>
                        <li>Your listing may be removed without notice.</li>
                        <li>Your account may be suspended or permanently banned.</li>
                        <li>We may report illegal activity to appropriate authorities.</li>
                </div>
            </div>
        </div>
    </div>
                <Footer/>
    </div>
  )
}

export default Prohibited