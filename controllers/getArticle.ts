import articleType from "../interfaces/articleType";
import Article from "../models/article";
import { Request, Response } from 'express';

let getArticle = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let { id } = req.params;

        let article : articleType = await Article.findById(id).populate('image').populate('comments') as articleType;
    
        res.status(200).send(article);

    } catch(e : any) {

        res.status(500).send(e)

    }



}

export default getArticle;