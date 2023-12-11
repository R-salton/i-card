import React, { useState } from 'react'
import './CreateWorkLoad.scss'
import { input } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const CreateWorkLoad = () => {

const [moduleSet, setModuleSet] = useState([{id: 1}]);

// Add Module div
const handleAddModule = () => {
  setModuleSet([...moduleSet,{id: moduleSet.length + 1}]);

};

// Remove Module div

const handleRemoveModule = (moduleId) => {
  const updatedModules = moduleSet.filter((module) => module.id !== moduleId);
  setModuleSet(updatedModules);
};

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
      {
        moduleSet.map((module,index) =>{
          return (
            <div className='bottom_inputs' index={module.id}>
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
      
      
      {index === moduleSet.length - 1 && (
            <p className='add_btn' onClick={handleAddModule}>
              <i className="ri-add-fill"></i> Add Module
            </p>
          )}
          {index !== moduleSet.length - 1 && (
            <button className='remove_btn ' onClick={() => handleRemoveModule(module.id)}>
            <i class="ri-close-fill"></i>
            </button>
          )}
      </div>
          )
        })
      }
     
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