import express from "express";
import deleteTest from "../controllers/deleteTest";
import getTest from "../controllers/getTest";
import getTests from "../controllers/getTests";
import newTest from "../controllers/newTest";
import updateTest from "../controllers/updateTest";
import userAuthoraize from "../controllers/userAuthorization";
const router = express.Router();

router.post('/:userName', userAuthoraize, newTest);
router.put('/:id/:userName', userAuthoraize, updateTest);
router.get('/', getTests);
router.get('/:id', getTest);
router.delete('/:id/:userName', userAuthoraize, deleteTest)

export default router;