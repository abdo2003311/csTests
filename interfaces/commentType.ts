import articleType from "../client/src/interfaces/articleType";
import userType from "./userType";
import { Document } from 'mongoose';

interface commentType extends Document{
    desc : string,
    user : userType,
    article : articleType
    createdAt : string,
}

export default commentType;