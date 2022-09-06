import axios from "axios";
import { useState } from "react";
import getAndSetPublicUser from "../../functions/getAndSetPublicUser";
import headers from "../../interfaces/headers";

let Comment = (
    props : {
        comment : {        
            desc : string,
            user : string,
            createdAt : string,
            _id : string
        }
        thisUserId : string,
        headers : headers,
        userName : string
    }
) : JSX.Element => {

    let { desc, createdAt, _id } = props.comment;

    let { thisUserId, userName, headers } = props;

    let commentUserId = props.comment.user;

    let [user, setUser] = useState({
        userName : '...',
        image : {
            src : ''
        }
    });

    getAndSetPublicUser(user, setUser, commentUserId, {});

    let handleDelete = async (e: { preventDefault: () => void; }) => {
        
        e.preventDefault();

        await axios.delete(`http://localhost:8080/api/articles/${_id}/deleteComment/${userName}`, headers)

        window.location.reload();

    }

    let handleViewUpdateForm = async (e: { preventDefault: () => void; }) => {
        
        e.preventDefault();

        let updateCommentSection : HTMLFormElement = document.getElementById(`updateCommentSection${_id}`) as HTMLFormElement;

        updateCommentSection.classList.toggle('active');

    }

    let handleUpdate = async (e: { preventDefault: () => void; }) => {

        e.preventDefault();
        
        let updateCommentDesc : HTMLInputElement = document.getElementById(`updateCommentDesc${_id}`) as HTMLInputElement;

        await axios.put(`http://localhost:8080/api/articles/${_id}/updateComment/${userName}`, {
            desc : updateCommentDesc.value
        }, headers);

        window.location.reload();

    }

    return (
        <div className="comment">
            <div>
                <img src={user.image.src} alt='nothing' />
                <span className="userName">{user.userName}</span> 
                {(commentUserId ===  thisUserId) ? 
                <>
                    <i className="bi bi-trash" onClick={handleDelete}></i>
                    <i className="bi bi-pen" onClick={handleViewUpdateForm}></i>
                </>: ''}
            </div>
            <p>
                {desc}
            </p>
            <span className="createdAt">{createdAt}</span>
            <form id={`updateCommentSection${_id}`} className='updateCommentSection'>
                <label>update comment</label>
                <textarea id={`updateCommentDesc${_id}`} rows={4}></textarea>
                <button onClick={handleUpdate}>submit</button>
            </form>
        </div>
    )
}

export default Comment;