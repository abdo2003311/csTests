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
const jsonwebtoken_1 = require("jsonwebtoken");
const __1 = require("..");
const user_1 = __importDefault(require("../models/user"));
let userAuthoraize = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { userName } = req.params;
    let { accesstoken } = req.headers;
    (0, jsonwebtoken_1.verify)(accesstoken, __1.PRIVATEKEY, (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            res.status(400).send('bad resquest');
            return '';
        }
        try {
            let user = yield user_1.default.findOne({
                userName: userName
            });
            if (user) {
                if (user._id.toString() === decoded.id)
                    next();
                else
                    res.status(403).send('unAuthouraized');
            }
            else {
                res.status(404).send('NOT FOUND 404');
            }
        }
        catch (e) {
            res.status(500).send(e);
        }
    }));
});
exports.default = userAuthoraize;
