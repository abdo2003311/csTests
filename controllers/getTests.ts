import testType from "../interfaces/testType";
import Test from "../models/testModel";
import { Request, Response } from 'express';

let getTests = async (
    req : Request,
    res : Response
    ) : Promise<void> => {
   
    try {

        let tests : testType[] = await Test.find().limit(10);

        res.status(200).send(tests);

    } catch (e : any) {

        res.status(500).send(e)

    } 

}

export default getTests;