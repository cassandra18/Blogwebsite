import React from 'react';
import { Link } from 'react-router-dom';

interface CategoriesProps {
  onSelectCategory : (category: string) => void;
  selectedCategory: string | null;
  activeCategory: string | null;
}
const Categories: React.FC<CategoriesProps> = ({onSelectCategory, activeCategory}) => {


  const categories = ["Test blogs", "Mental Health", "Fashion"]


return (
  <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold'>
    
    <button onClick={ () => onSelectCategory(null) }
    className={`lg:ml-12 ${activeCategory ? "" : "activebtn"}`}>All</button>
    
    {
      categories.map((category) => (
        <button
        onClick={() => onSelectCategory(category)}
        className={`mr-2 space-x-16 ${activeCategory === category ? "activebtn" : "" }`}
        key={category}> {category} </button>
      ))
    }
  </div>

)
};

export default Categories;