import articleType from "../interfaces/articleType";
import commentType from "../interfaces/commentType";
import userType from "../interfaces/userType";
import Article from "../models/article";
import Comment from "../models/comment";
import User from "../models/user";
import { Request, Response } from 'express';

let newComment = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let { userName } = req.params;

        let { desc } = req.body;

        let articleId : string = req.params.id;

        // get article

        let article : articleType = await Article.findOne({
            _id : articleId
        }) as articleType;

        // get user

        let user : userType = await User.findOne({
            userName : userName    
        }) as userType;

        // create comment

        let comment : commentType = await Comment.create({
            user : user._id,
            desc : desc,
            article : article._id
        });

        // pushing the comment to the user`s comments

        (user.comments as commentType[]).push(comment);

        // pushing the comment to the artilce`s comments

        (article.comments as commentType[]).push(comment);

        await user.save();
        await article.save();

        res.status(200).send('ok !');

    } catch (e: any) {

        res.status(500).send(e);

    }

}

export default newComment;