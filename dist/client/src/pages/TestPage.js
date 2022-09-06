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
const react_router_dom_1 = require("react-router-dom");
const Question_1 = __importDefault(require("../components/js/Question"));
const getAndSetTest_1 = __importDefault(require("../functions/getAndSetTest"));
let data = {
    title: '',
    desc: '...',
    createdAt: '...',
    solvedBy: [],
    questions: [{
            title: '...',
            desc: '...',
            answers: [{
                    desc: '...'
                }, {
                    desc: '...'
                },],
            correct: 1
        }],
    _id: '...'
};
let Test = (props) => {
    let { userName, headers } = props;
    let { id } = (0, react_router_dom_1.useParams)();
    let [test, setTest] = (0, react_1.useState)(data);
    let degree = {
        data: 0
    };
    (0, getAndSetTest_1.default)(test, setTest, id);
    let handleSubmitTest = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        yield axios_1.default.post(`http://localhost:8080/api/users/${userName}/solveTest/${id}`, {
            degree: degree.data,
        }, headers);
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "test" }, { children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h2", { children: test.title }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "createdAt" }, { children: test.createdAt })), (0, jsx_runtime_1.jsx)("p", { children: test.desc })] }), test.questions.map(question => (0, jsx_runtime_1.jsx)(Question_1.default, { question: question, degree: degree, questionDegree: 100 / test.questions.length }, Math.random() * 10000)), (userName) ? (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleSubmitTest }, { children: "submit Test" })) : ' '] })));
};
exports.default = Test;
