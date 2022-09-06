import axios from "axios";
import headers from "../../interfaces/headers";
import userType from "../../interfaces/userType";


let AdminDashboardUserView = (
    props : {
        user : userType,
        headers : headers
    }) : JSX.Element => {

    let {  
        userName ,
        email,
        comments,
        publishedArticles ,
        publishedTests ,
        createdAt ,
        image,
        _id,
        solvedTests
    } = props.user;

    let { headers } = props;

    let handleDelete = async () => {

        await axios.delete(`http://localhost:8080/admin/users/${_id}`, headers)

    }

    return (
        <div className="adminDashboardUserViewWrapper">
            <img src={image.src} alt="nothing"/>
            <div className="adminDashboardUserView">
                <header>
                    <span className="key">Name</span>
                    <i className="bi bi-x-lg" onClick={handleDelete}></i>
                </header>
                <span className="val">{userName}</span>
                <span className="key">created at</span>
                <span className="val">{createdAt}</span>
                <span className="key">email</span>
                <span className="val">{email}</span>
                <span className="key">comments</span>
                <span>{comments.length}</span>
                <span className="key">publishedArticles</span>
                <span>{publishedArticles.length}</span>
                <span className="key">publishedTests</span>
                <span>{publishedTests.length}</span>
                <span className="key">solvedTests</span>
                <span>{solvedTests.length}</span>
            </div>
        </div>
    )
}

export default AdminDashboardUserView;