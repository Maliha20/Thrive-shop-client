
import App from "@/App";
import LoginLayout from "@/components/layout/LoginLayout";
import MainLayout from "@/components/layout/Mainlayout";
import About from "@/pages/About/About";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/checkout/Checkout";
import ProductDetails from "@/pages/productDetails/ProductDetails";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import Products from "@/pages/products/Products";
import Signup from "@/pages/signup/Signup";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
 {
  path: "/",
  element: <MainLayout />,
  children: [
    
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/products',
        element:  <Products></Products>
      },
      {
        path: '/products/:id',
        element:<ProductDetails></ProductDetails>
      },
      {
        path: '/product-management',
        element:<ProductManagement></ProductManagement>
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout> ,
      },
    
  ]
 },
 {
  path: "/signup",
  element: <LoginLayout></LoginLayout>,
  children:[
    {
      path: "/signup",
      element: <Signup></Signup>
    }
  ]
 }
]);

export default router;
