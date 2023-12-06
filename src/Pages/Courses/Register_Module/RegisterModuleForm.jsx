import React, { useState } from 'react'
import './RegisterModuleForm.scss';
import { GiBookshelf } from "react-icons/gi";
import { modulesData } from '../../../Data';

function RegisterModuleForm({handleOpen}) {

  const [formData, setFormData] = useState({
    moduleTitle: '',
    moduleCode: '',
    moduleShort: '',
    teachingMode: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedTeachingMode = formData.teachingMode;
    console.log(formData);

    setFormData({
      
        moduleTitle: '',
        moduleCode: '',
        moduleShort: '',
        teachingMode: '',
      
    })


  };

  // Get Teaching modes from modules
  

  function getTeachingModes(modules) {
    const uniqueTeachingModes = [...new Set(modules.map(module => module.teachingMode))];
    return uniqueTeachingModes;
  }
  
  const teachingModes = getTeachingModes(modulesData);

  console.log(teachingModes);

  return (
    <div className='add_module_form'>
  
    <div className='add_module_wrapper'>

      <div className='left'>
        <GiBookshelf className='icon' />
      </div>

      <div className='form'>
      <div className='top'>

      <i class="ri-close-fill icon" onClick={handleOpen} ></i>
      </div>
      <div className='form_contents'>
        <h5>Register module</h5>

      <form onSubmit={handleSubmit}>
      <label htmlFor='moduleTitle'>Module title </label>
      <input
        type='text'
        name='moduleTitle'
        id='moduleTitle'
        placeholder='Module title'
        value={formData.moduleTitle}
        onChange={handleChange}
      />

      <label htmlFor='moduleCode'>Module code </label>
      <input
        type='text'
        name='moduleCode'
        id='moduleCode'
        placeholder='Code'
        value={formData.moduleCode}
        onChange={handleChange}
      />

      <label htmlFor='moduleShort'>Module Short title </label>
      <input
        type='text'
        name='moduleShort'
        id='moduleShort'
        placeholder='Short'
        value={formData.moduleShort}
        onChange={handleChange}
      />

      <label htmlFor='teachingMode'>Teaching mode </label>
      <div className='select'>
        <select
          name='teachingMode'
          value={formData.teachingMode}
          onChange={handleChange}
        >
        <option value=''>Teaching mode</option>
        {
          teachingModes.map((mode)=>{
            return(<option value={mode}>{mode}</option>)
          })
        }
          
          
        </select>
        <div className='icon_container'>
          <i className='ri-arrow-drop-down-line'></i>
        </div>
      </div>

      <div className='buttons'>
        <p className='cancel' onClick={handleOpen}>
          CANCEL
        </p>
        <button className='submit_btn' type='submit'> 
          REGISTER
        </button>
      </div>
    </form>
      </div>
      </div>

    </div>
    </div>

  )
}

export default RegisterModuleForm