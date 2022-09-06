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
const solvedTest_1 = __importDefault(require("../models/solvedTest"));
const testModel_1 = __importDefault(require("../models/testModel"));
const user_1 = __importDefault(require("../models/user"));
let solveTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { userName, id } = req.params;
        let { degree } = req.body;
        // getting the solved test
        let test = yield testModel_1.default.findById(id);
        // getting the user who solved the test
        let user = yield user_1.default.findOne({
            userName: userName
        });
        // pushing the user who solved the test to the test`s solvedBy array
        test.solvedBy.push(user);
        yield test.save();
        // creating solved test
        let solvedTest = yield solvedTest_1.default.create({
            test: test,
            user: user,
            degree: Number(degree),
            title: test.title
        });
        // pushing the solved test to the user`s (who solved the test) solved tests array
        user.solvedTests.push(solvedTest);
        yield user.save();
        res.status(200).send('done !');
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.default = solveTest;
