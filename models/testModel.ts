import { Schema, model, Model, SchemaTypes } from 'mongoose';
import testType from '../interfaces/testType';

let date : Date = new Date();

let testSchema = new Schema({
    title : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 50
    },
    desc : {
        type : String,
        required : true,
        minlength : 3,
    },
    createdAt : {
        type : String,
        default : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    },
    questions : [{
        type : SchemaTypes.ObjectId,
        ref : 'Question',
        required : true
    }],
    publisher : {
        type : SchemaTypes.ObjectId,
        ref : 'User',
        required : true
    },
    solvedBy : [{
        type : SchemaTypes.ObjectId,
        ref : 'User',
        required : true
    }]
});

let Test : Model<testType> = model('Test', testSchema);

export default Test;