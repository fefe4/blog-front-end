import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = ({ match }) => {
  
  useEffect(() => {
    fetchBlog();
  }, []);
  const [blog, setBlog] = useState({});
  const [hasEditBeenPressed, setHasEditBeenPressed] = useState (true)
  const fetchBlog = async () => {
    const data = await fetch(`http://localhost:4000/api/blogs/${match.params.id}`);
    const blogApi = await data.json();
    const blog = blogApi.blog_;
    setBlog(blog);
  };

const actionForm = `http://localhost:4000/api/blogs/${match.params.id}`

 //put requests don't work for windows.
 const editBlog = (e) => {
  e.preventDefault();
  // PUT request using fetch with async/await
  async function updatePost() {
      const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: 'React Hooks PUT Request Example', body:"lalalala", description:"loloolo"})
      };
      const response = await fetch(`${actionForm}`, requestOptions);
      const data = await response.json();
      console.log(data)
  }
  updatePost();
}


  
  return (
    <main className="">
      {hasEditBeenPressed 
      ? <form onSubmit={editBlog}>
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
