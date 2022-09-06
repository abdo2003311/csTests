import questionType from "../interfaces/questionType";
import testType from "../interfaces/testType";
import Question from "../models/question";
import Test from "../models/testModel";
import { Request, Response } from 'express';


let updateTest = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let { id } = req.params;

        let { title, desc, questions } = req.body;    

        let test : testType = await Test.findById(id) as testType;

        test.title = title;
        test.desc = desc;
    
        // deleting the old questions

        for (let i = 0; i < test.questions.length; i++) {
            await Question.findByIdAndDelete(test.questions[i])            
        }
        
        test.questions = [];
    
        // creating new questions

        for (let i = 0; i < questions.length; i++) {
    
            let q = await Question.create({
                title : questions[i].title,
                desc : questions[i].desc,
                answers : questions[i].answers,
                correct : questions[i].correct
            });
    
            test.questions.push(q._id as any);
    
        }
    
        await test.save();
    
        res.status(200).send('ok');
        
    } catch (e) {

        res.status(500).send('err !');

    }

}

export default updateTest;