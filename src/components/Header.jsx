
import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';


function Header() {
  const {user ,isSignedIn} = useUser();

  console.log("User:", user);
  console.log("Is Signed In:", isSignedIn);

  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
           {/* <img src='./assets/logo.svg' width={150} height={10} /> */}
           <h1>LOGO</h1>

           <ul>
         <li>Home</li>
         <li>New</li>
         <li>Search</li>
         <li>PreOwned</li>
     </ul>
     
 {isSignedIn?
       <div>

        <UserButton/>
        <Button>Submit Listing</Button>
        </div>
        :
        <Button>Submit Listing</Button>
     
} 
    </div>
  )
}

export default Header
