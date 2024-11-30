import React, { useState } from "react";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    try {
      await fetch("http://localhost:8000/api/blog", {
        method: "POST",
        body: JSON.stringify(title, content),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
    console.log("hi");
  };

  return (
    <div>
      <h2>Create a New Blog Post</h2>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BlogForm;
