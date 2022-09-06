import { PORT, PRIVATEKEY } from '..';
import User from '../models/user';
import { sign } from 'jsonwebtoken';
import userType from '../interfaces/userType';
import Image from "../models/image";
import { Request, Response } from 'express';

let newUser = async (
    req : Request,
    res : Response
    ) : Promise<string> => {
    
    try {

        let { userName, password, email, imageName } = req.body;

        // cheking if this username Already exsits

        let findUserByUserName : userType = await User.findOne({
            userName : userName
        }) as userType;
    
        if (findUserByUserName) {
    
            res.status(400).send('this username already exits!');
            
            return '';

        }

        // cheking if this email Already exsits

        let findUserByEmail : userType = await User.findOne({
            email : email
        }) as userType;
    
        if (findUserByEmail) {
    
            res.status(400).send('this email already exits!');
    
            return '';

        } 
        
        // creating image

        let image = await Image.create({
            src : `http://localhost:${PORT}/${imageName}`
        });

        // creating user

        let user : userType = await User.create({
            userName : userName,
            password : password,
            email : email,
            image : image
        });

        // generating access token

        let accesstoken : string = sign({
            id : user._id
        }, PRIVATEKEY);

        // sending the access token

        res.status(200).send(accesstoken);

        return '';

    } catch (e : any) {

        res.status(500).send(e);

        return '';

    }

    
}

export default newUser;