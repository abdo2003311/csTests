import userType from "../interfaces/userType";
import User from "../models/user";
import { Request, Response } from 'express';

let getUser = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let { userName } = req.params;

        let user : userType[] | null = await User.findOne({
    
            userName : userName
    
        }).populate('image').populate('solvedTests');
        
        res.status(200).send(user);

    } catch (e : any) {

        res.status(500).send(e);

    }


}

export default getUser;