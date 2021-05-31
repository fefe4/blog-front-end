import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = ({ match }) => {
  
  console.log(match);
  console.log(match.params.id)

  useEffect(() => {
    fetchBlog();
  }, []);
  const [blog, setBlog] = useState({});
  const [hasEditBeenPressed, setHasEditBeenPressed] = useState (true)
  const fetchBlog = async () => {
    const data = await fetch(`http://localhost:4000/api/blogs/${match.params.id}`);
    console.log(data);
    const blogApi = await data.json();
    const blog = blogApi.blog_;
    console.log(blog);
    setBlog(blog);
  };
  const actionForm = `http://localhost:4000/api/blogs/${match.params.id}`
  return (
    <main className="">
      {hasEditBeenPressed 
      ? <form action={actionForm} method="PUT">
          <label for="title">Title</label>
          <input name="title" type="text" placeholder={blog.title}/>
          <label for="description">Description</label>
          <input name="description" placeholder={blog.description} type="text" />
          <label for="body">Body</label>
          <input name="body" type="text" placeholder={blog.body}/>
          <button>Submit</button>
        </form>
      : <div>
          <h4> {blog.title} <span>{blog.date}</span></h4>
          <h5>{blog.author}</h5>
          <p>{blog.body}</p>
        </div>  
      }
    </main>
  );
};

export default Blog;
