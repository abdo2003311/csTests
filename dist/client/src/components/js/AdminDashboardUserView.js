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
let AdminDashboardUserView = (props) => {
    let { userName, email, comments, publishedArticles, publishedTests, createdAt, image, _id, solvedTests } = props.user;
    let { headers } = props;
    let handleDelete = () => __awaiter(void 0, void 0, void 0, function* () {
        yield axios_1.default.delete(`http://localhost:8080/admin/users/${_id}`, headers);
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "adminDashboardUserViewWrapper" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: image.src, alt: "nothing" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "adminDashboardUserView" }, { children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "Name" })), (0, jsx_runtime_1.jsx)("i", { className: "bi bi-x-lg", onClick: handleDelete })] }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "val" }, { children: userName })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "created at" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "val" }, { children: createdAt })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "email" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "val" }, { children: email })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "comments" })), (0, jsx_runtime_1.jsx)("span", { children: comments.length }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "publishedArticles" })), (0, jsx_runtime_1.jsx)("span", { children: publishedArticles.length }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "publishedTests" })), (0, jsx_runtime_1.jsx)("span", { children: publishedTests.length }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "solvedTests" })), (0, jsx_runtime_1.jsx)("span", { children: solvedTests.length })] }))] })));
};
exports.default = AdminDashboardUserView;
