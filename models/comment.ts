import { Schema, SchemaTypes, Model, model } from 'mongoose';
import commentType from '../interfaces/commentType';

let date : Date = new Date();

let commentSchema = new Schema({
    user : {
        type : SchemaTypes.ObjectId,
        ref : 'User',
        required : true
    },
    article : {
        type : SchemaTypes.ObjectId,
        ref : 'Article',
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    createdAt : {
        type : String,
        default : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }
});

let Comment : Model<commentType> = model('Comment', commentSchema);

export default Comment;