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
let logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, password } = req.body;
    try {
        // get user
        let user = yield user_1.default.findOne({
            email: email,
            password: password
        });
        // generate a token
        let accesstoken = (0, jsonwebtoken_1.sign)({
            id: user._id
        }, __1.PRIVATEKEY);
        res.status(200).send({
            accesstoken: accesstoken,
            userName: user.userName
        });
    }
    catch (e) {
        res.status(404).send(e);
    }
});
exports.default = logIn;
