import imageType from "../client/src/interfaces/imageType";
import articleType from "./articleType";
import commentType from "./commentType";
import solvedTestType from "./solvedTestType";
import testType from "./testType";
import { Document } from 'mongoose'

interface userType extends Document {
    userName : string,
    password : string,
    email : string,
    image : imageType,
    createdAt : string,
    solvedTests : solvedTestType[] | string[],
    publishedTests : testType[] | string[],
    publishedArticles : articleType[] | string[],
    comments : commentType[] | string[],
};

export default userType;