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
let AdminLoginPage = () => {
    let handleLogin = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        let data = yield axios_1.default.post('http://localhost:8080/admin/login', {
            userName: document.getElementById('userName').value,
            password: document.getElementById('password').value
        });
        window.localStorage.accesstoken = data.data.token;
        window.location.href = 'http://localhost:3000/adminDashboard';
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "adminLogin" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Admin Login" }), (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsx)("label", { children: "Name" }), (0, jsx_runtime_1.jsx)("input", { type: 'text', id: 'userName', placeholder: "Enter Admin Name" }), (0, jsx_runtime_1.jsx)("label", { children: "Password" }), (0, jsx_runtime_1.jsx)("input", { type: 'password', id: 'password', placeholder: "Enter Admin Password" }), (0, jsx_runtime_1.jsx)("input", { type: 'submit', onClick: handleLogin })] })] })));
};
exports.default = AdminLoginPage;
