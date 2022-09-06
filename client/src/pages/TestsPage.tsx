import TestView from "../components/js/TestView";
import { useState } from "react";
import getAndSetTests from "../functions/getAndSetTests";
import testType from "../interfaces/testType";
import PublishOrUpdateTest from "../components/js/PublishOrUpdateTest";
import headers from "../interfaces/headers";

let data : testType[] = [{
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
}];

let TestsPage = (
    props :
    {
        headers : headers,
        userName : string
    }) : JSX.Element => {

    let { headers, userName } = props;

    let [tests, setTests] = useState({ data : data })
    
    getAndSetTests(tests, setTests);

    let handleViewNewTest = () => {
        document.getElementsByClassName('publishOrUpdateTest')[0]?.classList.toggle('active')
    }

    return (
        <div className="testsPage">
            <i className="bi bi-plus-lg" onClick={handleViewNewTest}></i>
            <PublishOrUpdateTest 
                upadte     = {false}
                headers  = {headers}
                userName = {userName}
            />
            {
            tests.data.map((test : testType) =>
                <TestView 
                    solvedNum={test.solvedBy.length}
                    test = {test}
                    key  = {Math.random() * 10000}
                />)
            }
        </div>
    )
}

export default TestsPage;