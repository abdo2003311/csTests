import axios from "axios";
import headers from "../../interfaces/headers";
import testType from "../../interfaces/testType";


let AdminDashboardTestView = (
    props : {
        test : testType,
        headers : headers
    }
    ) : JSX.Element => {

    let {  
        title ,
        desc,
        createdAt,
        publisher,
        _id,
        solvedBy,
    } = props.test;

    let { headers } = props;

    let handleDelete = async () => {

        await axios.delete(`http://localhost:8080/admin/tests/${_id}`, headers)

    }

    return (
        <div className="adminDashboardTestView">
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
            <span className="key">solvedBy</span>
            {
                solvedBy.map(ele => <span className="val">{ele.userName}</span>)
            }
        </div>
    )
}

export default AdminDashboardTestView;