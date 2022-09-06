import { Schema, model, Model } from 'mongoose';
import questionType from '../client/src/interfaces/questionType';

let questionSchema = new Schema({
    title : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 50
    },
    desc : {
        type : String,
        required : true,
        minlength : 3
    },
    answers : [{
        type : Object,
        required : true
    }],
    correct : {
        type : Number,
        required : true
    }
});

let Question : Model<questionType> = model('Question', questionSchema);

export default Question;