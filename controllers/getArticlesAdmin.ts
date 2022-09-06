import articleType from "../interfaces/articleType";
import userType from "../interfaces/userType";
import Article from "../models/article";
import { Request, Response } from 'express';

let getArticlesAdmin = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let articles : articleType[] = await Article.find().populate('publisher') as articleType[];
        
        res.status(200).send(articles.map((article) => {

            let { userName } = article.publisher as userType;

            return {
                title : article.title,
                createdAt : article.createdAt,
                desc : article.desc,
                publisher : userName,
                _id : article._id,
                comments : article.comments
            }
        }
        ));

    } catch (e : any) {
        
        res.status(500).send(e)

    }

}

export default getArticlesAdmin;