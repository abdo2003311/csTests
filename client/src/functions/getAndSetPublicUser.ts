import axios, { AxiosRequestConfig } from 'axios';

let getAndSetPublicUser = async (user: 
    { 
        userName: any; 
    },
    setUser : any,
    id : string,
    headers: AxiosRequestConfig<any> | undefined
   ) => {

    if (user.userName === '...' && id !== '') {

        let res = await axios.get(`http://localhost:8080/api/users/public/${id}`, headers);

        setUser(res.data);
    }
    
}

export default getAndSetPublicUser;