import axios from "axios";

let getAndSetTests = async (tests: any, setTests : any) => {
    if (tests?.data[0]?.title === '') {
        let data = await axios.get('http://localhost:8080/api/tests');
        setTests({ data : data.data });
    }
}

export default getAndSetTests;