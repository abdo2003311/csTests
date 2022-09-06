"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let date = new Date();
let testSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    desc: {
        type: String,
        required: true,
        minlength: 3,
    },
    createdAt: {
        type: String,
        default: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    },
    questions: [{
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: 'Question',
            required: true
        }],
    publisher: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    solvedBy: [{
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: 'User',
            required: true
        }]
});
let Test = (0, mongoose_1.model)('Test', testSchema);
exports.default = Test;
