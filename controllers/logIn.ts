import { PRIVATEKEY } from '..';
import User from "../models/user";
import { sign } from 'jsonwebtoken';
import userType from '../interfaces/userType';
import { Request, Response } from 'express';

let logIn = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    let { email, password } = req.body;

    try {

        // get user

        let user : userType = await User.findOne({
            email : email,
            password : password
        }) as userType;
        
        // generate a token

        let accesstoken = sign({
            id : user._id
        }, PRIVATEKEY);

        res.status(200).send({
            accesstoken : accesstoken,
            userName : user.userName
        });

    } catch (e : any) {

        res.status(404).send(e);

    }


};


export default logIn;