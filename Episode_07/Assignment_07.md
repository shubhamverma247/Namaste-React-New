## Namaste React Course by Akshay Saini
# Chapter 07 - Finding the Path

## Q: Where is the place to define hooks?
A: Hooks are always called on top of the body of the functional component. Othewise you will get th error.
Because React hooks are used to create the local state variable of the component it should be called inside the body of the functional component on top. For eg:
``````
const Header = () => {
  //let btnName = "Login";
  const [btnNameReact,setbtnNameReact] = useState("Login")
}
``````
Also, never used the React hooks inside the if statement or looping statement, inside the function its not recommended by React. It makes your code inconsistent of your state variables.

## Q: What is react-router-dom?
A: It is a library used to create routes in the react project. This library provides useful hooks to create the routes in the react project.
``````
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
createBrowserRouter contains the array of routes and return the array of routes that is passed to the RouterProvider and outlet is required for displaying the children with header and footer data.

Here is an example

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      }
    ],
    errorElement:<Error/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

``````

## Q: Why we are not using the anchor link for navigation in react?
A: Becoz it reload the page, so always for navigation in react we use Link component provided by the React router dom library. It will not reload the page, but the component get refresh this superpower is provided by the React router dom through Link component.

## Q: What are various ways to `add images` into our App? Explain with `code examples`.
A: Using the `full URL of the image` for the web (CDN) or any public images.
Example : 
```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```
Adding the image into the project 
`Drag your image into your project` and `import it` into the desired component
```
import reactLogo from "./reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```
The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders. 
```
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```


## Q: What would happen if we do `console.log(useState())`?
A: If we do `console.log(useState())`, we get an array `[undefined, function]`  where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.


## Q: How will `useEffect` behave if we `don't add` a `dependency array`?
A: Syntax of `useEffect` is:
```
useEffect(() => {}, []);
```
Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.
```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```
Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.
```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```
Case 3 :  When the `dependency array contains a condition`,  the callback function will be executed  `one time` during the initial render of the component and also rerender if there is a `change in the condition`.
```
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```


## Q: What is `SPA`?
A: `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.


## Q: What is the difference between `Client Side Routing` and `Server Side Routing`?
A: In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server and network fetch the webpage, and replace the current webpage with the new one. 
For eg: 
You have index.html, about.html, contact.html if we click on anchor tag of about.html it reloads the whole page and it send to the network call of about.html and fetches the html data and rendered it to the browser.

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to server. All `Single Page Applications uses client-side routing`. 