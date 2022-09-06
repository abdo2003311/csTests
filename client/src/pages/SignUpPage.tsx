import axios from 'axios';
import { useState } from 'react';

let SignUpPage = () : JSX.Element => {

    let [image, setImage] = useState({});

    let handleFile = (e : any) => {

        setImage(e.target.files[0]);

    }

    let handleSubmit = async (e: { preventDefault: () => void; }) => {

        e.preventDefault();

        let userName = (document.getElementById('userName') as HTMLInputElement).value;
        let password = (document.getElementById('password') as HTMLInputElement).value;
        let email = (document.getElementById('email') as HTMLInputElement).value;
        let errorAlert = document.getElementById('error') as HTMLElement;
        
        let i : any = image;
        let formData = new FormData();
  
        //Adding files to the formdata

        formData.append("image", i);

        if (userName.length <= 8 || userName.length >= 20) {

            errorAlert.textContent = "username length must be more than 8 char and less than 20";

            return '';
        
        } 
        if (password.length <= 8 || password.length >= 20) {
            
            errorAlert.textContent = "password length must be more than 8 char and less than 20";

            return '';
            
        } 
        
        if (userName.search(/[0-9]/) === -1) {

            errorAlert.textContent = "username must contain numbers";

            return '';

        } 
        
        if (userName.search(/[A-Z]/) !== -1) {

            errorAlert.textContent = "username must not contain capital letters";

            return '';

        } 

        try {

            let imageName = await axios.post('http://localhost:8080/uploadImage', formData, {
                headers : {
                    'Content-Type': 'multipart/form-data'
                }
            })
            
            let res = await axios.post('http://localhost:8080/api/users/signUp', {
                userName : userName,
                password : password,
                email : email,
                imageName : imageName.data
            });

            errorAlert.textContent = res.statusText;
            
            window.localStorage.accesstoken = res.data;
            window.localStorage.loggedIn = 'true';
            window.localStorage.userName = userName;
            window.location.href = `http://localhost:3000/profile/${userName}`
                
            } catch (e : any) {
                errorAlert.textContent = e;
            }
        
    }

    return (
        <div className="signUpPage">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                Name
                <input type='text' placeholder="Enter your Name" id="userName" required/>
                Password
                <input type='password' placeholder="Enter your Password" id="password" required/>
                Email
                <input type='email' placeholder="Enter your Email" id="email" required/>
                <input type='file' id="img" onChange={handleFile}/>
                <input type='submit'/>
                <span id='error'></span>
            </form>
        </div>
        
    )
}

export default SignUpPage;