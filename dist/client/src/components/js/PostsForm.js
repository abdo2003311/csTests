"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const getAndSetPosts_1 = __importDefault(require("../../functions/getAndSetPosts"));
let PostsForm = (props) => {
    let { edit, headers, id } = props;
    let [post, setPost] = (0, react_1.useState)({
        title: '',
        desc: '',
        catagory: ''
    });
    if (edit === true) {
        (0, getAndSetPosts_1.default)(post, setPost);
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        let postTitle = document.getElementById('postTitle').value;
        let postDesc = document.getElementById('postDesc').value;
        let postCatagory = document.getElementById('postCatagory').value;
        if (postTitle.length && postDesc.length && postCatagory.length) {
            if (edit === true) {
                axios_1.default.put(`http://localhost:8080/api/posts/${id}`, {
                    title: postTitle,
                    desc: postDesc,
                    catagory: postCatagory,
                }, headers);
            }
            else {
                axios_1.default.post('http://localhost:8080/api/posts', {
                    title: postTitle,
                    desc: postDesc,
                    catagory: postCatagory,
                }, headers);
            }
        }
        else {
            alert('post title, desc and catagory required');
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "postsForm" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: (edit === true) ? 'edit post' : 'new post' }), (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)("input", { type: 'text', id: 'postTitle', placeholder: 'title', defaultValue: post.title, required: true }), (0, jsx_runtime_1.jsx)("input", { type: 'text', id: 'postDesc', placeholder: 'desc', defaultValue: post.desc, required: true }), (0, jsx_runtime_1.jsx)("input", { type: 'text', id: 'postCatagory', placeholder: 'catagory', defaultValue: post.catagory, required: true }), (0, jsx_runtime_1.jsx)("button", { children: "submit" })] }))] })));
};
exports.default = PostsForm;
