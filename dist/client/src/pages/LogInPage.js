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
let LogInPage = () => {
    let handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        let password = document.getElementById('password').value;
        let email = document.getElementById('email').value;
        let errorAlert = document.getElementById('error');
        if (password.length <= 8 || password.length >= 20) {
            errorAlert.textContent = "password length must be more than 8 char and less than 20";
            return '';
        }
        try {
            let res = yield axios_1.default.post('http://localhost:8080/api/users/logIn', {
                password: password,
                email: email
            });
            errorAlert.textContent = res.statusText;
            window.localStorage.accesstoken = res.data.accesstoken;
            window.localStorage.loggedIn = 'true';
            window.localStorage.userName = res.data.userName;
            window.location.href = `http://localhost:3000/profile/${res.data.userName}`;
        }
        catch (e) {
            errorAlert.textContent = e;
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "logInPage" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Log-In" }), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: ["Email", (0, jsx_runtime_1.jsx)("input", { type: 'email', placeholder: "email", id: "email", required: true }), "Password", (0, jsx_runtime_1.jsx)("input", { type: 'password', placeholder: "password", id: "password", required: true }), (0, jsx_runtime_1.jsx)("input", { type: 'submit' }), (0, jsx_runtime_1.jsx)("span", { id: 'error' })] }))] })));
};
exports.default = LogInPage;
