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
const axios_1 = __importDefault(require("axios"));
let AdminDashboardTestView = (props) => {
    let { title, desc, createdAt, publisher, _id, solvedBy, } = props.test;
    let { headers } = props;
    let handleDelete = () => __awaiter(void 0, void 0, void 0, function* () {
        yield axios_1.default.delete(`http://localhost:8080/admin/tests/${_id}`, headers);
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "adminDashboardTestView" }, { children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "title" })), (0, jsx_runtime_1.jsx)("i", { className: "bi bi-x-lg", onClick: handleDelete })] }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "val" }, { children: title })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "publisher" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "val" }, { children: publisher })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "created at" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "val" }, { children: createdAt })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "desc" })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "val" }, { children: desc })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "key" }, { children: "solvedBy" })), solvedBy.map(ele => (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "val" }, { children: ele.userName })))] })));
};
exports.default = AdminDashboardTestView;
