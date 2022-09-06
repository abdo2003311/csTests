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
const article_1 = __importDefault(require("../models/article"));
const comment_1 = __importDefault(require("../models/comment"));
const user_1 = __importDefault(require("../models/user"));
let deleteArticleAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        let article = yield article_1.default.findById(id).populate('comments');
        let userId = article.publisher;
        let user = yield user_1.default.findById(userId);
        user.publishedArticles.splice(user.publishedArticles.indexOf(id), 1);
        yield user.save();
        // deleting comments
        for (let i = 0; i < article.comments.length; i++) {
            let user = yield user_1.default.findById(article.comments[i].user);
            user.comments.splice(user.comments.indexOf(article.comments[i]), 1);
            yield user.save();
            yield comment_1.default.findByIdAndDelete(article.comments[i]._id);
        }
        yield article_1.default.findByIdAndDelete(id);
        res.status(200).send('ok!');
    }
    catch (e) {
        res.status(200).send(e);
    }
});
exports.default = deleteArticleAdmin;
