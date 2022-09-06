"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ArticleView_1 = __importDefault(require("../components/js/ArticleView"));
const getAndSetArticles_1 = __importDefault(require("../functions/getAndSetArticles"));
const PublishOrUpdateArticle_1 = __importDefault(require("../components/js/PublishOrUpdateArticle"));
let ArticlesPage = (props) => {
    let { headers, userName } = props;
    let [articles, setArticles] = (0, react_1.useState)({ data: [{
                title: '',
                desc: '...',
                catagory: '...',
                createdAt: '...',
                _id: '...',
                image: {
                    src: ''
                }
            }] });
    (0, getAndSetArticles_1.default)(articles, setArticles);
    let handleViewNewArticle = () => {
        var _a;
        (_a = document.getElementsByClassName('publishOrUpdateArticle')[0]) === null || _a === void 0 ? void 0 : _a.classList.toggle('active');
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "articlesPage" }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "bi bi-plus-lg", onClick: handleViewNewArticle }), (0, jsx_runtime_1.jsx)(PublishOrUpdateArticle_1.default, { headers: headers, upadte: false, id: undefined, userName: userName }), articles.data.map(article => (0, jsx_runtime_1.jsx)(ArticleView_1.default, { title: article.title, desc: article.desc, catagory: article.catagory, createdAt: article.createdAt, id: article._id, image: article.image }, Math.random() * 10000))] })));
};
exports.default = ArticlesPage;
