import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';
import Contact from './Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from './Profile/Index';
import SignInPage from './userbutton'; // Ensure this points to the correct component
import Addlisting from './addlisting/index';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css'; 

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },

  {
    path: '/sign-in',
    element: <SignInPage />,
  },

  {
    path:'/Profile',
    element:<Profile/>
  },

  {
    path:'/addlisting',
    element:<Addlisting/>
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
    </ClerkProvider>
  </StrictMode>,
);
