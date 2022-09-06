import answerType from "./answerType";


type questionType = {
    title : string,
    desc : string,
    correct : number,
    answers : answerType[]
}
export default questionType;