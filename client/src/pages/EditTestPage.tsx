import { useParams } from "react-router-dom"
import getAndSetTest from "../functions/getAndSetTest";
import { useState } from "react";
import headers from "../interfaces/headers";
import PublishOrUpdateTest from "../components/js/PublishOrUpdateTest";

let EditTestPage = (
    props : 
    { 
        headers : headers,
        userName : string
    }) : JSX.Element => {

    let { headers, userName } = props;
    let { id } = useParams();
    
    let [test, setTest] = useState({
        title : '',
        desc : '',
        createdAt : '',
        questions : [],
        _id : '',
        solvedBy : []
    })

    getAndSetTest(test, setTest, id);

    return (<PublishOrUpdateTest 
                upadte    = {true}
                id        = {id}
                headers   = {headers}
                test      = {test}
                userName = {userName}
            />)
}

export default EditTestPage;