import { PRIVATEKEY } from '..';
import { verify } from "jsonwebtoken";
import { Request, Response } from 'express';


let verfiyAdmin = (
    req : Request,
    res : Response
    ) : void => {

    let { accesstoken } = req.headers;
    
    verify(accesstoken as string,
        PRIVATEKEY,
        (err: any, decoded : any) => {
        if (err) res.status(403).send('unAuthoraized');
        else if (decoded.userName == 'abdo20033110') res.status(200).send('Authoraized');
        else res.status(403).send('unAuthoraized');
    });
    
}

export default verfiyAdmin;