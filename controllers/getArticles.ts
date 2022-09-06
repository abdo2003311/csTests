import artiicleType from "../interfaces/articleType";
import Article from "../models/article";
import { Request, Response } from 'express';

let getArticles = async (
    req : Request,
    res : Response
    ) : Promise<void> => {
    
    try {

        let articles : artiicleType[] = await Article.find().populate('image');

        res.status(200).send(articles);

    } catch(e : any) {

        res.status(500).send(e);

    }


}

export default getArticles;