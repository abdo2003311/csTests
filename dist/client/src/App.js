"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const TestPage_1 = __importDefault(require("./pages/TestPage"));
const ArticlesPage_1 = __importDefault(require("./pages/ArticlesPage"));
const TestsPage_1 = __importDefault(require("./pages/TestsPage"));
const AdminLoginPage_1 = __importDefault(require("./pages/AdminLoginPage"));
const EditTestPage_1 = __importDefault(require("./pages/EditTestPage"));
const ProfilePage_1 = __importDefault(require("./pages/ProfilePage"));
const SignUpPage_1 = __importDefault(require("./pages/SignUpPage"));
const LogInPage_1 = __importDefault(require("./pages/LogInPage"));
const EditUserPage_1 = __importDefault(require("./pages/EditUserPage"));
const react_router_dom_2 = require("react-router-dom");
const HomePage_1 = __importDefault(require("./pages/HomePage"));
const react_1 = require("react");
const ArticlePage_1 = __importDefault(require("./pages/ArticlePage"));
const EditArticlePage_1 = __importDefault(require("./pages/EditArticlePage"));
const AdminDashboard_1 = __importDefault(require("./pages/AdminDashboard"));
let App = () => {
    let [loggedIn, setLoggedIn] = (0, react_1.useState)(false);
    let [userName, setUserName] = (0, react_1.useState)(window.localStorage.userName);
    let accesstoken = window.localStorage.accesstoken;
    let headers = { headers: { accesstoken: accesstoken } };
    let handleLogOut = () => {
        window.localStorage.clear();
        setLoggedIn(false);
    };
    let handleNavIfLoggedIn = () => {
        if (window.localStorage.loggedIn === 'true' && !loggedIn)
            setLoggedIn(true);
        if (loggedIn) {
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_2.NavLink, Object.assign({ to: `profile/${window.localStorage.userName}` }, { children: "Profile" })), (0, jsx_runtime_1.jsx)(react_router_dom_2.NavLink, Object.assign({ to: 'login', onClick: handleLogOut }, { children: "Log-out" }))] }));
        }
        else {
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_2.NavLink, Object.assign({ to: 'signUp' }, { children: "Sign-up" })), (0, jsx_runtime_1.jsx)(react_router_dom_2.NavLink, Object.assign({ to: 'logIn' }, { children: "Log-in" }))] }));
        }
    };
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)("header", Object.assign({ className: 'mainHeader' }, { children: (0, jsx_runtime_1.jsxs)("nav", { children: [(0, jsx_runtime_1.jsx)("span", { children: "csTests" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_2.NavLink, Object.assign({ to: 'tests' }, { children: "Tests" })), (0, jsx_runtime_1.jsx)(react_router_dom_2.NavLink, Object.assign({ to: 'articles' }, { children: "Articles" })), handleNavIfLoggedIn()] })] }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'body' }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(HomePage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/profile/:userName', element: (0, jsx_runtime_1.jsx)(ProfilePage_1.default, { headers: headers }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/signUp', element: (0, jsx_runtime_1.jsx)(SignUpPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/editAccount', element: (0, jsx_runtime_1.jsx)(EditUserPage_1.default, { headers: headers, userName: userName, setUserName: setUserName }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/logIn', element: (0, jsx_runtime_1.jsx)(LogInPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/tests', element: (0, jsx_runtime_1.jsx)(TestsPage_1.default, { headers: headers, userName: userName }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/tests/:id', element: (0, jsx_runtime_1.jsx)(TestPage_1.default, { userName: userName, headers: headers }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/articles', element: (0, jsx_runtime_1.jsx)(ArticlesPage_1.default, { headers: headers, userName: userName }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/articles/:id', element: (0, jsx_runtime_1.jsx)(ArticlePage_1.default, { headers: headers, userName: userName }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/dashboard/tests/:id', element: (0, jsx_runtime_1.jsx)(EditTestPage_1.default, { headers: headers, userName: userName }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/dashboard/articles/:id', element: (0, jsx_runtime_1.jsx)(EditArticlePage_1.default, { headers: headers, userName: userName }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/adminLogin', element: (0, jsx_runtime_1.jsx)(AdminLoginPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/adminDashboard', element: (0, jsx_runtime_1.jsx)(AdminDashboard_1.default, { headers: headers }) })] }) }))] }));
};
exports.default = App;
