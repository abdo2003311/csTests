"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let questionSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    desc: {
        type: String,
        required: true,
        minlength: 3
    },
    answers: [{
            type: Object,
            required: true
        }],
    correct: {
        type: Number,
        required: true
    }
});
let Question = (0, mongoose_1.model)('Question', questionSchema);
exports.default = Question;
