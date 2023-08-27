import React from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./Header";

// const parent = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"I'm an h1 tag"),
//         React.createElement("h2",{},"I'm an h2 tag")
//     ]),
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"I'm an h1 tag"),
//         React.createElement("h2",{},"I'm an h2 tag")
//     ]),
// ]);

// NESTED HEADER WITH createElement

const header = React.createElement("div",{className:"title"},[
    React.createElement("h1",{className:"h1"},"h1 from create element"),
    React.createElement("h3",{className:"h2"},"h2 from create element"),
    React.createElement("h3",{className:"h3"},"h3 from create element"),
])

// NESTED HEADER WITH JSX

const jsxheader = (<div className="title">
    <h1>h1 from JSX</h1>
    <h2>h2 from jSX</h2>
    <h3>h3 from jsx</h3>
</div>)

// NESTED HEADER WITH Functional Component

const HeaderComponent = () => (
<div className="title">
    <h1>h1 from JSX</h1>
    <h2>h2 from jSX</h2>
    <h3>h3 from jsx</h3>
</div>
)

// Composition of Components
const CompositionComponet = () => (
    <div className="container">
        <HeaderComponent/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header/>);