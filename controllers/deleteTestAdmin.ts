import testType from "../interfaces/testType";
import questionType from "../interfaces/questionType";
import userType from "../interfaces/userType";
import Question from "../models/question";
import Test from "../models/testModel";
import User from "../models/user";
import SolvedTest from "../models/solvedTest";
import { Request, Response } from 'express';
import solvedTestType from "../interfaces/solvedTestType";

let deleteTestAdmin = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let { id } = req.params;
        
        // get test

        let test : testType = await Test.findById(id).populate('solvedBy') as testType;

        // delete questions from db

        for (let i = 0; i < test.questions.length; i++) {
            await Question.findByIdAndDelete((test.questions[i] as questionType)._id);
        }

        let userId : userType = test.publisher;

        // get user who published the test

        let user : userType = await User.findById(userId) as userType;

        // delete the test from user`s published tests

        user.publishedTests.splice((user.publishedTests as string[]).indexOf(id as string), 1);

        await user.save();

        // get users who solved the test

        for (let i = 0; i < test.solvedBy.length; i++) {
            
            let user : userType = await User.findById((test.solvedBy[i] as userType)._id) as userType;

            // delete the solvedTest from the user

            let solvedTest : solvedTestType = await SolvedTest.findOne({
                test : test._id
            }) as solvedTestType;

            user.solvedTests.splice((user.solvedTests as string[]).indexOf(solvedTest._id), 1);

            await user.save();

            // delete solvedTest from db

            await SolvedTest.findOneAndDelete({
                test : test._id
            });

        }

        // delete test from db

        await Test.findByIdAndDelete(id);

        res.status(200).send('ok!');

    } catch (e) {

        res.status(500).send(e);

    }

}

export default deleteTestAdmin;