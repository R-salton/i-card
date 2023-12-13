import React from 'react'
import './Login.scss';
import { IoLogInOutline } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Login = ({handleLogin}) => {

  return (
    <div className='login'>
      <div className='left'>
        <CiLogin className='icon' />
      </div>

      <div className='form'>
      <div className='title'>

        <h1>Login</h1>
      </div>
        {/* Login Form */}
        <form>
            <input type='text' name='userName' placeholder='Username' />
            <input type='password' name='userName' placeholder='Password' />
            <select name='perion' value='Role' onChange=''>
                  <option>DIN</option>
                  <option>HOD</option>
                  <option>LECTURER</option>
            </select>

            {/* Have an account? or Forgotten password */}
            <div className='quick_links'>
            <Link to='/register'> <p>Haven't an account?</p></Link>
             
              <span></span>
              <p>Forgotten Username or Password?</p>
            </div>
            <button className='login_btn' type='submit' onClick={handleLogin}>LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default Login