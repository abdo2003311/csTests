"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const jsonwebtoken_1 = require("jsonwebtoken");
let verfiyAdmin = (req, res) => {
    let { accesstoken } = req.headers;
    (0, jsonwebtoken_1.verify)(accesstoken, __1.PRIVATEKEY, (err, decoded) => {
        if (err)
            res.status(403).send('unAuthoraized');
        else if (decoded.userName == 'abdo20033110')
            res.status(200).send('Authoraized');
        else
            res.status(403).send('unAuthoraized');
    });
};
exports.default = verfiyAdmin;
