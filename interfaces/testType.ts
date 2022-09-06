import questionType from './questionType';
import userType from './userType';
import { Document } from 'mongoose';

interface testType extends Document {
    title : string,
    desc : string,
    createdAt : string,
    questions : questionType[] | string[],
    publisher : userType,
    solvedBy : userType[] | string[],
};

export default testType;