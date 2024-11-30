import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mediaType, setMediaType] = useState('image');
  const [media, setMedia] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/blog')
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error('Error fetching blog posts:', error));
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleEdit = (postId) => {

    const postToEdit = blogPosts.find((post) => post._id === postId);
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
      setMediaType(postToEdit.image ? 'image' : 'video');
      setMedia(postToEdit.image || postToEdit.video);
      setEditingPostId(postId);

    }
  };

  const handleDelete = (postId) => {
    fetch(`http://localhost:8000/api/blog/${postId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBlogPosts(blogPosts.filter((post) => post._id !== postId));
      })
      .catch((error) => console.error('Error deleting blog post:', error));
  };

  const handleSubmit = () => {
    const newPost = { title, content };

    if (editingPostId) {
      fetch(`http://localhost:8000/api/blog/${editingPostId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newPost,
          image: mediaType === 'image' ? media : '',
          video: mediaType === 'video' ? media : '',
        }),
      })
        .then((response) => response.json())
        .then((updatedPost) => {
          setBlogPosts(
            blogPosts.map((post) =>
              post._id === updatedPost._id ? updatedPost : post
            )
          );
          setTitle('');
          setContent('');
          setMedia('');
          setEditingPostId(null);
        })
        .catch((error) => console.error('Error updating blog post:', error));
    } else {
      fetch('http://localhost:8000/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newPost,
          image: mediaType === 'image' ? media : '',
          video: mediaType === 'video' ? media : '',
        }),
      })
        .then((response) => response.json())
        .then((newPost) => {
          setBlogPosts([...blogPosts, newPost]);
          setTitle('');
          setContent('');
          setMedia('');
        })
        .catch((error) => console.error('Error creating blog post:', error));
    }
  };

  return (
    <div className="container">
      <div className="add-edit-section">
        <h2>Add/Edit Blog Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="media-type-radio">
          <label>
            <input
              type="radio"
              name="mediaType"
              value="image"
              checked={mediaType === 'image'}
              onChange={() => setMediaType('image')}
            />{' '}
            Image
          </label>
          <label>
            <input
              type="radio"
              name="mediaType"
              value="video"
              checked={mediaType === 'video'}
              onChange={() => setMediaType('video')}
            />{' '}
            Video
          </label>
        </div>
        <input
          type="text"
          className="media-input"
          placeholder={`Enter ${mediaType} URL`}
          value={media}
          onChange={(e) => setMedia(e.target.value)}
        />
        <button className="add-edit-button" onClick={handleSubmit}>
          {editingPostId ? 'Update' : 'Add'}
        </button>
      </div>
      <div className="blog-section">
        <h2>Blogs</h2>
        <div className='card_container'>
          {blogPosts.map((post) => (
            <div key={post._id} className="blog-post">
              {post.image && <img src={post.image} alt="Blog Post" />}
              {post.video && (
                <iframe
                  width="560"
                  height="315"
                  src={post.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
              <h3>{post.title}</h3>
              <p>{post.content}</p>

              <button onClick={() => {
                scrollToTop()
                handleEdit(post._id)
              }}>Edit</button>
              <button onClick={() => handleDelete(post._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
