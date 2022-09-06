"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let date = new Date();
let articleSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    desc: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    publisher: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    comments: [{
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: 'Comment',
            required: true
        }],
    image: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'Image',
        required: true
    },
    createdAt: {
        type: String,
        required: true,
        default: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
    }
});
let Article = (0, mongoose_1.model)('Article', articleSchema);
exports.default = Article;
