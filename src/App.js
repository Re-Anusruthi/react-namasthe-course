import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/Header";
import Body from "../src/Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Applayout = () => (
    <div className="app-layout">
     <Header/>
     <Body/>
    </div>
)

const routePath = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routePath}/>);