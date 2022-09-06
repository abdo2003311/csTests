import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import getAndSetUser from "../functions/getAndSetUser";
import headers from "../interfaces/headers";
import solvedTestType from "../interfaces/solvedTestType";
import Dashboard from "./Dashboard";


let ProfilePage = (
    props:
    {
        headers: headers;
    }) : JSX.Element => {
    
    let params = useParams();

    let userName : string = params.userName as string; 

    let { headers } = props;

    let [user, setUser] = useState({
        userName : '...',
        password : '...',
        createdAt : '...',
        email : '...',
        image : {
            src : '...',
            _id : ''
        },
        solvedTests : [],
        publishedArticles : [],
        publishedTests : [],
        comments : [],
        _id : ''
    });

    getAndSetUser(user, setUser, userName, headers);

    let avgDegree = () => {

        let sum = 0;

        user.solvedTests.forEach((test : solvedTestType) => sum += test.degree);

        return sum / user.solvedTests.length;

    }

    let handleDeleteAccount = async () => {
        await axios.delete(`http://localhost:8080/api/users/${userName}`, headers);
        window.localStorage.clear();
        window.location.href = 'http://localhost:3000/login';
    }

    return (
        <div className="profilePage">
           <div className="wrapper">
                <div className="l">
                    <span className="key">Name</span>
                    <span className="val">{user.userName}</span>
                    <span className="key">Created At </span>
                    <span className="val">{user.createdAt}</span>
                    <span className="key">Password</span>
                    <span className="val">{user.password}</span>
                    <span className="key">Email</span>
                    <span className="val">{user.email}</span>
                </div>
                <div className="i">
                    <img src={user.image.src} alt="nothing"/>
                </div>
                <div className="statistics">
                    <div>
                        <span>solved Tests</span> 
                        <span>{user.solvedTests.length}</span>
                    </div>
                    <div>
                        <span>average degree</span>
                        <span>{isNaN(avgDegree()) ? 0 : avgDegree().toPrecision(4)}</span>
                    </div>
                    <div>
                        <span>published Tests</span>
                        <span>{user.publishedTests.length}</span>
                    </div>
                    <div>
                        <span>published Articles</span>
                        <span>{user.publishedArticles.length}</span>
                    </div>
                    <a href="http://localhost:3000/editAccount">edit account</a>
                    <button onClick={handleDeleteAccount}>delete account</button>
                </div>
            </div>
            <div className="solvedTests">
            <h3>solved Tests </h3>
                {
                    user.solvedTests.map((solvedTest : solvedTestType) => (
                        <div className="solvedTest" key={Math.random() * 100000}>
                            <span>title : {solvedTest.title}</span>
                            <span>degree : {solvedTest.degree}</span>
                            <span><a href={`http://localhost:3000/tests/${solvedTest.test}`}>retry</a></span>
                        </div>
                    ))
                }
            </div>
            <Dashboard headers={headers} user={user}/>
        </div>
    )
}

export default ProfilePage;