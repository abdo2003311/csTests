import userType from "../interfaces/userType";
import User from "../models/user";
import { Request, Response } from 'express';

let getPublicUser = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let { userId } = req.params;

        let user : userType = await User.findById(userId).populate('image') as userType;

        res.status(200).send({
            userName : user.userName,
            image : user.image,
        });

    } catch(e) {
        
        res.status(500).send(e)

    }

}

export default getPublicUser;