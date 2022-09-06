"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const PublishOrUpdateArticle_1 = __importDefault(require("../components/js/PublishOrUpdateArticle"));
let EditArticlePage = (props) => {
    let { headers, userName } = props;
    let { id } = (0, react_router_dom_1.useParams)();
    return ((0, jsx_runtime_1.jsx)(PublishOrUpdateArticle_1.default, { upadte: true, id: id, headers: headers, userName: userName }));
};
exports.default = EditArticlePage;
