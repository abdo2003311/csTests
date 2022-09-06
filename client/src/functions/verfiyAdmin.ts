import axios, { AxiosRequestConfig } from "axios";

let verfiyAdmin = async (headers: AxiosRequestConfig<any> | undefined) => {
    
    try {
        await axios.get('http://localhost:8080/admin/verfiyAdmin', headers);
    } catch (e) {
        window.location.href = 'http://localhost:3000/adminLogin';
    }
    
}

export default verfiyAdmin;