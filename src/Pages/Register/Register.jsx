import React from 'react';
import './Register.scss';
import { TfiWrite } from "react-icons/tfi";
import { MdOutlineAssignmentInd } from "react-icons/md";

const Register = () => {
  return (
    <div className='login'>
      <div className='left'>
      <i class="ri-user-add-line icon"></i>
      </div>

      <div className='form'>
      <div className='title'>

        <h1>Register User/ Staff</h1>
      </div>
        {/* Login Form */}
        <form>
            <div className='names'>
              <input type='text' name='firstName' id='fname' placeholder='Surname' />
              <input type='text' name='lastName' id='lname' placeholder='First Name'/>
            </div>
            <input type='password' name='password' placeholder='Password' />
            <input type='tel' name='phone' placeholder='Phone' />
            <input type='email' name='email' placeholder='Email' />

            <div className='select'>
            <select name='role' value='Role' onChange=''>
                  <option>DIN</option>
                  <option>HOD</option>
                  <option>LECTURER</option>
            </select>

            <div className='icon_container'>
                  <i className='ri-arrow-drop-down-line'></i>
            </div>
            </div>

            
            <div className='buttons'>
                <p className='cancel' onClick=''>
                  CANCEL
                </p>
                <button className='submit_btn' type='submit'>
                  SUBMIT
                </button>
              </div>
        </form>
      </div>
    </div>
  )
}

export default Register