import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { setUserSession } from '../../../utils/session';
import {apiBase} from '../../../API/api';




const Login = (props) => {

    const [loading, setLoading] = useState(false);
    const empid = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);



    const handleLogin = (e) => {
        
        e.preventDefault();
        setError(null);
        setLoading(true);
        axios.post(apiBase+'/admin/login', { email: empid.value, password: password.value }).then(response => {
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            props.history.push('/dashboard');
        }).catch(error => {
        setLoading(false);
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again.");
    });
    }



    return (
    <div class="limiter">
                <div class="container-login100">
                    <div class="wrap-login100">
                        <div class="login100-pic js-tilt" data-tilt>
                            
                        </div>
        
                        <form class="login100-form" onSubmit={handleLogin}>
                            <span class="login100-form-title"><div class="logo"></div>
                                Admin Login
                            </span>                      
                            <div class="wrap-input100">
                                <input class="input100" type="text" {...empid} name="empid"  placeholder="Employee ID" required/>
                                
                                <span class="symbol-input100">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>
        
                            <div class="wrap-input100 ">
                                <input class="input100" type="password" {...password} name="password"  placeholder="Password" required/>                               
                                <span class="symbol-input100">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>                                                  
                            <div class="container-login100-form-btn">
                            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
                            <button class="login100-form-btn" value={loading ? 'Loading...' : 'Login'}  disabled={loading}>
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                            </div>
                            
        
                            <div class="text-center p-t-12">
                                <span class="txt1">
                                    Forgot
                                </span>
                                <a class="txt2" href="#">
                                    Username / Password?
                                </a>
                            </div>
                            <Link to="/register">
                            <div class="text-center p-t-12">
                                <a class="txt3">
                                    Create your Account
                                    <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                            </Link>
        
                        
                        </form>
                    </div>
                </div>
            </div>
    );

}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    
    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;