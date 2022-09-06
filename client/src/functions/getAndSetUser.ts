import axios, { AxiosRequestConfig } from 'axios';

let getAndSetUser = async (user: 
    { 
        userName: any; 
        password?: string; 
        createdAt?: string; 
        email?: string; 
        image?: { src: string; }; 
        solvedTests?: never[]; }, 
        setUser: any, 
        userName: string | undefined,
        headers: AxiosRequestConfig<any> | undefined) => {

    if (user.userName === '...') {

        let res = await axios.get(`http://localhost:8080/api/users/${userName}`, headers);

        setUser(res.data);
    }
    
}

export default getAndSetUser;