import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Post {
  title: string;
  content: string;
  _id: number;
  authorName: string;
  createdAt: Date;
  imageUrl: string;
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
            <div key={post._id}>
              <div>
                <img src={post.imageUrl} alt={post.title} className="" />
              </div>
              <div>
                <Link to={`/post/${post._id}`}>
                  <h3>{post.title}</h3>
                </Link>
              </div>
              <div className="p-4">{post.content}</div>
              <div>{post.authorName}</div>
              <div className="bg-gray-100 px-4 py-2 text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
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
