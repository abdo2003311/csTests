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
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = require("jsonwebtoken");
const image_1 = __importDefault(require("../models/image"));
let newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { userName, password, email, imageName } = req.body;
        // cheking if this username Already exsits
        let findUserByUserName = yield user_1.default.findOne({
            userName: userName
        });
        if (findUserByUserName) {
            res.status(400).send('this username already exits!');
            return '';
        }
        // cheking if this email Already exsits
        let findUserByEmail = yield user_1.default.findOne({
            email: email
        });
        if (findUserByEmail) {
            res.status(400).send('this email already exits!');
            return '';
        }
        // creating image
        let image = yield image_1.default.create({
            src: `http://localhost:${__1.PORT}/${imageName}`
        });
        // creating user
        let user = yield user_1.default.create({
            userName: userName,
            password: password,
            email: email,
            image: image
        });
        // generating access token
        let accesstoken = (0, jsonwebtoken_1.sign)({
            id: user._id
        }, __1.PRIVATEKEY);
        // sending the access token
        res.status(200).send(accesstoken);
        return '';
    }
    catch (e) {
        res.status(500).send(e);
        return '';
    }
});
exports.default = newUser;
