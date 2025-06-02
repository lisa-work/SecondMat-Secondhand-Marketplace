import React from 'react'
import { Button } from './components/ui/button';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <title>Not Found Error</title>
            <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
            
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[170px] font-bold text-center text-green-900 flex flex-col justify-center items-center mt-30">404</h1>
                <p className="text-md text-center text-green-800">The Page You Are Looking For Does Not Exist Or Have Been Moved</p>
                <Link to="/home">
                    <Button className="mt-10 bg-green-700 hover:bg-green-800">Go Back Home</Button>
                </Link>
            </div>
        </div>
    );
  }
  