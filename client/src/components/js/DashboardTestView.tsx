import axios from "axios";
import { useState } from "react";
import getAndSetTest from "../../functions/getAndSetTest";
import headers from "../../interfaces/headers";

let DashboardTestView = (props:
    { 
        testId: string;
        headers: headers;
        userName : string
    }) : JSX.Element => {

    let { headers, userName, testId } = props;

    let [test, setTest] = useState({
        title : '',
        _id : '',
        createdAt : '',
        desc : '',
        questions : []
    });

    let { title, _id , createdAt, desc } = test;
    
    let handleDelete = async () => {
        await axios.delete(`http://localhost:8080/api/tests/${testId}/${userName}`, headers);
    }

    getAndSetTest(test, setTest, testId);
    
    return (
    <div className="dashboardTestView">
        <header>
            <span>{title}</span>
            <i className="bi bi-x-lg" onClick={handleDelete}></i>
        </header>
        <span>{createdAt}</span>
        <span>{desc}</span>
        <a href={`http://localhost:3000/dashboard/tests/${_id}`}>Edit</a>
    </div>)

}

export default DashboardTestView;