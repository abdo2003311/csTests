import express from "express";
import deleteUser from "../controllers/deleteUser";
import getPublicUser from "../controllers/getPublicUser";
import getUser from "../controllers/getUser";
import getUserId from "../controllers/getUserId";
import logIn from "../controllers/logIn";
import newUser from "../controllers/newUser";
import solveTest from "../controllers/solveTest";
import updateUser from "../controllers/updateUser";
import userAuthoraize from "../controllers/userAuthorization";
const router = express.Router();

router.post('/signUp', newUser);
router.put('/:userName', userAuthoraize, updateUser);
router.post('/logIn', logIn);
router.delete('/:userName', userAuthoraize, deleteUser);
router.get('/:userName', userAuthoraize, getUser);
router.get('/public/:userId', getPublicUser);
router.get('/getId/:userName', userAuthoraize, getUserId);
router.post('/:userName/solveTest/:id', userAuthoraize, solveTest);

export default router;