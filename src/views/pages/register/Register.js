import React from 'react';
import { Link } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = () => {
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
                
            </div>

            <form class="login100-form" onSubmit="#">
                <span class="login100-form-title"><div class="logo"></div>
                    Admin Login
                </span>                      
                <div class="wrap-input100">
                    <input class="input100" type="text" name="empid" placeholder="Employee ID" required/>
                    
                    <span class="symbol-input100">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="wrap-input100">
                    <input class="input100" type="text" name="empid" placeholder="Employee ID" required/>
                    
                    <span class="symbol-input100">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="wrap-input100">
                    <input class="input100" type="text" name="empid" placeholder="Employee ID" required/>
                    
                    <span class="symbol-input100">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="wrap-input100 ">
                    <input class="input100" type="password" name="password" placeholder="Password" required/>                               
                    <span class="symbol-input100">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>                                                  
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn">
                        Sign Up
                    </button>
                </div>
                

                
                <Link to="/login2">
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

export default Register
