import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./Login.css";

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri =location.state?.form || '/';
   
    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_uri);
        })
    }
    return (
        <div  className='login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder='Your Email' />
                    <br />
                    <input type="password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john?<Link to="/register">Create Account</Link></p>
                <div>----------------or---------------</div>
                <button onClick={handleGoogleLogin} className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;