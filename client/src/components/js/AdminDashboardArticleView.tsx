import axios from "axios";
import articleType from "../../interfaces/articleType";
import headers from "../../interfaces/headers";

let AdminDashboardArticleView = (
    props : {
        article : articleType,
        headers : headers
    }
    ) : JSX.Element => {

    let {  
        title ,
        desc,
        createdAt,
        publisher,
        _id,
        comments
    } = props.article;

    let { headers } = props;

    let handleDelete = async () => {

        await axios.delete(`http://localhost:8080/admin/articles/${_id}`, headers)

    }

    return (
        <div className="adminDashboardArticleView">
            <header>
                <span className="key">title</span>
                <i className="bi bi-x-lg" onClick={handleDelete}></i>
            </header>
            <span className="val">{title}</span>
            <span className="key">publisher</span>
            <span className="val">{publisher as string}</span>
            <span className="key">created at</span>
            <span className="val">{createdAt}</span>
            <span className="key">desc</span>
            <span className="val">{desc}</span>
            <span className="key">comments</span>
            <span className="val">{comments.length}</span>
        </div>
    )
}

export default AdminDashboardArticleView;