import { verify, JwtPayload } from "jsonwebtoken"; 
import { PRIVATEKEY } from "..";
import userType from "../interfaces/userType";
import User from '../models/user';
import { Request, Response } from 'express';

let userAuthoraize = async (
    req : Request,
    res : Response,
    next : () => void
    ) : Promise<void> => {

    let { userName } = req.params;
    
    let { accesstoken } = req.headers;

    verify(accesstoken as string, PRIVATEKEY, async (err, decoded) => {
        
        if (err) 
        {
            res.status(400).send('bad resquest');
            return '';
        }

        try {

            let user : userType = await User.findOne({
                userName : userName
            }) as userType;
            
            if (user) {

                if (user._id.toString() === (decoded as JwtPayload).id) next();
                else res.status(403).send('unAuthouraized');

            } else {

                res.status(404).send('NOT FOUND 404');

            }

    
        } catch (e : any) {

            res.status(500).send(e);

        }

    });
}

export default userAuthoraize;