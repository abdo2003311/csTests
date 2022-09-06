"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const __1 = require("..");
let adminAuthentication = (req, res) => {
    let { userName, password } = req.body;
    if (userName == 'abdo20033110'
        &&
            password == 'AdminPassword.com') {
        var token = (0, jsonwebtoken_1.sign)({
            userName: 'abdo20033110',
        }, __1.PRIVATEKEY);
        res.status(200).send({ token: token });
    }
    else
        res.status(400).send('err');
};
exports.default = adminAuthentication;
