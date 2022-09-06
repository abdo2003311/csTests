import testType from "../interfaces/testType";
import Test from "../models/testModel";
import { Request, Response } from 'express';

let getTestsAdmin = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let tests : testType[] = await Test.find().populate('publisher').populate('solvedBy') as testType[];

        res.status(200).send(tests.map((test) => {
            return {
                title : test.title,
                createdAt : test.createdAt,
                desc : test.desc,
                publisher : test.publisher.userName,
                _id : test._id,
                solvedBy : test.solvedBy
            }
        }
        ));

    } catch (e : any) {
        
        res.status(500).send(e)

    }

}

export default getTestsAdmin;