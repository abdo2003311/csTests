"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const getAndSetTest_1 = __importDefault(require("../functions/getAndSetTest"));
const react_1 = require("react");
const PublishOrUpdateTest_1 = __importDefault(require("../components/js/PublishOrUpdateTest"));
let EditTestPage = (props) => {
    let { headers, userName } = props;
    let { id } = (0, react_router_dom_1.useParams)();
    let [test, setTest] = (0, react_1.useState)({
        title: '',
        desc: '',
        createdAt: '',
        questions: [],
        _id: '',
        solvedBy: []
    });
    (0, getAndSetTest_1.default)(test, setTest, id);
    return ((0, jsx_runtime_1.jsx)(PublishOrUpdateTest_1.default, { upadte: true, id: id, headers: headers, test: test, userName: userName }));
};
exports.default = EditTestPage;
