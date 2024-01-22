import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const HeroSection: React.FC = () => {
  return (
    <>
    <div className="bg-black flex  w-full h-96 ">
        <div className="flex flex-row justify-center">
      <h1 className="font-Content-Bold text-white text-2xl">
        Welcome to Our Blog
      </h1>
      </div>
      <div className="flex items-center">
        <p className="font-sans text-base text-white">
          Start your blog today and join a community of writers and readers who
          are passionate about sharing their stories and ideas. We offer
          everything you need to get started, from helpful tips and tutorials.
        </p>
      </div>
      <Link to="/blogs" className="text-orange ">
        Learn More <GoArrowRight />
      </Link>
    </div>
    
    </>
  );
};

export default HeroSection;
