"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Post_1 = __importDefault(require("../components/js/Post"));
const getAndSetPosts_1 = __importDefault(require("../functions/getAndSetPosts"));
let PostsPage = () => {
    let [posts, setPosts] = (0, react_1.useState)({ data: [{
                title: '',
                desc: '...',
                catagory: '...',
                createdAt: '...'
            }] });
    (0, getAndSetPosts_1.default)(posts, setPosts);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "postsPage" }, { children: posts.data.map(post => (0, jsx_runtime_1.jsx)(Post_1.default, { title: post.title, desc: post.desc, catagory: post.catagory, createdAt: post.createdAt }, Math.random() * 10000)) })));
};
exports.default = PostsPage;
