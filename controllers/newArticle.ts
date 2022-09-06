import { PORT } from "..";
import imageType from "../client/src/interfaces/imageType";
import articleType from "../interfaces/articleType";
import userType from "../interfaces/userType";
import Article from "../models/article";
import Image from "../models/image";
import User from "../models/user";
import { Request, Response } from 'express';

let newArticle = async (
    req : Request,
    res : Response
    ) : Promise<void> => {
    
    try {

        let { userName } = req.params;
        let { title, desc, catagory, imageName } = req.body;

        // get the publisher

        let user : userType = await User.findOne({
            userName : userName
        }) as userType;

        // get the image

        let image : imageType  = await Image.create({
            src : `http://localhost:${PORT}/${imageName}`
        });
    
        let article : articleType = await Article.create({
            title : title,
            desc : desc,
            catagory : catagory,
            image : image,
            publisher : user
        });

        // pushing the article in the publisher articles

        (user.publishedArticles as articleType[]).push(article);

        await user.save();

        res.status(200).send('ok');

    } catch(e : any) {

        res.status(500).send(e)

    }


}

export default newArticle;