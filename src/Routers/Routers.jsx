
import {
    createBrowserRouter,
  } from "react-router-dom";
  
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/Home/Shared/SignIn/SignIn";
import SignUp from "../pages/Home/Shared/SignUp/SignUp";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/signin",
            element: <SignIn></SignIn>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
      ]
    },
  ]);