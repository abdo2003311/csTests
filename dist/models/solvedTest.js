"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let solvedTestSchema = new mongoose_1.Schema({
    test: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'Test',
        required: true
    },
    user: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    degree: {
        type: String,
        required: true,
        min: 0,
        max: 100
    },
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
});
let SolvedTest = (0, mongoose_1.model)('SolvedTest', solvedTestSchema);
exports.default = SolvedTest;
