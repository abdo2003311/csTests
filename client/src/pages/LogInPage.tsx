import axios from 'axios';

let LogInPage = () : JSX.Element => {

    let handleSubmit = async (e: { preventDefault: () => void; }) => {

        e.preventDefault();

        let password = (document.getElementById('password') as HTMLInputElement).value;
        let email = (document.getElementById('email') as HTMLInputElement).value;
        let errorAlert = document.getElementById('error') as HTMLElement;

        if (password.length <= 8 || password.length >= 20) {
            
            errorAlert.textContent = "password length must be more than 8 char and less than 20";

            return '';
            
        } 
            

        try {

            let res = await axios.post('http://localhost:8080/api/users/logIn', {
                password : password,
                email : email
            });
            
            errorAlert.textContent = res.statusText;
        
            window.localStorage.accesstoken = res.data.accesstoken;
            window.localStorage.loggedIn = 'true';
            window.localStorage.userName = res.data.userName;
            window.location.href = `http://localhost:3000/profile/${res.data.userName}`
        
        } catch (e : any) {

            errorAlert.textContent = e;

        }

    }

    return (
        <div className="logInPage" >
            <h2>Log-In</h2>
            <form onSubmit={handleSubmit}>
                Email
                <input type='email' placeholder="email" id="email" required/>
                Password
                <input type='password' placeholder="password" id="password" required/>
                <input type='submit'/>
                <span id='error'></span>
            </form>
        </div>

    )
}

export default LogInPage;