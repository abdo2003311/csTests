import solvedTestType from "../interfaces/solvedTestType";
import testType from "../interfaces/testType";
import userType from "../interfaces/userType";
import SolvedTest from "../models/solvedTest";
import Test from "../models/testModel";
import User from "../models/user";
import { Request, Response } from 'express';

let solveTest = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {
        
        let { userName, id } = req.params;
        let { degree }   = req.body;

        // getting the solved test

        let test : testType = await Test.findById(id) as testType;
        
        // getting the user who solved the test

        let user : userType = await User.findOne({
            userName : userName
        }) as userType;
    
        // pushing the user who solved the test to the test`s solvedBy array

        (test.solvedBy as userType[]).push(user);

        await test.save();
    
        // creating solved test

        let solvedTest : solvedTestType = await SolvedTest.create({
            test : test,
            user : user,
            degree : Number(degree),
            title : test.title
        }) as solvedTestType;

        // pushing the solved test to the user`s (who solved the test) solved tests array

        (user.solvedTests as solvedTestType[]).push(solvedTest);
    
        await user.save();

        res.status(200).send('done !');

    } catch (e) {

        res.status(500).send(e)

    }



}

export default solveTest;