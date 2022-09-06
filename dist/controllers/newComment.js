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
let newComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { userName } = req.params;
        let { desc } = req.body;
        let articleId = req.params.id;
        // get article
        let article = yield article_1.default.findOne({
            _id: articleId
        });
        // get user
        let user = yield user_1.default.findOne({
            userName: userName
        });
        // create comment
        let comment = yield comment_1.default.create({
            user: user._id,
            desc: desc,
            article: article._id
        });
        // pushing the comment to the user`s comments
        user.comments.push(comment);
        // pushing the comment to the artilce`s comments
        article.comments.push(comment);
        yield user.save();
        yield article.save();
        res.status(200).send('ok !');
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.default = newComment;
