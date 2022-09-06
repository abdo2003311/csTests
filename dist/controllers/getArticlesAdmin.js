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
let getArticlesAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let articles = yield article_1.default.find().populate('publisher');
        res.status(200).send(articles.map((article) => {
            let { userName } = article.publisher;
            return {
                title: article.title,
                createdAt: article.createdAt,
                desc: article.desc,
                publisher: userName,
                _id: article._id,
                comments: article.comments
            };
        }));
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.default = getArticlesAdmin;
