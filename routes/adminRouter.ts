import express from "express";
import adminAuthentication from "../controllers/adminAuthentication";
import adminAuthorization from "../controllers/adminAuthorization";
import deleteArticleAdmin from "../controllers/deleteArticleAdmin";
import deleteCommentAdmin from "../controllers/deleteCommentAdmin";
import deleteTestAdmin from "../controllers/deleteTestAdmin";
import deleteUserAdmin from "../controllers/deleteUserAdmin";
import getArticlesAdmin from "../controllers/getArticlesAdmin";
import getCommentsAdmin from "../controllers/getCommentsAdmin";
import getTestsAdmin from "../controllers/getTestsAdmin";
import getUsersAdmin from "../controllers/getUsersAdmin";
import verfiyAdmin from "../controllers/verfiyAdmin";
const router = express.Router();

router.post('/login', adminAuthentication);
router.get('/users', adminAuthorization, getUsersAdmin as any);
router.get('/tests', adminAuthorization, getTestsAdmin as any);
router.get('/comments', adminAuthorization, getCommentsAdmin)
router.get('/verfiyAdmin', verfiyAdmin as any);
router.get('/articles', adminAuthorization, getArticlesAdmin as any);
router.delete('/users/:id', adminAuthorization, deleteUserAdmin);
router.delete('/tests/:id', adminAuthorization, deleteTestAdmin);
router.delete('/articles/:id', adminAuthorization, deleteArticleAdmin);
router.delete('/comments/:id', adminAuthorization, deleteCommentAdmin);



export default router;