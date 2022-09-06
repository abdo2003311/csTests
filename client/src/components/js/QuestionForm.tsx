import { useState } from 'react';
import questionType from '../../interfaces/questionType';
import AnswerForm from './AnswerForm';

let QuestionForm = (props: 
    {
        question : questionType; 
        order : number; 
        allQuestions : questionType[]; 
        setQuestions : (arg : { data : questionType[] }) => void; 
    }) : JSX.Element => {

    let { order, allQuestions, setQuestions } = props;
    let { title, desc, correct, answers } = props.question;

    let [, updateComponent] = useState({ data : 1 });

    let id = Math.random() * 100000;

    let handleInput = () => {
        allQuestions[order].title   = (document.getElementById(`questionTitle${id}`) as HTMLInputElement).value;
        allQuestions[order].desc    = (document.getElementById(`questionDesc${id}`) as HTMLInputElement).value;
        allQuestions[order].correct = Number((document.getElementById(`questionCorrect${id}`) as HTMLInputElement).value);
    }

    let handleNewAnswer = (e: { preventDefault: () => void; }) => {
        
        e.preventDefault();
        
        answers.push({
            desc : ''
        });

        updateComponent({ data : 1 });

    }

    let handleDelete = () => {
        
        allQuestions.splice(order, 1);
        
        setQuestions({ data : allQuestions });
    
    }

    return (
        <div className="questionForm">
            <header>
                <h3>question number {(order === -1)? '1' : order + 1}</h3>
                <i className="bi bi-x-lg" onClick={handleDelete}></i>
            </header>
            <label>title</label>
            <input type='text' id={`questionTitle${id}`} defaultValue={title} onInput={handleInput} required/>
            <label>description</label>
            <input type='text' id={`questionDesc${id}`} defaultValue={desc} onInput={handleInput} required/>
            Answer
            <input type='number' id={`questionCorrect${id}`} defaultValue={correct} onInput={handleInput} required/>
            <button onClick={handleNewAnswer}>new Answer</button>
            <div>
                {
                    answers.map((answer: { desc: any; }) => 
                            <AnswerForm 
                                answers       = {answers}
                                allQuestions  = {allQuestions}
                                order         = {answers.indexOf(answer)}
                                desc          = {answer.desc}
                                key           = {Math.random() * 100000}
                                setQuestions  = {setQuestions}
                            />
                    )
                }
            </div>
        </div>
    )
}

export default QuestionForm;