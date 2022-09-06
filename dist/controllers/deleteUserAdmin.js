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
const question_1 = __importDefault(require("../models/question"));
const solvedTest_1 = __importDefault(require("../models/solvedTest"));
const testModel_1 = __importDefault(require("../models/testModel"));
const user_1 = __importDefault(require("../models/user"));
let deleteUserAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        let user = yield user_1.default.findById(id).populate('solvedTests');
        // deleting comments
        for (let i = 0; i < user.comments.length; i++) {
            let article = yield article_1.default.findById(user.comments[i].article);
            article.comments.splice(article.comments.indexOf(user.comments[i], 1));
            yield article.save();
            yield comment_1.default.findByIdAndDelete(user.comments[i]._id);
        }
        // deleting Articles
        for (let i = 0; i < user.publishedArticles.length; i++) {
            let article = yield article_1.default.findById(user.publishedArticles[i]).populate('comments');
            for (let j = 0; j < article.comments.length; j++) {
                let user = yield user_1.default.findById(article.comments[j].user);
                user.comments.splice(user.comments.indexOf(article.comments[j]), 1);
                yield user.save();
                yield comment_1.default.findByIdAndDelete(article.comments[j]._id);
            }
            yield article_1.default.findByIdAndDelete(user.publishedArticles[i]);
        }
        // deleting solved Tests data 
        user = (yield user_1.default.findById(id).populate('solvedTests'));
        for (let i = 0; i < user.solvedTests.length; i++) {
            let test = yield testModel_1.default.findById(user.solvedTests[i].test);
            test.solvedBy.splice(test.solvedBy.indexOf(user._id), 1);
            yield testModel_1.default.findOneAndUpdate({ _id: test._id }, {
                solvedBy: test.solvedBy
            });
            yield solvedTest_1.default.findByIdAndDelete(user.solvedTests[i]);
        }
        // deleting Tests
        for (let i = 0; i < user.publishedTests.length; i++) {
            let test = yield testModel_1.default.findById(user.publishedTests[i]).populate('questions');
            for (let j = 0; j < test.questions.length; j++) {
                yield question_1.default.findByIdAndDelete(test.questions[j]._id);
            }
            yield testModel_1.default.findByIdAndDelete(user.publishedTests[i]);
        }
        // deleting User
        yield user_1.default.findByIdAndDelete(id);
        res.status(200).send('ok!');
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.default = deleteUserAdmin;
