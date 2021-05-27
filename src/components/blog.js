import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = ({ match }) => {
  console.log(match);
  console.log(match.params.id)

  useEffect(() => {
    fetchBlog();
  }, []);
  const [blog, setBlog] = useState({});
  const fetchBlog = async () => {
    const data = await fetch(`http://localhost:4000/api/blogs/${match.params.id}`);
    console.log(data);
    const blogApi = await data.json();
    const blog = blogApi.blog_;
    console.log(blog);
    setBlog(blog);
  };

  return (
    <main className="">
      <h4>
        {blog.title} <span>{blog.date}</span>
      </h4>
      <h5>{blog.author}</h5>
      <p>{blog.body}</p>
    </main>
  );
};

export default Blog;
