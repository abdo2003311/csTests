import commentType from "./commentType";
import imageType from "./imageType";
import userType from "./userType";

type articleType = {
    title : string;
    desc : string;
    createdAt : string;
    catagory : string;
    image : imageType | string;
    comments : commentType[] | string[];
    publisher? : userType | string
    _id : string;
}

export default articleType;