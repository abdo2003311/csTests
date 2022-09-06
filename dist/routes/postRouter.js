"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminAuthorization_1 = __importDefault(require("../controllers/adminAuthorization"));
const deleteArticle_1 = __importDefault(require("../controllers/deleteArticle"));
const getArticle_1 = __importDefault(require("../controllers/getArticle"));
const getArticles_1 = __importDefault(require("../controllers/getArticles"));
const newArticle_1 = __importDefault(require("../controllers/newArticle"));
const updateArticle_1 = __importDefault(require("../controllers/updateArticle"));
const router = express_1.default.Router();
router.post('/', adminAuthorization_1.default, newArticle_1.default);
router.get('/', getArticle_1.default);
router.get('/:id', getArticles_1.default);
router.put('/:id', adminAuthorization_1.default, updateArticle_1.default);
router.delete('/:id', adminAuthorization_1.default, deleteArticle_1.default);
exports.default = router;
