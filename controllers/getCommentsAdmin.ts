import commentType from "../interfaces/commentType";
import Comment from "../models/comment";
import { Request, Response } from 'express';


let getCommentsAdmin = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let comments : commentType[] = await Comment.find().populate('user') as commentType[];

        res.status(200).send(comments);

    } catch (e: any) {

        res.status(500).send(e);

    } 

}

export default getCommentsAdmin;