"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const __1 = require("..");
let adminAuthorization = (req, res, next) => {
    let { accesstoken } = req.headers;
    (0, jsonwebtoken_1.verify)(accesstoken, __1.PRIVATEKEY, (err, decoded) => {
        if (err)
            res.status(403).send('unAuthoraized');
        else if (decoded.userName == 'abdo20033110')
            next();
        else
            res.status(403).send('unAuthoraized');
    });
};
exports.default = adminAuthorization;
