const express = require('express');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(express.json());

app.use(postRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API rodando 🚀' });
});

module.exports = app;
