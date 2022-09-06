import articleType from "../interfaces/articleType";
import commentType from "../interfaces/commentType";
import userType from "../interfaces/userType";
import Article from "../models/article";
import Comment from "../models/comment";
import User from "../models/user";
import { Request, Response } from 'express';

let deleteComment = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    let { id, userName } = req.params;

    try {

        // get user

        let user : userType = await User.findOne({
            userName : userName
        }) as userType;

        // get comment

        let comment : commentType = await Comment.findOne({
            id : id
        }) as commentType;

        // check if the comment belong to the user

        if (user._id.toString() === comment.user.toString()) {

            // get the article

            let article : articleType = await Article.findById(comment.article).populate('comments') as articleType;

            // delete the comment from the article`s comments

            article.comments.splice((article.comments as commentType[]).indexOf(comment, 1))

            await article.save();

            // delete the comment from the user`s comments

            user.comments.splice(user.comments.indexOf(id as any), 1);

            await user.save();

            // delete comment

            await Comment.findByIdAndDelete(id);
            
            res.status(200).send('ok !');

        }

        else res.status(403).send('forbidden');

    } catch(e : any) {

        res.status(500).send(e)

    }

}

export default deleteComment;