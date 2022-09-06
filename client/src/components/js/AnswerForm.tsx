import answerType from "../../interfaces/answerType";
import questionType from "../../interfaces/questionType";

let AnswerForm = (props:
    { 
        order: number;
        desc: string; 
        answers: answerType[]; 
        setQuestions: (arg : { data : questionType[] }) => void; 
        allQuestions: questionType[]; 
    }) : JSX.Element => {

    let { order, desc, answers, setQuestions, allQuestions } = props;

    let id = Math.random() * 100000;

    let handleInput = () => {
        answers[order].desc = (document.getElementById(`answerDesc${id}`) as HTMLInputElement).value;
    }

    let handleDelete = () => {

        answers.splice(order, 1);
        
        setQuestions({data : allQuestions});
        
    }

    return (
        <div className="questionForm">
            <header>
                <h3>answer number {order + 1}</h3>
                <i className="bi bi-x-lg" onClick={handleDelete}></i>
            </header>
            <label>description</label>
            <input type='text' id={`answerDesc${id}`}  defaultValue={desc} onInput={handleInput} required/>
        </div>
    )
}

export default AnswerForm;