import testType from "../../interfaces/testType";

let TestView = (
    props:
    {
        test: testType;
        solvedNum : number
    }) : JSX.Element => {

    let { title, desc, createdAt, _id } = props.test;

    let { solvedNum } = props;

    return (
        <div className="testView">
            <h2>{title}</h2>
            <p>Description : {desc}</p>
            <span className="createdAt">{createdAt}</span>
            <footer>
                <span>solved {solvedNum} times</span>
                <a href={`http://localhost:3000/tests/${_id}`}>solve</a>
            </footer>
        </div>
    ) 
    
}

export default TestView;
