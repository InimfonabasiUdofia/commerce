


import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/home";
import ProductDetails from './page/products';
import Cart from './page/cart';
import LoginPage from './page/login';
import ThankYouPage from './page/successful';
import PaymentPage from './page/payment';
import { Search } from './page/search';
import NoProductFound from './page/notfound';


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
    {
      path: "/login",
      element: <><LoginPage></LoginPage></>,
    }, 
    {
      path: "/confirm",
      element: <><ThankYouPage></ThankYouPage></>,
    }, 
     {
      path: "/payment",
      element: <><PaymentPage></PaymentPage></>,
    },
       {
      path: "/search/:searchid",
      element: <><Search></Search></>,
    },
    {
      path: "/search/",
      element: <><NoProductFound></NoProductFound></>,
    },
    
    
    
   
    
  ]);
  return(
    <>
          <RouterProvider router={router} />
          
    </>
  ) 
     
  
}

export default App
