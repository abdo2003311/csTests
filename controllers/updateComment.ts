import commentType from "../interfaces/commentType";
import Comment from "../models/comment";
import { Request, Response } from 'express';


let updateComment = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let { id } = req.params;

        let { desc } = req.body;

        let comment : commentType = await Comment.findById(id) as commentType;

        comment.desc = desc;
        
        await comment.save();
    
        res.status(200).send(comment);

    } catch (e) {

        res.status(500).send('not updated !');

    }


}

export default updateComment;