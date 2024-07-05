import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddItem from "./AddItem/AddItem";
import Error from "../pages/Error/ErrorPages";
import UpdateCraft from "../pages/UpdateCraft/UpdateCraft";
import MyCraftList from "./MyCraftList/MyCraftList";
import Crafts from "../routes/Crafts/Crafts";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AllCrafts from "../pages/AllCrafts/AllCrafts";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://crufted-cloth-server.vercel.app/craft')

            },
            {
                path: '/addItem',
                element: <PrivateRoute><AddItem></AddItem></PrivateRoute>
            },
            {
                path: '/updateCraft/:id',
                element: <UpdateCraft></UpdateCraft>,
                loader: ({ params }) => fetch(`https://crufted-cloth-server.vercel.app/craft/${params.id}`)
            },
            {
                path:'Crafts/:id',
                element:<PrivateRoute><Crafts></Crafts></PrivateRoute>,
                loader: ({ params }) => fetch(`https://crufted-cloth-server.vercel.app/craft/${params.id}`)
                
            },
            {
                path: '/craftList',
                element:<PrivateRoute><MyCraftList></MyCraftList></PrivateRoute>,
                loader: () => fetch('https://crufted-cloth-server.vercel.app/craft')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allCrafts',
                element:<PrivateRoute><AllCrafts></AllCrafts></PrivateRoute>
            }
        ]
    }
])

export default routes;