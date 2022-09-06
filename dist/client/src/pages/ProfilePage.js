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
const getAndSetUser_1 = __importDefault(require("../functions/getAndSetUser"));
const Dashboard_1 = __importDefault(require("./Dashboard"));
let ProfilePage = (props) => {
    let params = (0, react_router_dom_1.useParams)();
    let userName = params.userName;
    let { headers } = props;
    let [user, setUser] = (0, react_1.useState)({
        userName: '...',
        password: '...',
        createdAt: '...',
        email: '...',
        image: {
            src: '...',
            _id: ''
        },
        solvedTests: [],
        publishedArticles: [],
        publishedTests: [],
        comments: [],
        _id: ''
    });
    (0, getAndSetUser_1.default)(user, setUser, userName, headers);
    let avgDegree = () => {
        let sum = 0;
        user.solvedTests.forEach((test) => sum += test.degree);
        return sum / user.solvedTests.length;
    };
    let handleDeleteAccount = () => __awaiter(void 0, void 0, void 0, function* () {
        yield axios_1.default.delete(`http://localhost:8080/api/users/${userName}`, headers);
        window.localStorage.clear();
        window.location.href = 'http://localhost:3000/login';
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "profilePage" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "wrapper" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "l" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "Name" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "val" }, { children: user.userName })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "Created At " })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "val" }, { children: user.createdAt })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "Password" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "val" }, { children: user.password })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "Email" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "val" }, { children: user.email }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "i" }, { children: (0, jsx_runtime_1.jsx)("img", { src: user.image.src, alt: "nothing" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "statistics" }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { children: "solved Tests" }), (0, jsx_runtime_1.jsx)("span", { children: user.solvedTests.length })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { children: "average degree" }), (0, jsx_runtime_1.jsx)("span", { children: isNaN(avgDegree()) ? 0 : avgDegree().toPrecision(4) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { children: "published Tests" }), (0, jsx_runtime_1.jsx)("span", { children: user.publishedTests.length })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { children: "published Articles" }), (0, jsx_runtime_1.jsx)("span", { children: user.publishedArticles.length })] }), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "http://localhost:3000/editAccount" }, { children: "edit account" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleDeleteAccount }, { children: "delete account" }))] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "solvedTests" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "solved Tests " }), user.solvedTests.map((solvedTest) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "solvedTest" }, { children: [(0, jsx_runtime_1.jsxs)("span", { children: ["title : ", solvedTest.title] }), (0, jsx_runtime_1.jsxs)("span", { children: ["degree : ", solvedTest.degree] }), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: `http://localhost:3000/tests/${solvedTest.test}` }, { children: "retry" })) })] }), Math.random() * 100000)))] })), (0, jsx_runtime_1.jsx)(Dashboard_1.default, { headers: headers, user: user })] })));
};
exports.default = ProfilePage;
