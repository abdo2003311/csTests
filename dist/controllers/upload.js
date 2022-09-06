"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var multer = require('multer');
var storage = multer.diskStorage({
    destination: '../../uploads',
    filename: `file`
});
var upload = multer({ storage: storage });
exports.default = upload;
