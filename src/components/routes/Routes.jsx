import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../../layout/Main";
import Blog from "../Blog/Blog";
import Login from "../login/Login";
import Register from "../Register/Register";
import ErrorPage from "../ErrorPage";
import ChefView from "../Home/cards/ChefView";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://tuk-tuk-kitchen-server-sourovmodak06.vercel.app/')
            },
            {
                path: '/chef-view',
                element: <PrivateRoute><ChefView></ChefView></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
export default router;