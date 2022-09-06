"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let date = new Date();
let userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 19,
        match: /[0-9]/
    },
    password: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 19
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'Image',
        required: true
    },
    createdAt: {
        type: String,
        default: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    },
    solvedTests: [{
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: 'SolvedTest',
            required: true
        }],
    comments: [{
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: 'Comment',
            required: true
        }],
    publishedTests: [{
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: 'Test',
            required: true
        }],
    publishedArticles: [{
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: 'Article',
            required: true
        }]
});
let User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
