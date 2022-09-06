"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let date = new Date();
let postSchema = new mongoose_1.Schema({
    title: String,
    desc: String,
    catagory: String,
    createdAt: {
        type: String,
        default: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }
});
let Post = (0, mongoose_1.model)('Post', postSchema);
exports.default = Post;
