
// import React, { useEffect, useState } from "react";

// const EditBlog = ({ match }) => {
//   console.log(match);
//   console.log(match.params.id)

//   useEffect(() => {
//     fetchBlog();
//   }, []);
//   const [blog, setBlog] = useState({});
//   const fetchBlog = async () => {
//     const data = await fetch(`http://localhost:4000/api/blogs/${match.params.id}`);
//     console.log(data);
//     const blogApi = await data.json();
//     const blog = blogApi.blog_;
//     console.log(blog);
//     setBlog(blog);
//   };

//   return (
//     <main>
//         <form action="http://localhost:4000/api/blogs" method="POST">
//             <label for="title">Title</label>
//             <input name="title" type="text" value={blog.title}/>
//             <label for="description">Description</label>
//             <input name="description" value={blog.description} type="text" />
//             <label for="body">Body</label>
//             <input name="body" type="text" value={blog.body}/>
//             <button>Submit</button>
//         </form>
//     </main>
//   );
// };

// export default EditBlog;
