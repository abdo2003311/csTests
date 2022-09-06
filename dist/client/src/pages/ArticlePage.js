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
const Comment_1 = __importDefault(require("../components/js/Comment"));
const getAndSetArticle_1 = __importDefault(require("../functions/getAndSetArticle"));
const getAndSetUserId_1 = __importDefault(require("../functions/getAndSetUserId"));
let Article = (props) => {
    let { headers, userName } = props;
    let { id } = (0, react_router_dom_1.useParams)();
    let [article, setArticle] = (0, react_1.useState)({
        title: '',
        desc: '',
        image: {
            src: ''
        },
        createdAt: '',
        _id: '',
        comments: [{
                user: '',
                desc: '',
                createdAt: '',
                _id: ''
            }]
    });
    let handleClick = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        yield axios_1.default.post(`http://localhost:8080/api/articles/${article._id}/comment/${userName}`, {
            desc: document.getElementById('commentDesc').value
        }, headers);
    });
    let [thisUserId, setUserId] = (0, react_1.useState)('');
    (0, getAndSetArticle_1.default)(article, setArticle, id);
    (0, getAndSetUserId_1.default)(thisUserId, setUserId, userName, headers);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'articlePage' }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'article' }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: article.title }), (0, jsx_runtime_1.jsx)("img", { src: article.image.src, alt: "nothing" }), (0, jsx_runtime_1.jsx)("p", { children: article.desc }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'createdAt' }, { children: article.createdAt }))] })), (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsx)("label", { children: "write a comment" }), (0, jsx_runtime_1.jsx)("textarea", { id: 'commentDesc', rows: 4 }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleClick }, { children: "submit" }))] }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'comments' }, { children: article.comments.map(comment => (0, jsx_runtime_1.jsx)(Comment_1.default, { comment: comment, thisUserId: thisUserId, headers: headers, userName: userName }, Math.random() * 100000)) }))] })));
};
exports.default = Article;
