import { verify } from 'jsonwebtoken';
import { PRIVATEKEY } from '..';
import { Request, Response } from 'express';

let adminAuthorization = (
    req : Request,
    res: Response,
    next: () => void
    ) : void => {

    let { accesstoken } = req.headers;
    
    verify(accesstoken as string,
        PRIVATEKEY,
        (err: any, decoded: any) => {
        if (err) res.status(403).send('unAuthoraized');
        else if (decoded.userName == 'abdo20033110') next();
        else res.status(403).send('unAuthoraized');
    });

}

export default adminAuthorization;