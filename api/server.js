// implement your server here
// require your posts router and connect it here

const express = require('express');

const postsRouter = require('../api/posts/posts-router');

const server = express();

server.use(express.json());

server.use(postsRouter);

module.exports = server;








