"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
let AnswerForm = (props) => {
    let { order, desc, answers, setQuestions, allQuestions } = props;
    let id = Math.random() * 100000;
    let handleInput = () => {
        answers[order].desc = document.getElementById(`answerDesc${id}`).value;
    };
    let handleDelete = () => {
        answers.splice(order, 1);
        setQuestions({ data: allQuestions });
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "questionForm" }, { children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsxs)("h3", { children: ["answer number ", order + 1] }), (0, jsx_runtime_1.jsx)("i", { className: "bi bi-x-lg", onClick: handleDelete })] }), (0, jsx_runtime_1.jsx)("label", { children: "description" }), (0, jsx_runtime_1.jsx)("input", { type: 'text', id: `answerDesc${id}`, defaultValue: desc, onInput: handleInput, required: true })] })));
};
exports.default = AnswerForm;
