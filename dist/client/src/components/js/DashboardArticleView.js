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
const getAndSetArticle_1 = __importDefault(require("../../functions/getAndSetArticle"));
let DashboardArticleView = (props) => {
    let { headers, userName, articleId } = props;
    let [article, setArticle] = (0, react_1.useState)({
        title: '',
        desc: '',
        createdAt: '',
        catagory: '',
        image: '',
        comments: [],
        _id: ''
    });
    (0, getAndSetArticle_1.default)(article, setArticle, articleId);
    let { title, createdAt, desc, catagory } = article;
    let handleDelete = () => __awaiter(void 0, void 0, void 0, function* () {
        yield axios_1.default.delete(`http://localhost:8080/api/articles/${articleId}/${userName}`, headers);
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "dashboardArticleView" }, { children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("span", { children: title }), (0, jsx_runtime_1.jsx)("i", { className: "bi bi-x-lg", onClick: handleDelete })] }), (0, jsx_runtime_1.jsx)("span", { children: createdAt }), (0, jsx_runtime_1.jsx)("span", { children: desc }), (0, jsx_runtime_1.jsxs)("span", { children: ["catagory : ", catagory] }), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: `http://localhost:3000/dashboard/articles/${articleId}` }, { children: "Edit" }))] })));
};
exports.default = DashboardArticleView;
