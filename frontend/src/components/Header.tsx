import React from "react";
import { Link } from "react-router-dom";

//I am declaring a constant variable Header whch is a functional component.
//Header takes no props and impliments arrow function
const Header: React.FC = () => {
  return (
    <header className="h-24 w-screen bg-black flex items-center text-white">
      <div className="">
        <nav className="flex w-1/2 md:w-full gap-40 items-center">
          <h1 className="font-bold mx-16 ">
            <Link to="/">Blog<span className="text-orange-500">Web</span></Link>
          </h1>
          <ul className="flex items-center gap-14">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Link to="/login" className="bg-orange-500 text-black px-4 py-2 rounded-md">
              <button >
                login
              </button>
            </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
