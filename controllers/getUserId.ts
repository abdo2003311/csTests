import userType from "../interfaces/userType";
import User from "../models/user";
import { Request, Response } from 'express';

/* 
    this controller is used for comments in
    the front end to check if the user is the 
    one who commented
 */
let getUserId = async (
    req : Request,
    res : Response
    ) : Promise<void> => {


        try {

            let { userName } = req.params;

            let user = await User.findOne({
                userName : userName
            }) as userType;

            res.status(200).send(user._id as any);

        } catch (e : any) {

            res.status(500).send(e)

        }

    }

export default getUserId;