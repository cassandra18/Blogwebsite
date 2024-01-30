import React, { useState,  useEffect } from "react";
import Blogs from "../components/Blogs";
import Pagination from "../components/pagination";
import Categories from "../components/categories";
interface Post {
  title: string;
  content: string;
  _id: number;
  authorName: string;
  createdAt: Date;
  imageUrl: string;
  comments: string;
  ratings: number;
  category: string; 
}



const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage ] = useState(1);
  const pageSize = 12 //  Blogs per page
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[] | null>([]); // posts is an array of objects
  const [activeCategory, setActiveCategory] = useState<string | null>(null);



  //useEffect is used to connect a component to an external system. For this case, it connects us to a browser API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let url = `http://localhost:3000/api/post/get-posts?page=${currentPage}&limit=${pageSize}`;
        
        if(selectedCategory) {
          url +=`&category=${selectedCategory}`
        }

        const response = await fetch(url);

        const data = await response.json();
        console.log(data);
        setPosts(data); // the state of the blog post changes froman empty array to the fetched data
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [currentPage, pageSize, selectedCategory]);

  //page changing button
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  //category changing btn
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }



  return (
    <div>
      <div className="bg-black py-32 mx-auto">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-snug font-bold mb-5">
            Blog Page
          </h1>
          <p className="text-gray-100 md:w-3/5 mx-auto  md:mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            ratione eaque consequuntur, asperiores at tempora sit atque
            delectus.
          </p>
        </div>
      </div>

      {/* category section */}

      <div>
        <Categories onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
      </div>

      {/* All blogs container */}
      <div className="max-w-7xl mx-auto">
        <Blogs posts={ posts }
        currentPage={ currentPage }
        selectedCategory={selectedCategory}
        pageSize={pageSize}/>
      </div>

      {/*pagination */}
      <div> 
        <Pagination onPageChange={handlePageChange}
        currentPage={currentPage}
        posts={posts}
        pageSize={pageSize} /> 
      </div>
    </div>
  );
};

export default BlogPage;
