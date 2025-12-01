


import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/home";
import ProductDetails from './page/products';
import Cart from './page/cart';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /></>,
    }, 
     {
      path: "/details/:id",
      element: <><ProductDetails></ProductDetails></>,
    }, 
       {
      path: "/cart",
      element: <><Cart></Cart></>,
    }, 
 
    
    
    
   
    
  ]);
  return(
    <>
          <RouterProvider router={router} />
          
    </>
  ) 
     
  
}

export default App
