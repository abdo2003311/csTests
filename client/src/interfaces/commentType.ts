import userType from "./userType";

type commentType = {
    _id : string,
    desc : string
    user : userType,
    createdAt : string
}

export default commentType;