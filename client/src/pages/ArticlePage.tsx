import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../components/js/Comment';
import getAndSetArticle from '../functions/getAndSetArticle';
import getAndSetUserId from '../functions/getAndSetUserId';
import headers from '../interfaces/headers';


let Article = (props : {
    headers : headers;
    userName : string
}) : JSX.Element => {

    let { headers, userName } = props;

    let { id } = useParams();

    let [article, setArticle] = useState({
        title : '',
        desc : '',
        image : {
            src : ''
        },
        createdAt : '',
        _id : '',
        comments : [{
            user : '',
            desc : '',
            createdAt : '',
            _id : ''
        }]
    });

        
    let handleClick = async (e: { preventDefault: () => void; }) => {
        
        e.preventDefault();

        await axios.post(`http://localhost:8080/api/articles/${article._id}/comment/${userName}`, {
            desc : (document.getElementById('commentDesc') as HTMLInputElement)!.value
        }, headers);

    }

    let [thisUserId, setUserId] = useState('');
    getAndSetArticle(article, setArticle, id);
    getAndSetUserId(thisUserId, setUserId, userName, headers);
    
    return (
        <div className='articlePage'>
            <div className='article'>
                <h2>{article.title}</h2>
                <img src={article.image.src} alt="nothing" />
                <p>
                    {article.desc}   
                </p>
                <span className='createdAt'>{article.createdAt}</span>
            </div>
            <form>
                <label>write a comment</label>
                <textarea id='commentDesc' rows={4}></textarea>
                <button onClick={handleClick}>submit</button>
            </form>
            <div className='comments'>
                {
                    article.comments.map(comment => <Comment 
                        comment    = {comment}
                        thisUserId = {thisUserId}
                        key        = {Math.random() * 100000}
                        headers    = {headers}
                        userName   = {userName}
                    />)
                }
            </div>
        </div>
    )

}

export default Article;