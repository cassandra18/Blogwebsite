import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const HeroSection: React.FC = () => {
  return (
    <>
    <div className="bg-black py-32 mx-auto">
      <div className="text-white text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl leading-snug font-bold mb-5">Welcome To Our Blog</h1>
        <p className="text-gray-100 md:w-3/5 mx-auto  md:mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione eaque consequuntur, consectetur cum velit facere, rerum repellendus,
          odio error possimus magni. Iure deserunt asperiores at tempora sit atque delectus.</p>

          <div className="mt-5">
            <Link to="/about" className="font-medium hover:text-orange-500 inline-flex py-1 ">Learn More <GoArrowRight className="mt-1 ml-1 text-white"/> </Link>
          </div>
      </div>
    </div>
    
    </>
  );
};

export default HeroSection;
