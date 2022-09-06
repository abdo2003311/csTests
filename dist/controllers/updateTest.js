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
let updateTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { id } = req.params;
        let { title, desc, questions } = req.body;
        let test = yield testModel_1.default.findById(id);
        test.title = title;
        test.desc = desc;
        // deleting the old questions
        for (let i = 0; i < test.questions.length; i++) {
            yield question_1.default.findByIdAndDelete(test.questions[i]);
        }
        test.questions = [];
        // creating new questions
        for (let i = 0; i < questions.length; i++) {
            let q = yield question_1.default.create({
                title: questions[i].title,
                desc: questions[i].desc,
                answers: questions[i].answers,
                correct: questions[i].correct
            });
            test.questions.push(q._id);
        }
        yield test.save();
        res.status(200).send('ok');
    }
    catch (e) {
        res.status(500).send('err !');
    }
});
exports.default = updateTest;
