"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.respondeWithImageName = void 0;
const multer_1 = __importDefault(require("multer"));
let generateName = () => {
    return `image-${Date.now()}.jpg`;
};
let name;
let storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        name = generateName();
        cb(null, name);
    }
});
let respondeWithImageName = (req, res) => { res.send(name); };
exports.respondeWithImageName = respondeWithImageName;
var upload = (0, multer_1.default)({ storage: storage });
exports.default = upload;
