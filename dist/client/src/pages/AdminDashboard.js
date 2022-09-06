"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AdminDashboardArticleView_1 = __importDefault(require("../components/js/AdminDashboardArticleView"));
const AdminDashboardCommentView_1 = __importDefault(require("../components/js/AdminDashboardCommentView"));
const AdminDashboardTestView_1 = __importDefault(require("../components/js/AdminDashboardTestView"));
const AdminDashboardUserView_1 = __importDefault(require("../components/js/AdminDashboardUserView"));
const getAndSetArticlesAdmin_1 = __importDefault(require("../functions/getAndSetArticlesAdmin"));
const getAndSetCommentsAdmin_1 = __importDefault(require("../functions/getAndSetCommentsAdmin"));
const getAndSetTestsAdmin_1 = __importDefault(require("../functions/getAndSetTestsAdmin"));
const getAndSetUsersAdmin_1 = __importDefault(require("../functions/getAndSetUsersAdmin"));
const verfiyAdmin_1 = __importDefault(require("../functions/verfiyAdmin"));
let AdminDashboard = (props) => {
    let { headers } = props;
    (0, verfiyAdmin_1.default)(headers);
    let [users, setUsers] = (0, react_1.useState)([{
            userName: '',
            password: '',
            email: '',
            image: {
                src: '',
                _id: ''
            },
            createdAt: '',
            solvedTests: [{
                    test: '',
                    degree: 0,
                    title: ''
                }],
            _id: '',
            publishedTests: [''],
            publishedArticles: [''],
            comments: ['']
        }]);
    let [tests, setTests] = (0, react_1.useState)([
        {
            title: '',
            desc: '',
            questions: [],
            createdAt: '',
            _id: '',
            publisher: '',
            solvedBy: []
        }
    ]);
    let [articles, setArticles] = (0, react_1.useState)([
        {
            title: '',
            desc: '',
            createdAt: '',
            _id: '',
            publisher: '',
            catagory: '',
            image: '',
            comments: ['']
        }
    ]);
    let [comments, setComments] = (0, react_1.useState)([
        {
            desc: '',
            _id: '',
            user: {
                userName: '',
                password: '',
                email: '',
                image: {
                    src: '',
                    _id: ''
                },
                createdAt: '',
                solvedTests: [{
                        test: '',
                        degree: 0,
                        title: ''
                    }],
                _id: '',
                publishedTests: [''],
                publishedArticles: [''],
                comments: ['']
            },
            createdAt: ''
        }
    ]);
    (0, getAndSetUsersAdmin_1.default)(users, setUsers, headers);
    (0, getAndSetTestsAdmin_1.default)(tests, setTests, headers);
    (0, getAndSetArticlesAdmin_1.default)(articles, setArticles, headers);
    (0, getAndSetCommentsAdmin_1.default)(comments, setComments, headers);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "adminDashboard" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "users" }), users.map((user) => ((0, jsx_runtime_1.jsx)(AdminDashboardUserView_1.default, { user: user, headers: headers }, Math.random() * 100000))), (0, jsx_runtime_1.jsx)("h3", { children: "tests" }), tests.map((test) => ((0, jsx_runtime_1.jsx)(AdminDashboardTestView_1.default, { test: test, headers: headers }, Math.random() * 100000))), (0, jsx_runtime_1.jsx)("h3", { children: "articles" }), articles.map((article) => ((0, jsx_runtime_1.jsx)(AdminDashboardArticleView_1.default, { article: article, headers: headers }, Math.random() * 100000))), (0, jsx_runtime_1.jsx)("h3", { children: "comments" }), comments.map((comment) => ((0, jsx_runtime_1.jsx)(AdminDashboardCommentView_1.default, { comment: comment, headers: headers }, Math.random() * 100000)))] })));
};
exports.default = AdminDashboard;
