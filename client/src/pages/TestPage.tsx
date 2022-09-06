import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Question from "../components/js/Question";
import getAndSetTest from "../functions/getAndSetTest";
import headers from "../interfaces/headers";
import testType from "../interfaces/testType";

let data : testType = {
    title : '',
    desc : '...',
    createdAt : '...',
    solvedBy : [],
    questions : [{
        title : '...',
        desc : '...',
        answers : [{
            desc : '...'
        },{
            desc : '...'
        },],
        correct: 1
    }],
    _id : '...'
}

let Test = (props: 
    { 
        userName: string; 
        headers: headers; 
    }) : JSX.Element => {

    let { userName, headers } = props;

    let { id } = useParams();

    let [test, setTest] = useState(data);
    
    let degree : { data : number } = {
        data : 0
    };

    getAndSetTest(test, setTest, id);

    let handleSubmitTest = async (e: { preventDefault: () => void; }) => {
        
        e.preventDefault();

        await axios.post(`http://localhost:8080/api/users/${userName}/solveTest/${id}`, {
            degree : degree.data,
        }, headers);

    }

    return (
        <div className="test">
            <header>
                <h2>{test.title}</h2>
                <span className="createdAt">{test.createdAt}</span>
                <p>{test.desc}</p>
            </header>
            {
                test.questions.map(question => 
                    <Question
                        question       = {question}
                        key            = {Math.random() * 10000}
                        degree         = {degree}
                        questionDegree = {100 / test.questions.length}
                    />
                )
            }
            {(userName) ? <button onClick={handleSubmitTest}>submit Test</button> : ' '}

        </div>
    ) 
}

export default Test;
