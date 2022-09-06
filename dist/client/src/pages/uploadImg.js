"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable jsx-a11y/alt-text */
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
let U = () => {
    let [image, setImage] = (0, react_1.useState)({});
    let handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        let i = image;
        let formData = new FormData();
        //Adding files to the formdata
        formData.append("image", i);
        yield axios_1.default.post('http://localhost:8080/api/images', formData, { headers: {
                'Content-Type': 'multipart/form-data'
            } });
    });
    let handleFile = (e) => {
        setImage(e.target.files[0]);
    };
    return ((0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)("input", { type: 'file', id: "img", onChange: handleFile }), (0, jsx_runtime_1.jsx)("button", { children: "submit" })] })));
};
exports.default = U;
