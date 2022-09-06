import axios from "axios";

let getAndSetArticles = async (articles: any, setArticles : any) => {
    if (articles?.data[0]?.title === '') {
        let data = await axios.get('http://localhost:8080/api/articles');
        setArticles({ data : data.data });
    }
}

export default getAndSetArticles;