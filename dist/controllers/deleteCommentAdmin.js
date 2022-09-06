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
let deleteCommentAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    try {
        // get comment
        let comment = yield comment_1.default.findOne({
            id: id
        });
        // get user
        let user = yield user_1.default.findById(comment.user);
        // delete the comment from the user`s comments
        user.comments.splice(user.comments.indexOf(id), 1);
        yield user.save();
        // get the article
        let article = yield article_1.default.findById(comment.article).populate('comments');
        // delete the comment from the article`s comments
        article.comments.splice(article.comments.indexOf(comment, 1));
        yield article.save();
        // delete comment
        yield comment_1.default.findByIdAndDelete(id);
        res.status(200).send('ok !');
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.default = deleteCommentAdmin;
