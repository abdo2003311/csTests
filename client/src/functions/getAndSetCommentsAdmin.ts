import axios from "axios";
import commentType from "../interfaces/commentType";
import headers from "../interfaces/headers";

let getAndSetCommentsAdmin = async (comments: commentType[], setComments : any, headers : headers) => {
    if (comments[0].desc === '') {
        let data = await axios.get('http://localhost:8080/admin/comments', headers);
        setComments(data.data);
    }
}

export default getAndSetCommentsAdmin;