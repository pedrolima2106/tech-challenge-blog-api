const Post = require('../models/Post');

const createPost = async (data) => {
  return await Post.create(data);
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



async function getAllPosts(page = 1, limit = 10) {
  const offset = (page - 1) * limit;

  const { count, rows } = await Post.findAndCountAll({
    order: [['createdAt', 'DESC']],
    limit,
    offset
  });

  return {
    total: count,
    page,
    limit,
    posts: rows
  };
}

async function getPostsByTitle(title, page = 1, limit = 10) {
  const offset = (page - 1) * limit;

  const { count, rows } = await Post.findAndCountAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`
      }
    },
    order: [['createdAt', 'DESC']],
    limit,
    offset
  });

  return {
    total: count,
    page,
    limit,
    posts: rows
  };
}

module.exports = {
  createPost,
  getAllPosts,
  getPostsByTitle,
  getPostById,
  updatePost,
  deletePost
};
