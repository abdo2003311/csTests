import testType from "../interfaces/testType";
import Test from "../models/testModel";
import { Request, Response } from 'express';

let getTest = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let { id } = req.params;

        let test : testType = await Test.findById(id).populate('questions') as testType;
    
        res.status(200).send(test);

    } catch (e : any) {

        res.status(500).send(e);

    }


}

export default getTest;