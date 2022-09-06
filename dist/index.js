"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.PRIVATEKEY = exports.app = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 8080;
exports.PORT = PORT;
const DATABASE = process.env.DATABASE || "";
const PRIVATEKEY = process.env.PRIVATEKEY || "";
exports.PRIVATEKEY = PRIVATEKEY;
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT);
}
mongoose_1.default.connect(DATABASE);
// routes
const express_2 = require("express");
app.use((0, express_2.urlencoded)({ extended: false }), (0, express_2.json)());
app.use(express_1.default.static('uploads'));
const articleRouter_1 = __importDefault(require("./routes/articleRouter"));
const testRouter_1 = __importDefault(require("./routes/testRouter"));
const adminRouter_1 = __importDefault(require("./routes/adminRouter"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const uploadImage_1 = __importStar(require("./controllers/uploadImage"));
app.post('/uploadImage/', uploadImage_1.default.single('image'), uploadImage_1.respondeWithImageName);
app.use('/admin', adminRouter_1.default);
app.use('/api/users', userRouter_1.default);
app.use('/api/articles', articleRouter_1.default);
app.use('/api/tests', testRouter_1.default);
