"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deleteTest_1 = __importDefault(require("../controllers/deleteTest"));
const getTest_1 = __importDefault(require("../controllers/getTest"));
const getTests_1 = __importDefault(require("../controllers/getTests"));
const newTest_1 = __importDefault(require("../controllers/newTest"));
const updateTest_1 = __importDefault(require("../controllers/updateTest"));
const userAuthorization_1 = __importDefault(require("../controllers/userAuthorization"));
const router = express_1.default.Router();
router.post('/:userName', userAuthorization_1.default, newTest_1.default);
router.put('/:id/:userName', userAuthorization_1.default, updateTest_1.default);
router.get('/', getTests_1.default);
router.get('/:id', getTest_1.default);
router.delete('/:id/:userName', userAuthorization_1.default, deleteTest_1.default);
exports.default = router;
