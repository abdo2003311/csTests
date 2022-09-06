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
const user_1 = __importDefault(require("../models/user"));
let getUsersAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let users = yield user_1.default.find().populate('image');
        res.status(200).send(users.map((user) => {
            return {
                userName: user.userName,
                email: user.email,
                comments: user.comments,
                publishedArticles: user.publishedArticles,
                publishedTests: user.publishedTests,
                createdAt: user.createdAt,
                image: user.image,
                _id: user._id,
                solvedTests: user.solvedTests
            };
        }));
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.default = getUsersAdmin;
