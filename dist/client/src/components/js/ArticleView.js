"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
let ArticleView = (props) => {
    let { title, desc, catagory, createdAt, id, image } = props;
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "article" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: title }), (0, jsx_runtime_1.jsx)("img", { src: image.src, alt: "nothing" }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "createdAt" }, { children: createdAt })), (0, jsx_runtime_1.jsxs)("p", { children: [desc.slice(0, 99), "......."] }), (0, jsx_runtime_1.jsxs)("footer", { children: [(0, jsx_runtime_1.jsxs)("span", { children: ["catagory : ", catagory] }), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: `http://localhost:3000/articles/${id}` }, { children: "read" }))] })] })));
};
exports.default = ArticleView;
