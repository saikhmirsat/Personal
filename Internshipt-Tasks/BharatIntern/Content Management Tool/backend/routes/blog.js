const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// Create a new blog post
router.post('/', async (req, res) => {
    const { title, content, image, video } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    const newBlogPost = new BlogPost({ title, content, image, video });

    try {
        await newBlogPost.save();
        res.status(201).json({ message: "Blog post created successfully" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while saving the blog post" });
    }
});

// Fetch all blog posts
router.get('/', async (req, res) => {
    try {
        const data = await BlogPost.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching blog posts" });
    }
});

// Get a single blog post by ID
router.get('/:id', async (req, res) => {
    try {
        const blogPost = await BlogPost.findById(req.params.id);
        if (!blogPost) {
            return res.status(404).json({ error: "Blog post not found" });
        }
        res.status(200).json(blogPost);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the blog post" });
    }
});

// Update a blog post by ID
router.put('/:id', async (req, res) => {
    const { title, content, image, video } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    try {
        const updatedBlogPost = await BlogPost.findByIdAndUpdate(req.params.id, {
            title,
            content,
            image,
            video,
        }, { new: true });

        if (!updatedBlogPost) {
            return res.status(404).json({ error: "Blog post not found" });
        }

        res.status(200).json(updatedBlogPost);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the blog post" });
    }
});

// Delete a blog post by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedBlogPost = await BlogPost.findByIdAndRemove(req.params.id);

        if (!deletedBlogPost) {
            return res.status(404).json({ error: "Blog post not found" });
        }

        res.status(204).send(); // 204 No Content
    } catch (error) {
        res.status(500).json({ error: "An error occurred while deleting the blog post" });
    }
});

module.exports = router;
