import questionType from "../../interfaces/questionType";
import Answer from "./Answer";

let Question = (props: 
    { 
        question: questionType; 
        degree: { data : number }; 
        questionDegree : number; 
    }) : JSX.Element => {

    let { degree, questionDegree } = props;

    let { title, desc, answers, correct } = props.question;

    let id : string = `question${Math.random() * 10000}`;

    return (
        <div className="question">
            <header>
                <h2>{title}</h2>
            </header>
            <p>{desc}</p>
            
            {
                answers.map((answer: { desc: any; }) => 
                <Answer 
                    desc           = {answer.desc}
                    order          = {answers.indexOf(answer)}
                    correct        = {correct}
                    key            = {Math.random() * 10000}
                    degree         = {degree}
                    questionId     = {id}
                    questionDegree = {questionDegree}
                />)
            }
        </div>
    )
}

export default Question;