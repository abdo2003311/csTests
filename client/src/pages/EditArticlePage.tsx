import { useParams } from "react-router-dom"
import headers from "../interfaces/headers";
import PublishOrUpdateArticle from "../components/js/PublishOrUpdateArticle";

let EditArticlePage = (
    props :
    {
        headers : headers,
        userName : string
    }) : JSX.Element => {
    
    let { headers, userName } = props;
    let { id } = useParams();

    return (<PublishOrUpdateArticle 
                upadte   = {true}
                id       = {id}
                headers  = {headers}
                userName = {userName}
            />)
}

export default EditArticlePage;