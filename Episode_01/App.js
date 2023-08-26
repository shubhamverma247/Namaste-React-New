
/*
CREATING NESTED TAGS:

<div id="parent">
    <div id="child">
        <h1>I am h1 tag!</h1>
    </div>
</div>

*/

/*
const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement(
            "h1",
            {},
            "I am h1 tag!"
        )
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

/*

<div id="parent">
    <div id="child">
        <h1>I am h1 tag!</h1>
        <h2>I am h2 tag!</h2>
    </div>
</div>

*/
/*
const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1", {}, "I am h1 tag!"), React.createElement("h2", {}, "I am h2 tag!")]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

/*
creating siblings herer by passing array 

<div id="parent">
    <div id="child1">
        <h1>I am h1 tag!</h1>
        <h2>I am h2 tag!</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag!</h1>
        <h2>I am h2 tag!</h2>
    </div>
</div>

*/


const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {id: "child1"},
        [React.createElement("h1", {}, "I am h1 tag!"), React.createElement("h2", {}, "I am h2 tag!")]
    ),
    React.createElement(
        "div",
        {id: "child2"},
        [React.createElement("h1", {}, "I am h1 tag!"), React.createElement("h2", {}, "I am h2 tag!")]
    )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);