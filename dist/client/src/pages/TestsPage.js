"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const TestView_1 = __importDefault(require("../components/js/TestView"));
const react_1 = require("react");
const getAndSetTests_1 = __importDefault(require("../functions/getAndSetTests"));
const PublishOrUpdateTest_1 = __importDefault(require("../components/js/PublishOrUpdateTest"));
let data = [{
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
    }];
let TestsPage = (props) => {
    let { headers, userName } = props;
    let [tests, setTests] = (0, react_1.useState)({ data: data });
    (0, getAndSetTests_1.default)(tests, setTests);
    let handleViewNewTest = () => {
        var _a;
        (_a = document.getElementsByClassName('publishOrUpdateTest')[0]) === null || _a === void 0 ? void 0 : _a.classList.toggle('active');
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "testsPage" }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "bi bi-plus-lg", onClick: handleViewNewTest }), (0, jsx_runtime_1.jsx)(PublishOrUpdateTest_1.default, { upadte: false, headers: headers, userName: userName }), tests.data.map((test) => (0, jsx_runtime_1.jsx)(TestView_1.default, { solvedNum: test.solvedBy.length, test: test }, Math.random() * 10000))] })));
};
exports.default = TestsPage;
