"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const DashboardTestView_1 = __importDefault(require("../components/js/DashboardTestView"));
const DashboardArticleView_1 = __importDefault(require("../components/js/DashboardArticleView"));
let Dashboard = (props) => {
    let { headers, user } = props;
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'dashboard' }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "dashboardArticles" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "my articles" }), user.publishedArticles.map(article => (0, jsx_runtime_1.jsx)(DashboardArticleView_1.default, { headers: headers, articleId: article, userName: user.userName }, Math.random() * 10000))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "dashboardTests" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "my Tests" }), user.publishedTests.map(test => (0, jsx_runtime_1.jsx)(DashboardTestView_1.default, { headers: headers, testId: test, userName: user.userName }, Math.random() * 10000))] }))] })));
};
exports.default = Dashboard;
