import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';
import { Toaster } from "@/components/ui/sonner"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from './Profile/Index';
import SignInPage from './userbutton'; // Ensure this points to the correct component
import Addlisting from './add-listing/index';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css'; 
import SearchByOptions from './search';
import ListingDetail from './listing-details';

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/sign-in',
    element: <SignInPage />,
  },

  {
    path:'/profile',
    element:<Profile/>
  },

  {
    path:'/add-listing',
    element:<Addlisting/>
  },

{
  path:'/search/:category',
  element:<SearchByCategory/>
},

{
  path:'/search',
  element:<SearchByOptions/>
},

{
  path:'/listing-details/:id',
  element:<ListingDetail/>
}


]);

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    <Toaster/>
    </ClerkProvider>
  </StrictMode>,
);
