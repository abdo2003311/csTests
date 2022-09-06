import axios from "axios";
import articleType from "../interfaces/articleType";
import headers from "../interfaces/headers";


let getAndSetArticlesAdmin = async (article : articleType[], setArticle : any, headers : headers) => {
    if (article[0].title === '') {
        let data = await axios.get('http://localhost:8080/admin/articles', headers);
        setArticle(data.data);
    }
}

export default getAndSetArticlesAdmin;