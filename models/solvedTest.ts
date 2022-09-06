import { Schema, SchemaTypes, Model, model } from 'mongoose';
import solvedTestType from '../interfaces/solvedTestType';

let solvedTestSchema = new Schema({
    test : {
        type : SchemaTypes.ObjectId,
        ref : 'Test',
        required : true
    },
    user : {
        type : SchemaTypes.ObjectId,
        ref : 'User',
        required : true
    },
    degree : {
        type : String,
        required : true,
        min : 0,
        max : 100
    },
    title : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 50
    }
});

let SolvedTest : Model<solvedTestType> = model('SolvedTest', solvedTestSchema);

export default SolvedTest;