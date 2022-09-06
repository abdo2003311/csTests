import axios from 'axios';
import headers from '../interfaces/headers';

let EditUserPage = (props:
    { 
        headers: headers; 
        userName: string; 
        setUserName: (arg : string) => void; 
    }) : JSX.Element => {

    let { headers, userName, setUserName } = props;

    let handleSubmit = async (e: { preventDefault: () => void; }) => {

        e.preventDefault();

        let newUserName = (document.getElementById('userName') as HTMLInputElement).value;
        let newPassword = (document.getElementById('password') as HTMLInputElement).value;
        let newEmail = (document.getElementById('email') as HTMLInputElement).value;
        let errorAlert = document.getElementById('error')  as HTMLElement;

        if (newUserName.length <= 8 || newUserName.length >= 20) {
                
            errorAlert.textContent = "username length must be more than 8 char and less than 20";
            
            return '';

        } 
         
        if (newUserName.search(/[0-9]/) === -1) {

            errorAlert.textContent = "username must contain numbers";

            return '';

        } 
        
        if (newUserName.search(/[A-Z]/) !== -1) {

            errorAlert.textContent = "username must not contain capital letters";

            return '';

        } 

        if (newPassword.length <= 8 || newPassword.length >= 20) {
            
            errorAlert.textContent = "password length must be more than 8 char and less than 20";
            
            return '';

        }

        try {
            
            let res = await axios.put(`http://localhost:8080/api/users/${userName}`, {
                newUserName : newUserName,
                newPassword : newPassword,
                newEmail : newEmail
            }, headers);
        
            setUserName(newUserName);

            errorAlert.textContent = res.statusText;

            window.localStorage.userName = newUserName;

            window.location.href = `http://localhost:3000/profile/${newUserName}`;
            
        } catch (e : any) {

            errorAlert.textContent = e;
        }
        
    }

    return (
        <div className="editUserPage">      
            <h2>edit-user</h2>
            <form onSubmit={handleSubmit}>
                Name
                <input type='text' placeholder="username" id="userName" required/>
                Password
                <input type='password' placeholder="password" id="password" required/>
                Email 
                <input type='email' placeholder="email" id="email" required/>
                <input type='submit'/>
                <span id='error'></span>
            </form>
        </div>
    )
}

export default EditUserPage;