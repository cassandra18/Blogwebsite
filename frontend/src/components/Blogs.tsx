import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

interface Post {
  title: string;
  content: string;
  _id: number;
  authorName: string;
  createdAt: Date;
  imageUrl: string;
  comments: string;
  ratings: number;
}

const Blogs: React.FC = () => {
  const [posts, setPosts] = useState<Post[] | null>([]); // posts is an array of objects

  //useEffect is used to connect a component to an external system. For this case, it connects us to a browser API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/post/get-posts"
        );

        const data = await response.json();
        console.log(data);
        setPosts(data); // the state of the blog post changes froman empty array to the fetched data
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {/* Blog Card section*/}
      <div>
        {posts ? (
          posts.map((post) => (
            <div className="grid p-4 md:grid-cols-3 sm:grod-cols-2 grid-cols-1 gap-8">
              <Link to="/post/:postId" key={post._id}>
                <div>
                  <img src={post.imageUrl} alt="image" className="" />
                </div>

                <div className="mt-4 mb-2 font-bold hover:text-orange-900 cursor-pointer">
                  <h3>{post.title}</h3>
                </div>

                <div className="mb-4">{post.content}</div>

                <div className="mb-2 text-sm font-sans text-gray-400">
                  <FaUser className="inline-flex text-black items-center mr-2" />{" "}
                  {post.authorName}
                </div>

                <div className="py-2 text-sm text-gray-400">
                  Published:
                  {new Date(post.createdAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div>{ post.comments}</div>
                <div>{ post.ratings}</div>
              </Link>
            </div>
          ))
        ) : (
          <h1>No Posts Yet</h1>
        )}
      </div>

      {/*Category sectuon */}
      <div></div>

      {/*Pagination section */}
    </>
  );
};

export default Blogs;
