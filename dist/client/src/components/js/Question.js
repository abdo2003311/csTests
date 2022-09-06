"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Answer_1 = __importDefault(require("./Answer"));
let Question = (props) => {
    let { degree, questionDegree } = props;
    let { title, desc, answers, correct } = props.question;
    let id = `question${Math.random() * 10000}`;
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "question" }, { children: [(0, jsx_runtime_1.jsx)("header", { children: (0, jsx_runtime_1.jsx)("h2", { children: title }) }), (0, jsx_runtime_1.jsx)("p", { children: desc }), answers.map((answer) => (0, jsx_runtime_1.jsx)(Answer_1.default, { desc: answer.desc, order: answers.indexOf(answer), correct: correct, degree: degree, questionId: id, questionDegree: questionDegree }, Math.random() * 10000))] })));
};
exports.default = Question;
