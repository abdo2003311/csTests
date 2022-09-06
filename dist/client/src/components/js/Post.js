"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
let Article = (props) => {
    let { title, desc, catagory, createdAt } = props;
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "post" }, { children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("h2", { children: title }), (0, jsx_runtime_1.jsx)("span", { children: createdAt })] }), (0, jsx_runtime_1.jsx)("p", { children: desc }), (0, jsx_runtime_1.jsxs)("span", { children: ["catagory : ", catagory] })] })));
};
exports.default = Article;
