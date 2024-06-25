import {
    createBrowserRouter,
    
  } from "react-router-dom";
  import Root from "../layout/Root";
import Home from "../pages/Home";
import AddItem from "./AddItem/AddItem";
import Error from "../pages/Error/ErrorPages";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
      {
        path: '/',
        element:<Home></Home>,
        loader:()=>fetch ('http://localhost:5000/craft')
      },
      {
        path:'/addItem',
        element:<AddItem></AddItem>
      }
    ]
    }
    ])

export default routes;