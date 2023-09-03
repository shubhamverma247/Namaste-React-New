import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";

import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"

const AppLayout = () => {
    return(
        <div className="App">
        <Header/>
        <Outlet/>
        </div>
    )
}

const Contact  = lazy(() => import("./components/Contact"))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
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
                element: <Suspense fallback={<h1>Loading...</h1>}><Contact/></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }

        ],
        errorElement: <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />);

