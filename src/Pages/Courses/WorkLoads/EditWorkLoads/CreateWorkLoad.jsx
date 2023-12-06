import React from 'react'
import './CreateWorkLoad.scss'
import { input } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const CreateWorkLoad = () => {
  return (
    <div className='container_workload'>
      <h1>Create Work Load</h1>
      <form className='form'>
      <div className='top_inputs'>   
      <div className='input'>

      <label for='moduleTitle'>Student Group </label>
      <select name="cars" id="cars">
        <option value="sudentGroup">Student group</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      </div> 
      <p>Edit Student list</p>
      <div className='input'>

        <label for='moduleTitle'>Academic Year </label>
        <select name="cars" id="cars">
        <option value="sudentGroup">Academic Year</option>
        <option value="saab">Option 1</option>
        <option value="mercedes">Option 2</option>
        <option value="audi">Option 3</option>
      </select>
      </div>  
      <div className='input'>

          <label for='moduleTitle'>Study Period</label>
          <select name="cars" id="cars">
        <option value="sudentGroup">Study Period</option>
        <option value="saab">Period 2</option>
        <option value="mercedes">Period 3</option>
        <option value="audi">Period 4</option>
      </select>
      </div> 

      </div>
      <div className='bottom_inputs'>
      <div className='inputs'>

      <label for='moduleTitle'>Module </label>
      <select name="cars" id="cars">
        <option value="sudentGroup"></option>
        <option value="saab">MOdule 1</option>
        <option value="mercedes">Module 2</option>
        <option value="audi">Module 3</option>
      </select>
      </div>
      <div className='inputs'>

      <label for='moduleTitle'>Number of sessions </label>
     <input name='sessions' placeholder='Sessions'/>
      </div>
      <div className='inputs'>

      <label for='moduleTitle'>Total Hours </label>
     <input name='totalHours' placeholder='Hours'/>
      </div>

      <div className='inputs'>

      <label for='moduleTitle'>Lecturer </label>
      <select name="cars" id="cars">
        <option value="sudentGroup"></option>
        <option value="saab">Lecturer 1</option>
        <option value="mercedes">Lecturer 2</option>
        <option value="audi">Lecturer 3</option>
      </select>
      </div>
      
      <p className='add_btn'><i class="ri-add-fill"></i> Add Module</p>

      </div>
      <div className='action_buttons'>
      <Link to='/workloads'>
        <button className='cancel_btn'>CANCEL</button>
      </Link>
      <button className='submit_btn' type='submit'>CREATE WORKLOAD</button>
      </div>
      </form>
    </div>
  )
}

export default CreateWorkLoad