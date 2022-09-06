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
let PublishArticle = (props) => {
    let { edit, headers, id, userName } = props;
    let [article, setArticle] = (0, react_1.useState)({
        title: '',
        desc: '',
        catagory: ''
    });
    let [image, setImage] = (0, react_1.useState)({});
    let handleFile = (e) => {
        setImage(e.target.files[0]);
    };
    /*     if (edit === true) {
    
            getAndSetArticles(article, setArticle);
    
        } */
    let handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        let articleTitle = document.getElementById('articleTitle').value;
        let articleDesc = document.getElementById('articleDesc').value;
        let articleCatagory = document.getElementById('articleCatagory').value;
        let i = image;
        let formData = new FormData();
        //Adding files to the formdata
        formData.append("image", i);
        let imageName = yield axios_1.default.post('http://localhost:8080/uploadImage', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (articleTitle.length && articleDesc.length && articleCatagory.length) {
            if (edit === true) {
                axios_1.default.put(`http://localhost:8080/api/articles/${id}/${userName}`, {
                    title: articleTitle,
                    desc: articleDesc,
                    catagory: articleCatagory,
                    imageName: imageName.data
                }, headers);
            }
            else {
                axios_1.default.post(`http://localhost:8080/api/articles/${userName}`, {
                    title: articleTitle,
                    desc: articleDesc,
                    catagory: articleCatagory,
                    imageName: imageName.data
                }, headers);
            }
        }
        else {
            alert('article title, desc and catagory required');
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "publishArticle" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: (edit === true) ? 'edit article' : 'new article' }), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)("label", { children: "title" }), (0, jsx_runtime_1.jsx)("input", { type: 'text', id: 'articleTitle', defaultValue: article.title, required: true }), (0, jsx_runtime_1.jsx)("label", { children: "description" }), (0, jsx_runtime_1.jsx)("textarea", { id: 'articleDesc', defaultValue: article.desc, required: true, rows: 4 }), (0, jsx_runtime_1.jsx)("label", { children: "catagory" }), (0, jsx_runtime_1.jsx)("input", { type: 'text', id: 'articleCatagory', defaultValue: article.catagory, required: true }), (0, jsx_runtime_1.jsx)("label", { children: "image" }), (0, jsx_runtime_1.jsx)("input", { type: 'file', id: "img", onChange: handleFile }), (0, jsx_runtime_1.jsx)("button", { children: "submit" })] }))] })));
};
exports.default = PublishArticle;
