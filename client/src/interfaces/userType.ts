import articleType from "./articleType";
import commentType from "./commentType";
import imageType from "./imageType";
import solvedTestType from "./solvedTestType";
import testType from "./testType";

type userType = {
    userName : string,
    password : string,
    email : string,
    image : imageType,
    createdAt : string,
    solvedTests : solvedTestType[],
    _id : string,
    publishedTests : testType[] | string[],
    publishedArticles : articleType[] | string[],
    comments : commentType[] | string[]
};

export default userType;