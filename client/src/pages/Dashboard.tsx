import DashboardTestView from "../components/js/DashboardTestView";
import headers from "../interfaces/headers";
import DashboardArticleView from "../components/js/DashboardArticleView";
import userType from "../interfaces/userType";

let Dashboard = (
    props:
    {
        headers: headers;
        user : userType
    }) : JSX.Element => {

    let { headers, user } = props;

    return (
        <div className='dashboard'>
            <div className="dashboardArticles">
                <h3>my articles</h3>
                {
                    user.publishedArticles.map(article => 
                        <DashboardArticleView 
                            headers = {headers}
                            articleId = {article as string}
                            userName = {user.userName}
                            key     = {Math.random() * 10000}
                        />)
                }
            </div>
            <div className="dashboardTests">
                <h3>my Tests</h3>
                {
                    user.publishedTests.map(test => 
                        <DashboardTestView 
                            headers = {headers}
                            testId    = {test as string}
                            userName = {user.userName}
                            key     = {Math.random() * 10000}
                        />)
                }
            </div>
        </div>
    )
}

export default Dashboard;