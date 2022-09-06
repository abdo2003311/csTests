import articleType from "../interfaces/articleType";
import commentType from "../interfaces/commentType";
import questionType from "../interfaces/questionType";
import solvedTestType from "../interfaces/solvedTestType";
import testType from "../interfaces/testType";
import userType from "../interfaces/userType";
import Article from "../models/article";
import Comment from "../models/comment";
import Question from "../models/question";
import SolvedTest from "../models/solvedTest";
import Test from "../models/testModel";
import User from "../models/user";
import { Request, Response } from 'express';

let deleteUser = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {
        let { userName } = req.params;

        let user : userType = await User.findOne({
            userName : userName
        }).populate('solvedTests') as userType;

        // deleting comments

        for (let i = 0; i < user.comments.length; i++) {

            let article : articleType = await Article.findById((user.comments[i] as commentType).article) as articleType;

            article.comments.splice((article.comments as commentType[]).indexOf(user.comments[i] as commentType, 1))

            await article.save();

            await Comment.findByIdAndDelete((user.comments[i] as commentType)._id);

        }

        // deleting Articles

        for (let i = 0; i < user.publishedArticles.length; i++) {
            
            let article : articleType = await Article.findById(user.publishedArticles[i]).populate('comments') as articleType;

            for (let j = 0; j < article.comments.length; j++) {

                let user : userType = await User.findById((article.comments[j] as commentType).user) as userType;

                user.comments.splice((user.comments as commentType[]).indexOf(article.comments[j] as commentType), 1);

                await user.save();

                await Comment.findByIdAndDelete((article.comments[j] as commentType)._id);

            }

            await Article.findByIdAndDelete(user.publishedArticles[i]);

        }

        // deleting solved Tests data 

        user = await User.findOne({
            userName : userName
        }).populate('solvedTests') as userType;


        for (let i = 0; i < user.solvedTests.length; i++) {
            
            let test : testType = await Test.findById((user.solvedTests[i] as solvedTestType).test) as testType;
            
            test.solvedBy.splice((test.solvedBy as string[]).indexOf(user._id as string), 1)

            await Test.findOneAndUpdate({ _id : test._id }, {
                solvedBy : test.solvedBy
            });

            await SolvedTest.findByIdAndDelete(user.solvedTests[i]);
            
        }

        // deleting Tests

        for (let i = 0; i < user.publishedTests.length; i++) {
            
            let test : testType = await Test.findById(user.publishedTests[i]).populate('questions') as testType;

            for (let j = 0; j < test.questions.length; j++) {
                await Question.findByIdAndDelete((test.questions[j] as questionType)._id);
            }

            await Test.findByIdAndDelete(user.publishedTests[i]);
            
        }

        // deleting User

        await User.findOneAndDelete({
            userName : userName
        });

        res.status(200).send('done !');

    } catch(e: any) {

        res.status(500).send(e);

    }

}

export default deleteUser;