"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let imageSchema = new mongoose_1.Schema({
    src: {
        type: String,
        required: true
    }
});
let Image = (0, mongoose_1.model)('Image', imageSchema);
exports.default = Image;
