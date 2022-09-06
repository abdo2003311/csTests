import axios from "axios";
import headers from "../../interfaces/headers";
import { useState } from "react";
import getAndSetArticle from "../../functions/getAndSetArticle";

let DashboardArticleView = (props:
    {
        articleId : string;
        headers : headers;
        userName : string
    }) : JSX.Element => {

    let { headers, userName, articleId } = props;
    
    let [article, setArticle] = useState({
        title : '',
        desc : '',
        createdAt : '',
        catagory : '',
        image : '',
        comments : [],
        _id : ''
    });

    getAndSetArticle(article, setArticle, articleId);

    let { title, createdAt, desc, catagory } = article;

    let handleDelete = async () => {
        await axios.delete(`http://localhost:8080/api/articles/${articleId}/${userName}`, headers);
    }

    return (
    <div className="dashboardArticleView">
        <header>
            <span>{title}</span>
            <i className="bi bi-x-lg" onClick={handleDelete}></i>
        </header>
        <span>{createdAt}</span>
        <span>{desc}</span>
        <span>catagory : {catagory}</span>
        <a href={`http://localhost:3000/dashboard/articles/${articleId}`}>Edit</a>
    </div>)

}

export default DashboardArticleView;