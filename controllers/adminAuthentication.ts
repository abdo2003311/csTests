import { sign } from 'jsonwebtoken';
import { PRIVATEKEY } from '..';
import { Request, Response } from 'express';

let adminAuthentication = (
    req: Request,
    res: Response
    ) => {

    let { userName, password } = req.body;

    if (userName == 'abdo20033110'
                    &&
        password == 'AdminPassword.com') {
        
        var token : string = sign({

            userName : 'abdo20033110',
            
        },
        PRIVATEKEY);

        res.status(200).send({ token : token });

    } else res.status(400).send('err');

}

export default adminAuthentication;