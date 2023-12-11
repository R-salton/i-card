import React, { useState } from 'react'
import './EditWorkloadForm.scss';
import { GiBookshelf } from "react-icons/gi";
import { workLoads } from '../../../../Data';

function EditWorkloadForm({handleOpen, workLoadfo,id}) {

  // const [formData, setFormData] = useState({
  //   moduleTitle: moduleInfo.title,
  //   moduleCode: moduleInfo.code,
  //   moduleShort: moduleInfo.short,
  //   teachingMode: moduleInfo.teachingMode,
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const selectedTeachingMode = formData.teachingMode;
  //   console.log(formData);



  //   setFormData({
      
  //       moduleTitle: '',
  //       moduleCode: '',
  //       moduleShort: '',
  //       teachingMode: '',
      
  //   })


  // };

  // Get Teaching modes from modules
  

  function getTeachingModes(modules) {
    const uniqueTeachingModes = [...new Set(modules.map(module => module.teachingMode))];
    return uniqueTeachingModes;
  }
  
  
  

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
        <h5>Edit Workload</h5>

      <form onSubmit=''>
      <label htmlFor='moduleTitle'>Module title </label>
      <input
        type='text'
        name='moduleTitle' 
        id='moduleTitle'
        placeholder='Module title'
        value=''
        onChange=''
      />

      <label htmlFor='moduleCode'>Module code </label>
      <input
        type='text'
        name='moduleCode'
        id='moduleCode'
        placeholder='Code'
        value=''
        onChange=''
      />

      <label htmlFor='moduleShort'>Module Short title </label>
      <input
        type='text'
        name='moduleShort'
        id='moduleShort'
        placeholder='Short'
        value=''
        onChange=''
      />

      <label htmlFor='teachingMode'>Teaching mode </label>
      <div className='select'>
        <select
          name='teachingMode'
          value=''
          onChange=''
        >
       
          
          
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
          SAVE CHANGES
        </button>
      </div>
    </form>
      </div>
      </div>

    </div>
    </div>

  )
}

export default EditWorkloadForm