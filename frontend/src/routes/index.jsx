import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";
import CategoryProduct from "../pages/CategoryProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true, //or path: ""
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword/>
            },
            {
                path: 'sign-up',
                element: <SignUp/>
            },
            {
                path: 'product-category/:categoryName',
                element: <CategoryProduct/>
            },
            {
                path: 'admin-panel',
                element: <AdminPanel/>,
                children: [
                    {
                        path: "all-users",
                        element: <AllUsers/>
                    },
                    {
                        path: "all-products",
                        element: <AllProducts/>
                    }
                ]
            }
        ]
    }
])

export default router;