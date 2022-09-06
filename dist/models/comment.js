"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let date = new Date();
let commentSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    article: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'Article',
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }
});
let Comment = (0, mongoose_1.model)('Comment', commentSchema);
exports.default = Comment;
