import axios from "axios";
import headers from "../interfaces/headers";
import userType from "../interfaces/userType";


let getAndSetUsersAdmin = async (users : userType[], setUsers : any, headers : headers) => {
    if (users[0].userName === '') {
        let data = await axios.get('http://localhost:8080/admin/users', headers);
        setUsers(data.data);
    }
}

export default getAndSetUsersAdmin;