const postService = require('../services/postService');

const createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

async function getAll(req, res) {
  try {
    const { title } = req.query;

    if (title) {
      const posts = await postService.getPostsByTitle(title);
      return res.status(200).json(posts);
    }

    const posts = await postService.getAllPosts();
    res.status(200).json(posts);

  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar posts' });
  }
};

const getPostById = async (req, res) => {
  const post = await postService.getPostById(req.params.id);
  if (!post) {
    return res.status(404).json({ message: 'Post não encontrado' });
  }
  res.json(post);
};

const updatePost = async (req, res) => {
  const post = await postService.updatePost(req.params.id, req.body);
  if (!post) {
    return res.status(404).json({ message: 'Post não encontrado' });
  }
  res.json(post);
};

const deletePost = async (req, res) => {
  const deleted = await postService.deletePost(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'Post não encontrado' });
  }
  res.status(204).send();
};

module.exports = {
  createPost,
  getAll,
  getPostById,
  updatePost,
  deletePost
};


