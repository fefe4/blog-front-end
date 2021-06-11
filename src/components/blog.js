import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = ({ match }) => {
  //edit values
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [description, setDescription] = useState("");

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  const updateBody = (e) => {
    setBody(e.target.value);
  };
  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  const [blog, setBlog] = useState({});
  const [hasEditBeenPressed, setHasEditBeenPressed] = useState(false);

  const activateEditMode = () => {
    hasEditBeenPressed? setHasEditBeenPressed(false) : setHasEditBeenPressed(true)
  }


  const fetchBlog = async () => {
    const data = await fetch(
      `http://localhost:4000/api/blogs/${match.params.id}`
    );
    const blogApi = await data.json();
    const blog = blogApi.blog_;
    setBlog(blog);
    setDescription(blog.description);
    setTitle(blog.title);
    setBody(blog.body);
  };

  const actionForm = `http://localhost:4000/api/blogs/${match.params.id}`;

  //put requests don't work for windows.
  const editBlog = (e) => {
    e.preventDefault();
    // PUT request using fetch with async/await
    async function updatePost() {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          body: body,
          description: description,
        }),
      };
      const response = await fetch(`${actionForm}`, requestOptions);
      const data = await response.json();
      console.log(data);
    }
    updatePost();
  };

  return (
    <main className="">
      <button onClick={activateEditMode}>Edit</button>
      {hasEditBeenPressed ? (
        <form onSubmit={editBlog}>
          <label for="title">Title</label>
          <input
            onChange={updateTitle}
            name="title"
            type="text"
            value={title}
          />
          <label for="description">Description</label>
          <input
            onChange={updateDescription}
            name="description"
            value={description}
            type="text"
          />
          <label for="body">Body</label>
          <input onChange={updateBody} name="body" type="text" value={body} />
          <button>Submit</button>
        </form>
      ) : (
        <div>
          <h4>
            {" "}
            {blog.title} <span>{blog.date}</span>
          </h4>
          <h5>{blog.author}</h5>
          <p>{blog.body}</p>
        </div>
      )}
    </main>
  );
};

export default Blog;
