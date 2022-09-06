import { useState } from "react";
import ArticleView from "../components/js/ArticleView";
import getAndSetArticles from "../functions/getAndSetArticles";
import headers from "../interfaces/headers";
import PublishOrUpdateArticle from "../components/js/PublishOrUpdateArticle";

let ArticlesPage = (
    props :
    { 
        headers : headers,
        userName : string
    }
    ) : JSX.Element => {

    let { headers, userName } = props;

    let [articles, setArticles] = useState({data :[{
        title : '',
        desc : '...',
        catagory : '...',
        createdAt : '...',
        _id : '...',
        image : {
            src : ''
        }
    }]})

    getAndSetArticles(articles, setArticles);

    let handleViewNewArticle = () => {
        document.getElementsByClassName('publishOrUpdateArticle')[0]?.classList.toggle('active')
    }

    return (
        <div className="articlesPage">
            <i className="bi bi-plus-lg" onClick={handleViewNewArticle}></i>
            <PublishOrUpdateArticle 
                headers={headers}
                upadte={false}
                id={undefined}
                userName = {userName}
                />
            {
                articles.data.map(
                    article => 
                    <ArticleView 
                        title     = {article.title}
                        desc      = {article.desc}
                        catagory  = {article.catagory}
                        createdAt = {article.createdAt}
                        key       = {Math.random() * 10000}
                        id        = {article._id}
                        image  = {article.image}
                    />)
            }
        </div>
    )
}

export default ArticlesPage;