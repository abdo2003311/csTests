import imageType from "../client/src/interfaces/imageType";
import articleType from "../interfaces/articleType";
import commentType from "../interfaces/commentType";
import solvedTestType from "../interfaces/solvedTestType";
import testType from "../interfaces/testType";
import userType from "../interfaces/userType";
import User from "../models/user";
import { Request, Response } from 'express';

let getUsersAdmin = async(
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let users : userType[] = await User.find().populate('image') as userType[];

        res.status(200).send(users.map((user) => {
            return {
                userName : user.userName,
                email : user.email,
                comments : user.comments,
                publishedArticles : user.publishedArticles,
                publishedTests : user.publishedTests,
                createdAt : user.createdAt,
                image : user.image,
                _id : user._id,
                solvedTests : (user.solvedTests as solvedTestType[])
            }
        }));

    } catch (e : any) {
        
        res.status(500).send(e)

    }

}

export default getUsersAdmin;