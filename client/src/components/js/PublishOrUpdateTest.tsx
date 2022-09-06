import axios from 'axios';
import { useState } from 'react';
import questionType from '../../interfaces/questionType';
import testType from '../../interfaces/testType';
import QuestionForm from './QuestionForm';

let data : questionType[] = [{
    title : '',
    desc  : '',
    correct : 1,
    answers : [{
        desc : ''
    }]
}];

let PublishOrUpdateTest = (props: 
    { 
        upadte: boolean; 
        headers: any; 
        id? : string; 
        test?: testType;
        userName : string
    }) : JSX.Element => {
    
    let { upadte , headers, id, test, userName } = props;

    let [questions, setQuestions] = useState({ data : data });

    if (test) {

        if (upadte === true && test.title !== '') {

            data = test.questions;
    
        }

    }


    let handleSubmit = async (e: { preventDefault: () => void; }) => {

        e.preventDefault();

        let testTitle : string = (document.getElementById('testTitle') as HTMLInputElement).value;
        let testDesc  : string = (document.getElementById('testDesc') as HTMLInputElement).value;

        if (testTitle.length && testDesc.length) {
            
            if (upadte === true) {

                await axios.put(`http://localhost:8080/api/tests/${id}/${userName}`, {
                    title : testTitle,
                    desc : testDesc,
                    questions : data
                }, headers);
    
            } else {
    
                await axios.post(`http://localhost:8080/api/tests/${userName}`, {
                    title : testTitle,
                    desc : testDesc,
                    questions : data
                }, headers);
    
            }

        } else {

            alert('test title and desc are required');

        }

        
    }

    let handleNewQuestion = (e: { preventDefault: () => void; }) => {

        e.preventDefault();

        data.push({
            title : '',
            desc  : '',
            correct : 1,
            answers : [{
                desc : ''
            }]
        });

        setQuestions({ data : data });

    }
    
    return (
        <div className="publishOrUpdateTest">
            <h2>{(upadte === true) ? 'edit test' : 'new test'} { (test) ? test.title : '' } </h2>
            <form onSubmit={handleSubmit}>
                <label>title</label>
                <input type='text' id='testTitle' defaultValue={(test) ? test.title : ''} required/>
                <label>description</label>
                <input type='text' id='testDesc' defaultValue={(test) ? test.desc : ''} required/>
                <button onClick={handleNewQuestion}>new Question</button>
                <div>
                    {
                        data.map(question => 
                            <QuestionForm question      = {question}
                                          order         = {questions.data.indexOf(question)}
                                          key           = {Math.random() * 100000}
                                          allQuestions  = {data}
                                          setQuestions  = {setQuestions}
                            />                              
                        )
                    }
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default PublishOrUpdateTest;