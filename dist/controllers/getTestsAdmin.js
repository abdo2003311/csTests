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
const testModel_1 = __importDefault(require("../models/testModel"));
let getTestsAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let tests = yield testModel_1.default.find().populate('publisher').populate('solvedBy');
        res.status(200).send(tests.map((test) => {
            return {
                title: test.title,
                createdAt: test.createdAt,
                desc: test.desc,
                publisher: test.publisher.userName,
                _id: test._id,
                solvedBy: test.solvedBy
            };
        }));
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.default = getTestsAdmin;
