import axios from "axios";

let getAndSetTest = async (test: any, setTest : any, id : any) => {
    if (test.title === '') {
        
        let data = await axios.get(`http://localhost:8080/api/tests/${id}`);
        
        setTest(data.data);
    
    }
}

export default getAndSetTest;