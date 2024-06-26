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
                loader: () => fetch('http://localhost:5000/craft')

            },
            {
                path: '/addItem',
                element: <AddItem></AddItem>
            },
            {
                path: '/updateCraft/:id',
                element: <UpdateCraft></UpdateCraft>,
                loader: ({ params }) => fetch(`http://localhost:5000/craft/${params.id}`)
            },
            {
                path:'Crafts/:id',
                element:<Crafts></Crafts>,
                loader: ({ params }) => fetch(`http://localhost:5000/craft/${params.id}`)
                
            },
            {
                path: '/craftList',
                element: <MyCraftList></MyCraftList>,
                loader: () => fetch('http://localhost:5000/craft')
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