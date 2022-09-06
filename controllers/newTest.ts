import testType from "../interfaces/testType";
import userType from "../interfaces/userType";
import Question from "../models/question";
import Test from "../models/testModel";
import User from "../models/user";
import { Request, Response } from 'express';
import questionType from "../interfaces/questionType";

let newTest = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let { userName } = req.params;
        let { title, desc, questions } = req.body;
    
        // this array stores the ids of the created questions
    
        let createdQuestionsIds : string[] = [];
    
        for (let i = 0; i < questions.length; i++) {
    
            // creating a question
    
            let createdQuestion : questionType = await Question.create({
                title : questions[i].title,
                desc : questions[i].desc,
                answers : questions[i].answers,
                correct : questions[i].correct
            });
    
            // storing the question in the array
    
            let id : string = createdQuestion._id as string;
            createdQuestionsIds.push(id);
    
        }
    
        // get the publiser
    
        let user : userType = await User.findOne({ userName : userName }) as userType;
    
        // create the test
    
        let test : testType = await Test.create({
            title : title,
            desc : desc,
            questions : createdQuestionsIds,
            publisher : user
        });
    
        // pushing the test to the user`s published tests array  
    
        (user.publishedTests as testType[]).push(test);
    
        await user.save();
    
        res.status(200).send('done !');

    } catch(e : any) {

        res.status(500).send(e)

    }
 
}

export default newTest;