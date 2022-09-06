import { Schema, model, Model, SchemaTypes } from 'mongoose';
import articleType from '../interfaces/articleType';

let date : Date = new Date();

let articleSchema = new Schema({
    title : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 50
    },
    desc : {
        type : String,
        required : true
    },
    catagory : {
        type : String,
        required : true
    },
    publisher : {
        type : SchemaTypes.ObjectId,
        ref : 'User',
        required : true
    },
    comments : [{
        type : SchemaTypes.ObjectId,
        ref : 'Comment',
        required : true
    }],
    image : {
        type : SchemaTypes.ObjectId,
        ref : 'Image',
        required : true
    },
    createdAt : {
        type : String,
        required : true,
        default : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
    }
});

let Article : Model<articleType> = model('Article', articleSchema);

export default Article;