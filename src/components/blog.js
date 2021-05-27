import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = ({match}) => {
  console.log (match)
//   useEffect(()=> {
//     fetchBlog();
//   }, [])

  const [blogs, setBlog] = useState([])
  const fetchBlogs = async () => {
    const data = await fetch(`http://localhost:4000/api/${match.path}`)
  };
 
  return( 
	<main className="">
    <ul>
      {blogs.map((blog) => {
        return <li key={blog._id}>
            <h4>{blog.title} <span>{blog.date}</span></h4> 
            <h5>{blog.author}</h5>
            <p>{blog.body}</p>
        </li>
      })}
    </ul>

  </main>
  )
}

export default Blog