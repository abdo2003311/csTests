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
/*
    this controller is used for comments in
    the front end to check if the user is the
    one who commented
 */
let getUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { userName } = req.params;
        let user = yield user_1.default.findOne({
            userName: userName
        });
        res.status(200).send(user._id);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.default = getUserId;
