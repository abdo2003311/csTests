"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
let Answer = (props) => {
    let { desc, correct, order, degree, questionId, questionDegree } = props;
    let [answerd, setAnswerd] = (0, react_1.useState)(false);
    let id = `answer${Math.random() * 10000}`;
    let handleAnswer = () => {
        if (!answerd && order + 1 === correct)
            degree.data += questionDegree;
        setAnswerd(true);
        let answers = document.getElementsByClassName(questionId);
        for (let i = 0; i < answers.length; i++) {
            if (i + 1 === correct)
                answers[i].setAttribute('style', 'background-color :rgb(58, 231, 0); color : #fff');
            else
                answers[i].setAttribute('style', 'background-color : rgb(230, 11, 11);color : #fff');
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: questionId + ' answer', onClick: handleAnswer, id: id }, { children: (0, jsx_runtime_1.jsx)("p", { children: desc }) })));
};
exports.default = Answer;
