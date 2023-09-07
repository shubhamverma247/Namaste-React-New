import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import About from "./components/About";

import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  //setting usercontext value

  const [userName, setuserName] = useState("");
  useEffect(() => {
    //api call and got data
    const data = {
      name: "Shubham Verma",
    };
    setuserName(data.name);
  }, []);
  return (
    //top level usercontext
    <UserContext.Provider
      value={{
        loggedInUser: userName,
        setuserName,
      }}>
      <div className="App">
        {/* //We can use nested context also here header get valur from its context provider
        <UserContext.Provider value={{loggedInUser:"Elon Musk"}}><Header /></UserContext.Provider> */}
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const Contact = lazy(() =>
  import("./components/Contact")
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense
            fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <RouterProvider router={appRouter} />
);
