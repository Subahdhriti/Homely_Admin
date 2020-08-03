import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { setUserSession } from '../../../utils/session';
import {apiBase} from '../../../API/api';


const Register = (props) => {

    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const email = useFormInput('');
    const phoneNo = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);



    const handleSignup = (e) => {
        
        e.preventDefault();
        setError(null);
        setLoading(true);
        axios.post(apiBase+'/admin/registerUser', { username: username.value, email: email.value, phoneNo: phoneNo.value, password: password.value }).then(response => {
            setLoading(false);
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

            <form class="login100-form" onSubmit={handleSignup}>
                <span class="login100-form-title"><div class="logo"></div>
                    Admin Login
                </span>                      
                <div class="wrap-input100">
                    <input class="input100" type="text" {...username} name="username" placeholder="Username" required/>
                </div>

                <div class="wrap-input100">
                    <input class="input100" type="email" {...email} name="email" placeholder="Email ID" required/>
                </div>

                <div class="wrap-input100">
                    <input class="input100" type="tel" {...phoneNo} pattern="[0-9]{10}" name="phoneNo" placeholder="Phone No" required/>  
                </div>

                <div class="wrap-input100 ">
                    <input class="input100" type="password" {...password} name="password" placeholder="Password" required/>                               
                </div>  
                <div class="wrap-input100 ">
                    <input class="input100" type="password" name="conpassword" placeholder="Confirm Password" required/>                               
                </div>                                                 
                <div class="container-login100-form-btn">
                    {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
                    <button class="login100-form-btn" value={loading ? 'Loading...' : 'Login'}  disabled={loading}>
                        {loading ? 'Loading...' : 'Sign Up'}
                    </button>
                </div>
                
                <Link to="/login">
                <div class="text-center p-t-12">
                    <a class="txt3">
                        Login
                        <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                    </a>
                </div>
                </Link>

            
            </form>
        </div>
    </div>
</div>
)

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


export default Register;
