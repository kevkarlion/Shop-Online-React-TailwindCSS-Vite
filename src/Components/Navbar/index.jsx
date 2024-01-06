import {  NavLink } from "react-router-dom";
import { MiContext } from "../../Components/Context";
import { useContext } from "react";

export const Navbar = () => {
  const context = useContext(MiContext);

  const activeStyle = "underline underline-offset-4";


  const logOut = () => {
      localStorage.setItem('login', JSON.stringify(false));
      context.specialVar = JSON.parse(localStorage.getItem('login'))
  }

  const logIn = (text) => {
    return <NavLink to="/sign">{text}</NavLink>;
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-xl">
          {/* Uso de NavLink  */}
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li className="font-normal">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li className="font-normal">
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li className="font-normal">
          <NavLink
            to="/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
        <li className="font-normal">
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li className="font-normal">
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li className="font-normal">
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3 ">
        <li className="text-black/60">
          {context.login ? context.sign.mail : ""}
        </li>
        <li className="font-normal">
          {context.login ? (
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          ) : (
            <>{logIn("My Orders")}</>
          )}
        </li>
        <li className="font-normal">
          {context.login ? (
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          ) : (
            <>{logIn("My Account")}</>
          )}
        </li>
        <li className="font-normal">
          <NavLink
            to='/sign'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={logOut}
          >
            {context.login ? "Sign out" : "Sign in"}
          </NavLink>
        </li>
        <li className="flex gap-3 ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div>{context.countCart}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
