const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

// creates route to user
router.use('/users', userRoutes);
//creates route to posts
router.use('/posts', postRoutes);

module.exports = router;
