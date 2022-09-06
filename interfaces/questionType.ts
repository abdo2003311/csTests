import { Document } from 'mongoose';

interface questionType extends Document {
    title : string,
    desc : string,
    answers : {
        desc : string
    }[],
    correct : number,
};

export default questionType;

