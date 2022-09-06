import articleType from "../interfaces/articleType";
import userType from "../interfaces/userType";
import Article from "../models/article";
import Comment from "../models/comment";
import User from "../models/user";
import { Request, Response } from 'express';
import commentType from "../interfaces/commentType";

let deleteArticle = async (
    req: Request,
    res: Response
    ) : Promise<void> => {

    try {

        let { id, userName } = req.params;

        let user = await User.findOne({
            userName : userName
        }) as userType;

        if ((user.publishedArticles as string[]).indexOf(id as string) > -1) {
            
            let article : articleType = await Article.findById(id).populate('comments') as articleType;

            user.publishedArticles.splice((user.publishedArticles as string[]).indexOf(id as string), 1);
            
            await user.save();
    
            // deleting comments
    
            for (let i = 0; i < article.comments.length; i++) {

                let user : userType = await User.findById((article.comments[i] as commentType).user) as userType;
    
                user.comments.splice((user.comments as commentType[]).indexOf(article.comments[i] as commentType), 1);
    
                await user.save();
    
                await Comment.findByIdAndDelete((article.comments[i] as commentType)._id);
    
            }
        
            await Article.findByIdAndDelete(id);
    
            res.status(200).send('ok!');
        
        } 
       
    } catch(e : any) {

        res.status(500).send(e)

    }

}

export default deleteArticle;