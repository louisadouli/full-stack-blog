import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import * as React from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from '@clerk/clerk-react'
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import HomePage from './routes/HomePage.jsx';
import PostListPage from './routes/PostListPage.jsx';
// import LogoutPage from './routes/LogoutPage.jsx';
import Register from './routes/Register.jsx';
import SinglePostPage from './routes/ SinglePostPage.jsx';
import Write from './routes/Write.jsx';
import Login from './routes/Login.jsx';
import MainLayout from './layouts/MainLayout.jsx';
const router = createBrowserRouter([
  {
    element:<MainLayout/>,
  children:[
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/posts",
      element: <PostListPage/>
    },
    {
      path: "/:slug",
      element: <SinglePostPage/>
    },
    {
      path: "/write",
      element: <Write/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ]
}
  
]);

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <>
  
  <StrictMode>    
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
       <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
  </>
)
