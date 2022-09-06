"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AnswerForm_1 = __importDefault(require("./AnswerForm"));
let QuestionForm = (props) => {
    let { order, allQuestions, setQuestions } = props;
    let { title, desc, correct, answers } = props.question;
    let [, updateComponent] = (0, react_1.useState)({ data: 1 });
    let id = Math.random() * 100000;
    let handleInput = () => {
        allQuestions[order].title = document.getElementById(`questionTitle${id}`).value;
        allQuestions[order].desc = document.getElementById(`questionDesc${id}`).value;
        allQuestions[order].correct = Number(document.getElementById(`questionCorrect${id}`).value);
    };
    let handleNewAnswer = (e) => {
        e.preventDefault();
        answers.push({
            desc: ''
        });
        updateComponent({ data: 1 });
    };
    let handleDelete = () => {
        allQuestions.splice(order, 1);
        setQuestions({ data: allQuestions });
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "questionForm" }, { children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsxs)("h3", { children: ["question number ", (order === -1) ? '1' : order + 1] }), (0, jsx_runtime_1.jsx)("i", { className: "bi bi-x-lg", onClick: handleDelete })] }), (0, jsx_runtime_1.jsx)("label", { children: "title" }), (0, jsx_runtime_1.jsx)("input", { type: 'text', id: `questionTitle${id}`, defaultValue: title, onInput: handleInput, required: true }), (0, jsx_runtime_1.jsx)("label", { children: "description" }), (0, jsx_runtime_1.jsx)("input", { type: 'text', id: `questionDesc${id}`, defaultValue: desc, onInput: handleInput, required: true }), "Answer", (0, jsx_runtime_1.jsx)("input", { type: 'number', id: `questionCorrect${id}`, defaultValue: correct, onInput: handleInput, required: true }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleNewAnswer }, { children: "new Answer" })), (0, jsx_runtime_1.jsx)("div", { children: answers.map((answer) => (0, jsx_runtime_1.jsx)(AnswerForm_1.default, { answers: answers, allQuestions: allQuestions, order: answers.indexOf(answer), desc: answer.desc, setQuestions: setQuestions }, Math.random() * 100000)) })] })));
};
exports.default = QuestionForm;
