
import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function Header() {
  const {user ,isSignedIn} = useUser();

  console.log("User:", user);
  console.log("Is Signed In:", isSignedIn);

  return (
    <div className="shadow-sm p-5 items-center flex justify-between">
           {/* <img src='./assets/logo.svg' width={150} height={10} /> */}
           <h1>LOGO</h1>

           <ul className='hidden md:flex gap-16'>
         <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
         <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
         <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
         <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>PreOwned</li>
     </ul>
     
 {isSignedIn?
       <div className='flex items-center gap-16'>

        <UserButton/>

        <Link to= {'/Profile'}>
        <Button>Submit Listing</Button>
        </Link>
       
        </div>
        :
        <Button>Submit Listing</Button>
     
} 
    </div>
  )
}

export default Header
