import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';
import { setUserSession } from '../../../utils/session';
import {apiBase} from '../../../services/Rest';




const Login = (props) => {


    const history = useHistory();

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
            setUserSession(response.data.token, response.data.userData.username);
            console.log(response.data.userData);
            history.push('/dashboard');
        }).catch(error => {
        setLoading(false);
        if (error.response.status === 401) setError(error.response.data.err.message);
        else setError("Something went wrong. Please try again.");
    });
    }



    return (
    <div className="limiter">
                <div className="container-login100">
                    <div className
                    ="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            
                        </div>
        
                        <form className="login100-form" onSubmit={handleLogin}>
                            <span className="login100-form-title"><div className="logo"></div>
                                Admin Login
                            </span>                      
                            <div className="wrap-input100">
                                <input className="input100" type="text" {...empid} name="empid"  placeholder="Employee ID" required/>
                            </div>
        
                            <div className="wrap-input100 ">
                                <input className="input100" type="password" {...password} name="password"  placeholder="Password" required/>                               
                            </div>                                                  
                            <div className="container-login100-form-btn">
                            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
                            <button className="login100-form-btn" value={loading ? 'Loading...' : 'Login'}  disabled={loading}>
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                            </div>
                            
        
                            <div className="text-center p-t-12">
                                <span className="txt1">
                                    Forgot
                                </span>
                                <a className="txt2">
                                    Username / Password?
                                </a>
                            </div>
                            <Link to="/register">
                            <div className="text-center p-t-12">
                                <div className="txt3">
                                    Create your Account
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </div>
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