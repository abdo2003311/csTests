import axios from "axios";
import commentType from "../../interfaces/commentType";
import headers from "../../interfaces/headers";

let AdminDashboardCommentView = (
    props : {
        comment : commentType,
        headers : headers
    }
    ) : JSX.Element => {

    let {  
        user,
        desc,
        _id,
        createdAt
    } = props.comment;

    let { headers } = props;

    let handleDelete = async () => {

        await axios.delete(`http://localhost:8080/admin/comments/${_id}`, headers)

    }



    return (
        <div className="adminDashboardCommentView">
                <header>
                    <span className="key">publisher</span>
                    <i className="bi bi-x-lg" onClick={handleDelete}></i>
                </header>
            <span className="val">{user.userName}</span>
            <span className="key">created at</span>
            <span className="val">{createdAt}</span>
            <span className="key">desc</span>
            <span className="val">{desc}</span>
        </div>
    )
}

export default AdminDashboardCommentView;