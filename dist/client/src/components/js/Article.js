"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const getAndSetArticle_1 = __importDefault(require("../../functions/getAndSetArticle"));
let Article = () => {
    let { id } = (0, react_router_dom_1.useParams)();
    let [article, setArticle] = (0, react_1.useState)({
        title: '',
        desc: '',
        image: {
            src: ''
        }
    });
    (0, getAndSetArticle_1.default)(article, setArticle, id);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'article' }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: article.title }), (0, jsx_runtime_1.jsx)("img", { src: article.image.src, alt: "nothing" }), (0, jsx_runtime_1.jsx)("p", { children: article.desc })] })));
};
exports.default = Article;
