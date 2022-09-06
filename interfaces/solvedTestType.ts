import testType from "./testType";
import userType from "./userType";
import { Document } from 'mongoose';

interface solvedTestType extends Document {
    test : testType,
    user : userType,
    degree : number,
    title : string,
}

export default solvedTestType;