import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

function HeaderNoInput() {
  const {user, isSignedIn} = useUser();
  const location = useLocation();
  const [keyword, setKeyword] = useState();
  
    useEffect(() => 
      {
        searchKey()
      }, [])
      
    const searchKey = (keyword) => {
      setKeyword(keyword);
        console.log(keyword);
      }

  return (
  <div className="sticky top-0 z-1000">
    
    <div className="shadow-lg rounded-b-sm md:rounded-b-lg bg-white">

      <div className = 'flex justify-between gap-10 items-center shadow-sm px-4'>
        <Link to={'/home'}>
          <img src='/logo.svg' alt='logo' className='w-20 h-20'/>
        </Link>
      

        <ul className='hidden md:flex md:gap-7 lg:gap-10 '>
          {/* ml-20 */}

          {location.pathname !== '/home' && (
            <Link to={'/home'}>
                <li className='font-bold text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
                transition-all cursor-pointer'>Home</li>
            </Link>
          )}

          {location.pathname !== '/search' && (
            <Link to={'/search-by-criteria'}>
              <li className='font-bold text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>Search</li>
            </Link>
          )}

          {location.pathname !== '/my-listing' && (
            <Link to={'/my-listing'}>
              <li className='font-bold text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>Listing</li>
            </Link>
          )}

          {location.pathname !== '/about-us' && (
            <Link to={'/about-us'}>
              <li className='font-bold text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>About</li>
            </Link>          
          )}

          {location.pathname !== '/guide' && (
            <Link to={'/guide'}>
              <li className='font-bold text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>Guides</li>
            </Link>          
          )}          
          
          {location.pathname !== '/legal-policy' && (
            <Link to={'/legal-policy'}>
              <li className='font-bold text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>Policy</li>
            </Link>          
          )}
        </ul>

        {isSignedIn?
        <div className='flex items-center gap-5'>
          <UserButton/>
          <Link to={'/add-listing'}>
            <Button className="bg-green-900">New Listing</Button>
          </Link>
        </div>
        :
        <SignInButton mode='modal'>
              <Button className="bg-green-900 cursor-pointer">Sign In/Sign Up</Button>
        </SignInButton>
          }

      </div>
    </div>

  </div>
  )
}

export default HeaderNoInput