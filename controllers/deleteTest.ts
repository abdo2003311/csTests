import questionType from "../interfaces/questionType";
import testType from "../interfaces/testType";
import userType from "../interfaces/userType";
import Question from "../models/question";
import SolvedTest from "../models/solvedTest";
import Test from "../models/testModel";
import User from "../models/user";
import { Request, Response } from 'express';
import solvedTestType from "../interfaces/solvedTestType";

let deleteTest = async (
    req: Request, 
    res: Response
    ) : Promise<void> => {

    let { id, userName } = req.params;
    
    try {

        // get user

        let user = await User.findOne({
            userName : userName
        }) as userType;

        // check if the test belong to the user
    
        if ((user.publishedTests as string[]).indexOf(id as string) > -1) {
            
            // delete the test from the user`s tests

            user.publishedTests.splice((user.publishedTests as string[]).indexOf(id as string), 1);
    
            await user.save();
        
            // get the test

            let test : testType = await Test.findById(id).populate('solvedBy') as testType;

            // delete questions from db

            for (let i = 0; i < test.questions.length; i++) {
                await Question.findByIdAndDelete((test.questions[i] as questionType)._id);
            }

            // get the users who solved the the test

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
        
            res.status(200).send('done !');

        } else res.status(400).send('err'); 



    } catch(e : any) {

        res.status(500).send(e);

    }


}

export default deleteTest;