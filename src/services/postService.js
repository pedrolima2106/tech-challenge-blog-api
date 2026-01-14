const Post = require('../models/Post');

const createPost = async (data) => {
  return await Post.create(data);
};

const getAllPosts = async () => {
  return await Post.findAll({
    order: [['createdAt', 'DESC']]
  });
};

const getPostById = async (id) => {
  return await Post.findByPk(id);
};

const updatePost = async (id, data) => {
  const post = await Post.findByPk(id);
  if (!post) return null;

  return await post.update(data);
};

const deletePost = async (id) => {
  const post = await Post.findByPk(id);
  if (!post) return null;

  await post.destroy();
  return true;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
};

const { Op } = require('sequelize');

async function getPostsByTitle(title) {
  return await Post.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`
      }
    },
    order: [['createdAt', 'DESC']]
  });
}

module.exports = {
  createPost,
  getAllPosts,
  getPostsByTitle
};

