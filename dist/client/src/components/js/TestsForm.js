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
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const QuestionForm_1 = __importDefault(require("./QuestionForm"));
let data = [{
        title: '',
        desc: '',
        correct: 1,
        answers: [{
                desc: ''
            }]
    }];
let TestsForm = (props) => {
    let { edit, headers, id, test } = props;
    let [questions, setQuestions] = (0, react_1.useState)({ data: data });
    if (test) {
        if (edit === true && test.title !== '') {
            data = test.questions;
        }
    }
    let handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        let testTitle = document.getElementById('testTitle').value;
        let testDesc = document.getElementById('testDesc').value;
        if (testTitle.length && testDesc.length) {
            if (edit === true) {
                yield axios_1.default.put(`http://localhost:8080/api/tests/${id}`, {
                    title: testTitle,
                    desc: testDesc,
                    questions: data
                }, headers);
            }
            else {
                yield axios_1.default.post('http://localhost:8080/api/tests', {
                    title: testTitle,
                    desc: testDesc,
                    questions: data
                }, headers);
            }
        }
        else {
            alert('test title and desc are required');
        }
    });
    let handleNewQuestion = (e) => {
        e.preventDefault();
        data.push({
            title: '',
            desc: '',
            correct: 1,
            answers: [{
                    desc: ''
                }]
        });
        setQuestions({ data: data });
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "testsForm" }, { children: [(0, jsx_runtime_1.jsxs)("h2", { children: [(edit === true) ? 'edit test' : 'new test', " ", (test) ? test.title : '', " "] }), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)("input", { type: 'text', id: 'testTitle', placeholder: 'title', defaultValue: (test) ? test.title : '', required: true }), (0, jsx_runtime_1.jsx)("input", { type: 'text', id: 'testDesc', placeholder: 'desc', defaultValue: (test) ? test.desc : '', required: true }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleNewQuestion }, { children: "new Question" })), (0, jsx_runtime_1.jsx)("div", { children: data.map(question => (0, jsx_runtime_1.jsx)(QuestionForm_1.default, { question: question, order: questions.data.indexOf(question), allQuestions: data, setQuestions: setQuestions }, Math.random() * 100000)) }), (0, jsx_runtime_1.jsx)("button", { children: "submit" })] }))] })));
};
exports.default = TestsForm;
