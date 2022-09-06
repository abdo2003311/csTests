import axios from 'axios';
import headers from "../interfaces/headers";


let getAndSetUserId = async (thisUserId : string, setUserId : any, userName : string, headers : headers) => {
    if (thisUserId === '') {
        let data = await axios.get(`http://localhost:8080/api/users/getId/${userName}`, headers);
        setUserId(data.data);
    }
}

export default getAndSetUserId;