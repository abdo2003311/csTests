import { useState } from "react";
import AdminDashboardArticleView from "../components/js/AdminDashboardArticleView";
import AdminDashboardCommentView from "../components/js/AdminDashboardCommentView";
import AdminDashboardTestView from "../components/js/AdminDashboardTestView";
import AdminDashboardUserView from "../components/js/AdminDashboardUserView";
import getAndSetArticlesAdmin from "../functions/getAndSetArticlesAdmin";
import getAndSetCommentsAdmin from "../functions/getAndSetCommentsAdmin";
import getAndSetTestsAdmin from "../functions/getAndSetTestsAdmin";
import getAndSetUsersAdmin from "../functions/getAndSetUsersAdmin";
import verfiyAdmin from "../functions/verfiyAdmin";
import headers from "../interfaces/headers";


let AdminDashboard = (
    props : {
        headers : headers
    }
) : JSX.Element => {

    let { headers } = props;

    verfiyAdmin(headers);

    let [users, setUsers] = useState([{
        userName : '',
        password : '',
        email : '',
        image : {
            src : '',
            _id : ''
        },
        createdAt : '',
        solvedTests : [{
            test : '',
            degree : 0,
            title : ''
        }],
        _id : '',
        publishedTests : [''],
        publishedArticles : [''],
        comments : ['']

    }]);

    let [tests, setTests] = useState([
        {
            title : '',
            desc : '',
            questions : [],
            createdAt : '',
            _id : '',
            publisher : '',
            solvedBy : []
        }
    ]);

    let [articles, setArticles] = useState([
        {
            title : '',
            desc : '',
            createdAt : '',
            _id : '',
            publisher : '',
            catagory : '',
            image : '',
            comments : ['']
        }
    ]);

    let [comments, setComments] = useState([
        {
            desc : '',
            _id : '',
            user : {
                userName : '',
                password : '',
                email : '',
                image : {
                    src : '',
                    _id : ''
                },
                createdAt : '',
                solvedTests : [{
                    test : '',
                    degree : 0,
                    title : ''
                }],
                _id : '',
                publishedTests : [''],
                publishedArticles : [''],
                comments : ['']
            },
            createdAt : ''
        }
    ]);

    getAndSetUsersAdmin(users, setUsers, headers);
    getAndSetTestsAdmin(tests, setTests, headers);
    getAndSetArticlesAdmin(articles, setArticles, headers);
    getAndSetCommentsAdmin(comments, setComments, headers);

    return (
        <div className="adminDashboard">
            <h3>users</h3>
            {
                users.map((user) => (
                    <AdminDashboardUserView
                            user    = {user}
                            key     = {Math.random() * 100000}
                            headers = {headers}
                        />
                ))
            }
            <h3>tests</h3>
            {
                tests.map((test) => (
                    <AdminDashboardTestView
                            test={test}
                            key={Math.random() * 100000}
                            headers = {headers}
                        />
                ))
            }
            <h3>articles</h3>
            {
                articles.map((article) => (
                    <AdminDashboardArticleView
                            article = {article}
                            key     = {Math.random() * 100000}
                            headers = {headers}
                    />
                ))
            }
            <h3>comments</h3>
            {
                comments.map((comment) => (
                    <AdminDashboardCommentView
                            comment = {comment}
                            key     = {Math.random() * 100000}
                            headers = {headers}
                    />
                ))
            }
        </div>
    )
}

export default AdminDashboard;