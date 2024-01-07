const express = require('express');
const router = express.Router();

const validateToken = require('../middleware/validateTokenHandler.js');
const { getArticle, createArticle, updateArticle, deleteArticle, getUserArticles, getArticles, Search, getClapCount, updateClaps } = require('../controllers/articleControllers.js');
const { createComment, getAllComments, updateComment, deleteComment, updateLikes, updateDisLikes } = require('../controllers/commentControllers.js');
router.route('/').get(getArticles);
router.route('/article/articleId/:articleId').get(getArticle);


router.get('/search', Search);
router.route('/article/comment/articleId/:articleId').get(getAllComments);
router.use(validateToken);
router.route('/').get(getUserArticles).post(createArticle);
router.route('/article/articleId/:articleId').put(updateArticle).delete(deleteArticle);

router.route('/article/clap/articleId/:articleId').get(getClapCount).put(updateClaps);

//comments field

router.route('/article/comment/articleId/:articleId').post(createComment);
router.route('/article/comment/commentId/:commentId').put(updateComment).delete(deleteComment);
router.route('/article/comment/like/commentId/:commentId').put(updateLikes);
router.route('/article/comment/dislike/commentId/:commentId').put(updateDisLikes);








module.exports = router;