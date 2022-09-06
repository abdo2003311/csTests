import { PORT } from "..";
import articleType from "../interfaces/articleType";
import Article from "../models/article";
import Image from "../models/image";
import { Request, Response } from 'express';

let updateArticle = async (
    req : Request,
    res : Response
    ) : Promise<void> => {

    try {

        let { id } = req.params;

        let { title, desc, catagory, imageName } = req.body;    

        // creating the image

        let image = await Image.create({
            src : `http://localhost:${PORT}/${imageName}`
        });

        // getting the artilce 

        let article : articleType = await Article.findById(id) as articleType;

        article.title = title;
        article.desc = desc;
        article.catagory = catagory
        article.image = image;
        
        await article.save();
    
        res.status(200).send('ok !');

    } catch (e) {

        res.status(500).send('not updated !');

    }


}

export default updateArticle;