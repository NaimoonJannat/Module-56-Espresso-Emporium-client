import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider, 
 } from "react-router-dom";
import App from './App';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AuthProvider from './providers/AuthProvider';
 
 const router = createBrowserRouter([ 
  
  { 
  path: "/", 
  element: <App></App>, 
  loader: () => fetch('https://espresso-server-three.vercel.app/coffee')
  }, 
  { 
    path: "/addcoffee", 
    element: <AddCoffee></AddCoffee>, 
    }, 
    { 
      path: "/updatecoffee/:id", 
      element: <UpdateCoffee></UpdateCoffee>, 
      loader: ({params})=>fetch(`https://espresso-server-three.vercel.app/coffee/${params.id}`)
    }, 
    {
      path: "/signup",
      element: <SignUp></SignUp>
    },
    {
      path: "/signin",
      element: <SignIn></SignIn>
    }
 ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} /> 
     </AuthProvider>
  </React.StrictMode>,
)
