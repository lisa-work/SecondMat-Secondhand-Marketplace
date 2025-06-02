import React from 'react'
import { Button } from './components/ui/button';
import { Link } from 'react-router-dom';

export default function ComingSoon() {
    return (
        <div>
            <title>Coming Soon</title>
            <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
            
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[100px] leading-30 md:text-[150px] font-bold text-center text-green-900 flex flex-col justify-center items-center mt-30">Coming Soon</h1>
                <p className="text-md md:text-lg text-center text-green-800 mt-10 md:mt-15">The feature is currently under development, we will see you soon</p>
                <Link to="/home">
                    <Button className="mt-10 bg-green-700 hover:bg-green-800">Go Back Home</Button>
                </Link>
            </div>
        </div>
    );
  }