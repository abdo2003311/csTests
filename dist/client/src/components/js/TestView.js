"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
let TestView = (props) => {
    let { title, desc, createdAt, _id } = props.test;
    let { solvedNum } = props;
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "testView" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: title }), (0, jsx_runtime_1.jsxs)("p", { children: ["Description : ", desc] }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "createdAt" }, { children: createdAt })), (0, jsx_runtime_1.jsxs)("footer", { children: [(0, jsx_runtime_1.jsxs)("span", { children: ["solved ", solvedNum, " times"] }), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: `http://localhost:3000/tests/${_id}` }, { children: "solve" }))] })] })));
};
exports.default = TestView;
