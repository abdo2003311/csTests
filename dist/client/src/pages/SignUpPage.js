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
let SignUpPage = () => {
    let [image, setImage] = (0, react_1.useState)({});
    let handleFile = (e) => {
        setImage(e.target.files[0]);
    };
    let handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        let userName = document.getElementById('userName').value;
        let password = document.getElementById('password').value;
        let email = document.getElementById('email').value;
        let errorAlert = document.getElementById('error');
        let i = image;
        let formData = new FormData();
        //Adding files to the formdata
        formData.append("image", i);
        if (userName.length <= 8 || userName.length >= 20) {
            errorAlert.textContent = "username length must be more than 8 char and less than 20";
            return '';
        }
        if (password.length <= 8 || password.length >= 20) {
            errorAlert.textContent = "password length must be more than 8 char and less than 20";
            return '';
        }
        if (userName.search(/[0-9]/) === -1) {
            errorAlert.textContent = "username must contain numbers";
            return '';
        }
        if (userName.search(/[A-Z]/) !== -1) {
            errorAlert.textContent = "username must not contain capital letters";
            return '';
        }
        try {
            let imageName = yield axios_1.default.post('http://localhost:8080/uploadImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            let res = yield axios_1.default.post('http://localhost:8080/api/users/signUp', {
                userName: userName,
                password: password,
                email: email,
                imageName: imageName.data
            });
            errorAlert.textContent = res.statusText;
            window.localStorage.accesstoken = res.data;
            window.localStorage.loggedIn = 'true';
            window.localStorage.userName = userName;
            window.location.href = `http://localhost:3000/profile/${userName}`;
        }
        catch (e) {
            errorAlert.textContent = e;
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "signUpPage" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Register" }), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: ["Name", (0, jsx_runtime_1.jsx)("input", { type: 'text', placeholder: "Enter your Name", id: "userName", required: true }), "Password", (0, jsx_runtime_1.jsx)("input", { type: 'password', placeholder: "Enter your Password", id: "password", required: true }), "Email", (0, jsx_runtime_1.jsx)("input", { type: 'email', placeholder: "Enter your Email", id: "email", required: true }), (0, jsx_runtime_1.jsx)("input", { type: 'file', id: "img", onChange: handleFile }), (0, jsx_runtime_1.jsx)("input", { type: 'submit' }), (0, jsx_runtime_1.jsx)("span", { id: 'error' })] }))] })));
};
exports.default = SignUpPage;
