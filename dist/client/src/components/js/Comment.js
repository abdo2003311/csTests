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
const getAndSetPublicUser_1 = __importDefault(require("../../functions/getAndSetPublicUser"));
let Comment = (props) => {
    let { desc, createdAt, _id } = props.comment;
    let { thisUserId, userName, headers } = props;
    let commentUserId = props.comment.user;
    let [user, setUser] = (0, react_1.useState)({
        userName: '...',
        image: {
            src: ''
        }
    });
    (0, getAndSetPublicUser_1.default)(user, setUser, commentUserId, {});
    let handleDelete = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        yield axios_1.default.delete(`http://localhost:8080/api/articles/${_id}/deleteComment/${userName}`, headers);
        window.location.reload();
    });
    let handleViewUpdateForm = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        let updateCommentSection = document.getElementById(`updateCommentSection${_id}`);
        updateCommentSection.classList.toggle('active');
    });
    let handleUpdate = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        let updateCommentDesc = document.getElementById(`updateCommentDesc${_id}`);
        yield axios_1.default.put(`http://localhost:8080/api/articles/${_id}/updateComment/${userName}`, {
            desc: updateCommentDesc.value
        }, headers);
        window.location.reload();
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "comment" }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("img", { src: user.image.src, alt: 'nothing' }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "userName" }, { children: user.userName })), (commentUserId === thisUserId) ?
                        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("i", { className: "bi bi-trash", onClick: handleDelete }), (0, jsx_runtime_1.jsx)("i", { className: "bi bi-pen", onClick: handleViewUpdateForm })] }) : ''] }), (0, jsx_runtime_1.jsx)("p", { children: desc }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "createdAt" }, { children: createdAt })), (0, jsx_runtime_1.jsxs)("form", Object.assign({ id: `updateCommentSection${_id}`, className: 'updateCommentSection' }, { children: [(0, jsx_runtime_1.jsx)("label", { children: "update comment" }), (0, jsx_runtime_1.jsx)("textarea", { id: `updateCommentDesc${_id}`, rows: 4 }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleUpdate }, { children: "submit" }))] }))] })));
};
exports.default = Comment;
