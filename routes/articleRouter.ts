import express from "express";
import adminAuthorization from "../controllers/adminAuthorization";
import deleteArticle from "../controllers/deleteArticle";
import deleteComment from "../controllers/deleteComment";
import getArticle from "../controllers/getArticle";
import getArticles from "../controllers/getArticles";
import newArticle from "../controllers/newArticle";
import newComment from "../controllers/newComment";
import updateArticle from "../controllers/updateArticle";
import updateComment from "../controllers/updateComment";
import userAuthoraize from "../controllers/userAuthorization";
const router = express.Router();

router.post('/:userName', userAuthoraize, newArticle);
router.get('/', getArticles);
router.get('/:id', getArticle);
router.put('/:id/:userName', userAuthoraize, updateArticle);
router.post('/:id/comment/:userName', userAuthoraize, newComment);
router.put('/:id/updateComment/:userName', userAuthoraize, updateComment);
router.delete('/:id/deleteComment/:userName', userAuthoraize, deleteComment);
router.delete('/:id/:userName', userAuthoraize, deleteArticle)

export default router;