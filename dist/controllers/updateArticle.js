"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const article_1 = __importDefault(require("../models/article"));
const image_1 = __importDefault(require("../models/image"));
let updateArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        let { title, desc, catagory, imageName } = req.body;
        // creating the image
        let image = yield image_1.default.create({
            src: `http://localhost:${__1.PORT}/${imageName}`
        });
        // getting the artilce 
        let article = yield article_1.default.findById(id);
        article.title = title;
        article.desc = desc;
        article.catagory = catagory;
        article.image = image;
        yield article.save();
        res.status(200).send('ok !');
    }
    catch (e) {
        res.status(500).send('not updated !');
    }
});
exports.default = updateArticle;
