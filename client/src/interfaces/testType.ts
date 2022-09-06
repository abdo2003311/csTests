import questionType from './questionType';
import userType from './userType';

type testType = {
    title : string,
    desc : string,
    createdAt : string,
    questions : questionType[],
    publisher? : userType | string,
    solvedBy : userType[],
    _id : string
};

export default testType;