import React from "react";
import { Link } from "react-router-dom";

//I am declaring a constant variable Header whch is a functional component.
//Header takes no props and impliments arrow function
const Header: React.FC = () => {
  return (
    <header className="bg-black text-white flex items-center h-20">
      <div className="container flex mx-auto w-full">
        <nav className="w-full flex items-center gap-20">
          <h1 className="text-lg  md:text-2xl lg:text-3xl mr-auto ">
            <Link to="/">Blog<span className="text-orange-500">Web</span></Link>
          </h1>
          <ul className="flex w-full ml-20 gap-10">
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
          <Link to="/log-in">
              <button className="bg-orange-500  mr-auto text-black px-4 py-2 rounded-md">
                login
              </button>
            </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
