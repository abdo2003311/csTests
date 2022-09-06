import userType from '../interfaces/userType';
import User from '../models/user';
import { Request, Response } from 'express';

let updateUser = async (
    req : Request,
    res : Response
    ) : Promise<string> => {

    try {

        let { userName } = req.params;

        let { newUserName, newPassword, newEmail } = req.body;
        
        // cheking if this username Already exsits

        let findUserByUserName : userType = await User.findOne({
            userName : newUserName
        }) as userType;

        if (findUserByUserName) {
    
            res.status(400).send('this username already exits!');
            
            return '';

        }

        // cheking if this email Already exsits
    
        let findUserByEmail : userType = await User.findOne({
            email : newEmail
        }) as userType;
    
        
        if (findUserByEmail) {
    
            res.status(400).send('this email already exits!');
    
            return '';

        }
    
        let user : userType = await User.findOne({
            userName : userName
        }) as userType;

        if (!user) {
            res.status(404).send('user not found !');
        }

        user.userName = newUserName;
        user.password = newPassword;
        user.email = newEmail;
        
        await user.save();

        res.status(200).send('ok !');
            
        return '';

    } catch (e) {

        res.status(500).send(e);

        return '';

    }
    

}

export default updateUser;