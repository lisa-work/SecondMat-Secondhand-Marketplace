import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Input } from './ui/input';
import { IoSearchOutline } from "react-icons/io5"

function Header() {
  const {user, isSignedIn} = useUser();
  const location = useLocation();
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();

      useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const initialKeyword = params.get('keyword') || '';
        setKeyword(initialKeyword);
      }, []);

        useEffect(() => 
      {
        searchKey()
      }, [])
      
      const searchKey = (keyword) => {
          setKeyword(keyword);
            console.log(keyword);
          }

      const handleSearch = () => {
        if (keyword.trim() !== '') {
          navigate(`/key?keyword=${encodeURIComponent(keyword.trim())}`);
        }
      };

      const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      };

  return (
  <div className="sticky top-0 z-1000">
    
    <div className="shadow-lg rounded-b-sm md:rounded-b-lg bg-white">

      <div className = 'flex justify-between gap-10 items-center shadow-sm px-4'>

        <Link to={'/home'}>
          <img src='/logo.svg' alt='logo' className='w-20 h-20'/>
        </Link>
      
            <div className="hidden xl:flex items-center justify-start w-[45%]">
                <Input className='h-12 w-[70%] lg:rounded-4xl items-center
                    focus-within:ring-1 focus-within:ring-green-900 focus-within:w-full
                    transition-all duration-650 ease-in-out' 
                    type="input" placeholder="Search by keyword"
                    value={keyword}
                    onChange={(e)=>searchKey(e.target.value)}
                    onKeyDown={handleKeyDown}
                    />
            <Link to={"/key?keyword="+keyword}>
                    <IoSearchOutline className='text-4xl rounded-full bg-emerald-800 p-2 text-white hover:scale-105 
                    hover:font-bold transition-all justify-self-end cursor-pointer ml-3'/>
            </Link>     
            </div>

        <ul className='hidden md:flex md:gap-7 lg:gap-10 '>

          {location.pathname !== '/home' && (
            <Link to={'/home'}>
                <li className='font-bold text-md lg:text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
                transition-all cursor-pointer'>Home</li>
            </Link>
          )}

          {location.pathname !== '/search' && (
            <Link to={'/search-by-criteria'}>
              <li className='font-bold text-md lg:text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>Search</li>
            </Link>
          )}

          {location.pathname !== '/my-listing' && (
            <Link to={'/my-listing'}>
              <li className='font-bold text-md lg:text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>Listing</li>
            </Link>
          )}

          {location.pathname !== '/about-us' && (
            <Link to={'/about-us'}>
              <li className='font-bold text-md lg:text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>About</li>
            </Link>          
          )}

          {location.pathname !== '/guide' && (
            <Link to={'/guide'}>
              <li className='font-bold text-md lg:text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>Guides</li>
            </Link>          
          )}          
          
          {location.pathname !== '/legal-policy' && (
            <Link to={'/legal-policy'}>
              <li className='font-bold text-md lg:text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
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

        <ul className='flex items-center justify-around bg-white border 
        border-t-1 py-1 text-sm md:hidden gap-2'>

          {location.pathname !== '/home' && (
            <Link to={'/home'}>
                <li className='font-bold text-md lg:text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
                transition-all cursor-pointer'>Home</li>
            </Link>
          )}

          {location.pathname !== '/search' && (
            <Link to={'/search-by-criteria'}>
              <li className='font-bold text-md lg:text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>Search</li>
            </Link>
          )}

          {location.pathname !== '/my-listing' && (
            <Link to={'/my-listing'}>
              <li className='font-bold text-md lg:text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>Listing</li>
            </Link>
          )}

          {location.pathname !== '/about-us' && (
            <Link to={'/about-us'}>
              <li className='font-bold text-md lg:text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>About</li>
            </Link>          
          )}

          {location.pathname !== '/guide' && (
            <Link to={'/guide'}>
              <li className='font-bold text-md lg:text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>Guides</li>
            </Link>          
          )}          
          
          {location.pathname !== '/legal-policy' && (
            <Link to={'/legal-policy'}>
              <li className='font-bold text-md lg:text-lg underline underline-offset-2 text-green-900 hover:scale-110 hover:underline-offset-3 
              transition-all cursor-pointer'>Policy</li>
            </Link>          
          )}
        </ul>
  </div>
  )
}

export default Header