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
const react_1 = require("react");
const getAndSetTest_1 = __importDefault(require("../../functions/getAndSetTest"));
let DashboardTestView = (props) => {
    let { headers, userName, testId } = props;
    let [test, setTest] = (0, react_1.useState)({
        title: '',
        _id: '',
        createdAt: '',
        desc: '',
        questions: []
    });
    let { title, _id, createdAt, desc } = test;
    let handleDelete = () => __awaiter(void 0, void 0, void 0, function* () {
        yield axios_1.default.delete(`http://localhost:8080/api/tests/${testId}/${userName}`, headers);
    });
    (0, getAndSetTest_1.default)(test, setTest, testId);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "dashboardTestView" }, { children: [(0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)("span", { children: title }), (0, jsx_runtime_1.jsx)("i", { className: "bi bi-x-lg", onClick: handleDelete })] }), (0, jsx_runtime_1.jsx)("span", { children: createdAt }), (0, jsx_runtime_1.jsx)("span", { children: desc }), (0, jsx_runtime_1.jsx)("a", Object.assign({ href: `http://localhost:3000/dashboard/tests/${_id}` }, { children: "Edit" }))] })));
};
exports.default = DashboardTestView;
