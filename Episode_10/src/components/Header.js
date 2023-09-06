import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setbtnNameReact] =
    useState("Login");
  const onlineStatus = useOnlineStatus();

  //access method will be diffrent for class bassed component please check UserClass component
  const { loggedInUser } =
    useContext(UserContext);
  return (
    <div className="flex justify-between bg-gray-100">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-5">
            Online Status:{" "}
            {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-5">Cart</li>
          <li className="px-5">{loggedInUser}</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
