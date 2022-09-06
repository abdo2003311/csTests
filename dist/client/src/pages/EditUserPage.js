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
let EditUserPage = (props) => {
    let { headers, userName, setUserName } = props;
    let handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        let newUserName = document.getElementById('userName').value;
        let newPassword = document.getElementById('password').value;
        let newEmail = document.getElementById('email').value;
        let errorAlert = document.getElementById('error');
        if (newUserName.length <= 8 || newUserName.length >= 20) {
            errorAlert.textContent = "username length must be more than 8 char and less than 20";
            return '';
        }
        if (newUserName.search(/[0-9]/) === -1) {
            errorAlert.textContent = "username must contain numbers";
            return '';
        }
        if (newUserName.search(/[A-Z]/) !== -1) {
            errorAlert.textContent = "username must not contain capital letters";
            return '';
        }
        if (newPassword.length <= 8 || newPassword.length >= 20) {
            errorAlert.textContent = "password length must be more than 8 char and less than 20";
            return '';
        }
        try {
            let res = yield axios_1.default.put(`http://localhost:8080/api/users/${userName}`, {
                newUserName: newUserName,
                newPassword: newPassword,
                newEmail: newEmail
            }, headers);
            setUserName(newUserName);
            errorAlert.textContent = res.statusText;
            window.localStorage.userName = newUserName;
            window.location.href = `http://localhost:3000/profile/${newUserName}`;
        }
        catch (e) {
            errorAlert.textContent = e;
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "editUserPage" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "edit-user" }), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: ["Name", (0, jsx_runtime_1.jsx)("input", { type: 'text', placeholder: "username", id: "userName", required: true }), "Password", (0, jsx_runtime_1.jsx)("input", { type: 'password', placeholder: "password", id: "password", required: true }), "Email", (0, jsx_runtime_1.jsx)("input", { type: 'email', placeholder: "email", id: "email", required: true }), (0, jsx_runtime_1.jsx)("input", { type: 'submit' }), (0, jsx_runtime_1.jsx)("span", { id: 'error' })] }))] })));
};
exports.default = EditUserPage;
