"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadImage_1 = require("../controllers/uploadImage");
const router = express_1.default.Router();
router.post('/', uploadImage_1.upload.single('image'), uploadImage_1.uploadImage);
router.get('/', getImages);
exports.default = router;
