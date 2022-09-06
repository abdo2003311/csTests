import axios from "axios";
import headers from "../interfaces/headers";
import testType from "../interfaces/testType";


let getAndSetTestsAdmin = async (tests : testType[], setTests : any, headers : headers) => {
    if (tests[0]?.title === '') {
        let data = await axios.get('http://localhost:8080/admin/tests', headers);
        setTests(data.data);
    }
}

export default getAndSetTestsAdmin;