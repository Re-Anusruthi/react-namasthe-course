import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/Header";
import Body from "../src/Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";

const Applayout = () => (
    <div className="app-layout">
     <Header/>
     <Outlet/>
    </div>
)

const routePath = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:resid",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routePath}/>);