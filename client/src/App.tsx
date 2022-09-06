import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './pages/TestPage';
import ArticlesPage from './pages/ArticlesPage';
import TestsPage from './pages/TestsPage';
import AdminLoginPage from './pages/AdminLoginPage';
import EditTestPage from './pages/EditTestPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import EditUserPage from './pages/EditUserPage';
import headers from './interfaces/headers';
import { NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import ArticlePage from './pages/ArticlePage';
import EditArticlePage from './pages/EditArticlePage';
import AdminDashboard from './pages/AdminDashboard';

let App = () => {

    let [loggedIn, setLoggedIn] = useState(false);
    let [userName, setUserName] = useState(window.localStorage.userName);
    
    let accesstoken = window.localStorage.accesstoken;
    let headers : headers = { headers : { accesstoken : accesstoken } };

    let handleLogOut = () => {
        window.localStorage.clear();
        setLoggedIn(false);
    }

    let handleNavIfLoggedIn = () => {

        if (window.localStorage.loggedIn === 'true' && !loggedIn) setLoggedIn(true);
        
        if (loggedIn) {
            return (
                <>
                    <NavLink to={`profile/${window.localStorage.userName}`}>Profile</NavLink>
                    <NavLink to='login' onClick={handleLogOut}>Log-out</NavLink>
                </>
            )
        } else {
            return (
                <>
                    <NavLink to='signUp'>Sign-up</NavLink>
                    <NavLink to='logIn'>Log-in</NavLink>
                </>
            )
        }
    }

    return (
        <BrowserRouter>
            <header className='mainHeader'>
                <nav>
                    <span>csTests</span>
                    <div>
                        <NavLink to='tests'>Tests</NavLink>
                        <NavLink to='articles'>Articles</NavLink>
                        {handleNavIfLoggedIn()}
                    </div>
                </nav>
            </header>
            <div className='body'>
                <Routes>
                    
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/profile/:userName' element={<ProfilePage headers={headers}/>} />
                    <Route path='/signUp' element={<SignUpPage />} />
                    <Route path='/editAccount' element={<EditUserPage headers={headers} userName={userName} setUserName={setUserName}/>} />
                    <Route path='/logIn' element={<LogInPage />} />
                    <Route path='/tests' element={<TestsPage headers={headers} userName={userName}/>} />
                    <Route path='/tests/:id' element={<Test userName={userName} headers={headers}/>} />
                    <Route path='/articles' element={<ArticlesPage headers={headers} userName={userName}/>} />
                    <Route path='/articles/:id' element={<ArticlePage headers={headers} userName={userName}/>} />
                    <Route path='/dashboard/tests/:id' element={<EditTestPage headers={headers} userName={userName}/>} />
                    <Route path='/dashboard/articles/:id' element={<EditArticlePage headers={headers} userName={userName}/>} />
                    <Route path='/adminLogin' element={<AdminLoginPage />} />
                    <Route path='/adminDashboard' element={<AdminDashboard headers={headers}/>} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;