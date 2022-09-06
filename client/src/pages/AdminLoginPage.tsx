import axios from "axios";


let AdminLoginPage = () : JSX.Element => {
    let handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        let data = await axios.post('http://localhost:8080/admin/login', {
            userName : (document.getElementById('userName') as HTMLInputElement).value,
            password : (document.getElementById('password') as HTMLInputElement).value
        });
        window.localStorage.accesstoken = data.data.token;
        window.location.href = 'http://localhost:3000/adminDashboard';
    }
    return (
        <div className="adminLogin">
            <h2>Admin Login</h2>
            <form>
                <label>Name</label>
                <input type='text' id='userName' placeholder="Enter Admin Name" />
                <label>Password</label>
                <input type='password' id='password' placeholder="Enter Admin Password"/>
                <input type='submit' onClick={handleLogin} />
            </form>
        </div>
    )
}
export default AdminLoginPage;