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
const question_1 = __importDefault(require("../models/question"));
const testModel_1 = __importDefault(require("../models/testModel"));
const user_1 = __importDefault(require("../models/user"));
const solvedTest_1 = __importDefault(require("../models/solvedTest"));
let deleteTestAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        // get test
        let test = yield testModel_1.default.findById(id).populate('solvedBy');
        // delete questions from db
        for (let i = 0; i < test.questions.length; i++) {
            yield question_1.default.findByIdAndDelete(test.questions[i]._id);
        }
        let userId = test.publisher;
        // get user who published the test
        let user = yield user_1.default.findById(userId);
        // delete the test from user`s published tests
        user.publishedTests.splice(user.publishedTests.indexOf(id), 1);
        yield user.save();
        // get users who solved the test
        for (let i = 0; i < test.solvedBy.length; i++) {
            let user = yield user_1.default.findById(test.solvedBy[i]._id);
            // delete the solvedTest from the user
            let solvedTest = yield solvedTest_1.default.findOne({
                test: test._id
            });
            user.solvedTests.splice(user.solvedTests.indexOf(solvedTest._id), 1);
            yield user.save();
            // delete solvedTest from db
            yield solvedTest_1.default.findOneAndDelete({
                test: test._id
            });
        }
        // delete test from db
        yield testModel_1.default.findByIdAndDelete(id);
        res.status(200).send('ok!');
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.default = deleteTestAdmin;
