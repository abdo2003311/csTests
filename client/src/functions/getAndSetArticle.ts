import axios from "axios";

let getAndSetArticle = async (article: any, setArticle : any, id : any) => {
    if (article.title === '') {
        let data = await axios.get(`http://localhost:8080/api/articles/${id}`);
        setArticle(data.data);
    }
}

export default getAndSetArticle;