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
let newTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { userName } = req.params;
        let { title, desc, questions } = req.body;
        // this array stores the ids of the created questions
        let createdQuestionsIds = [];
        for (let i = 0; i < questions.length; i++) {
            // creating a question
            let createdQuestion = yield question_1.default.create({
                title: questions[i].title,
                desc: questions[i].desc,
                answers: questions[i].answers,
                correct: questions[i].correct
            });
            // storing the question in the array
            let id = createdQuestion._id;
            createdQuestionsIds.push(id);
        }
        // get the publiser
        let user = yield user_1.default.findOne({ userName: userName });
        // create the test
        let test = yield testModel_1.default.create({
            title: title,
            desc: desc,
            questions: createdQuestionsIds,
            publisher: user
        });
        // pushing the test to the user`s published tests array  
        user.publishedTests.push(test);
        yield user.save();
        res.status(200).send('done !');
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.default = newTest;
