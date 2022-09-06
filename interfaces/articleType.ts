import commentType from "./commentType";
import userType from "./userType";
import { Document } from 'mongoose'

interface articleType extends Document {
    title : string,
    desc : string,
    catagory : string,
    createdAt : string,
    comments : commentType[] | string[],
    image : string,
    publisher : userType,
}

export default articleType;