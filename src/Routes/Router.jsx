import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layouts/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Pages/Login";
import Resister from "../Pages/Resister";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {
          path: "",
          element:<Navigate to={"/category/01"}></Navigate>
        },
        {
          path: "/category/:id",
          element: <CategoryNews/>,
          loader:({params})=>fetch(` https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
      ]
    },
    {
      path: "/auth",
      element: <AuthLayouts/>,
      children:[
        {
          path: "/auth/login",
          element: <Login/>
        },
        {
          path: "/auth/register",
          element: <Resister/>
        }
      ]
    }
  ]);

  export default router;