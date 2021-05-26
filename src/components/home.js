import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  
  useEffect(()=> {
    fetchBlogs();
  }, [])

  const [blogs, setBlogs] = useState([])
  const fetchBlogs = async () => {
    const data = await fetch ('http://localhost:4000/api/blogs', {mode: 'cors'})
    const blogsApi = await data.json()
    const blogs = blogsApi.blog_list
    console.log(blogs)
    setBlogs(blogs);
  };
 
  return( 
	<main className="">
    <ul>
      {blogs.map((blog) => {
        return <li key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>
            <h4>{blog.title} <span>{blog.date}</span></h4> 
            <h5>{blog.author}</h5>
            <p>{blog.body}</p>
          </Link>
        </li>
      })}
    </ul>

  </main>
  )
}

export default Home