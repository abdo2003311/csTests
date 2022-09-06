import { Schema, model, Model, SchemaTypes } from 'mongoose';
import userType from '../interfaces/userType';

let date : Date = new Date();

let userSchema = new Schema({
    userName : {
        type : String,
        required : true,
        minlength : 9,
        maxlength : 19,
        match : /[0-9]/
    },
    password : {
        type : String,
        required : true,
        minlength : 9,
        maxlength : 19
    },
    email : {
        type : String,
        required : true
    },
    image : {
        type : SchemaTypes.ObjectId,
        ref : 'Image',
        required : true
    },
    createdAt : {
        type : String,
        default : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    },
    solvedTests : [{
        type : SchemaTypes.ObjectId,
        ref : 'SolvedTest',
        required : true
    }],
    comments : [{
        type : SchemaTypes.ObjectId,
        ref : 'Comment',
        required : true
    }],
    publishedTests : [{
        type : SchemaTypes.ObjectId,
        ref : 'Test',
        required : true
    }],
    publishedArticles : [{
        type : SchemaTypes.ObjectId,
        ref : 'Article',
        required : true
    }] 
});

let User : Model<userType> = model('User', userSchema);

export default User;