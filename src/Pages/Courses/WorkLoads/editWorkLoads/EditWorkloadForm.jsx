import React, { useState } from 'react'
import './EditWorkloadForm.scss';
import { SiBookstack } from "react-icons/si";
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
  

  // function getTeachingModes(modules) {
  //   const uniqueTeachingModes = [...new Set(modules.map(module => module.teachingMode))];
  //   return uniqueTeachingModes;
  // }
  
  
  

  return (
    <div className='edit_workload_form'>
  
      <div className='edit_workload_wrapper'>

        <div className='left'>
          <SiBookstack className='icon' />
        </div>

        <div className='form'>
          <div className='top'>

          <i class="ri-close-fill icon" onClick={handleOpen} ></i>
          </div>
          
          <div className='form_contents'>
            <h5>Edit Workload</h5>

            <form onSubmit=''>
              <div className='top_inputs'>

              <div>
              <label htmlFor='academicYear'>Academic Year </label>
              <div className='select'>
                <select name='academivYear' value='' onChange=''>
                  <option>2021/2023</option>
                  <option>2022/2023</option>
                  <option>2023/2024</option>
                </select>

                <div className='icon_container'>
                  <i className='ri-arrow-drop-down-line'></i>
                </div>
              </div>
              </div>

              <div>
                <label htmlFor='Period'>Period </label>
                <div className='select'>
                <select name='period' value='' onChange=''>
                  <option>Semester 1</option>
                  <option>Semester 2</option>
                  <option>Semester 3</option>
                </select>

                <div className='icon_container'>
                  <i className='ri-arrow-drop-down-line'></i>
                </div>
              </div>
              
              </div>
              </div>


              {/* Select Module */}

              <label htmlFor='moduleTitle'>Module Title </label>
              <div className='select'>
                <select name='moduleTitle' value='' onChange=''>
                <option>Computer Science</option>
                <option>Computer Science</option>
                <option>Computer Science</option>
              
                </select>
                <div className='icon_container'>
                  <i className='ri-arrow-drop-down-line'></i>
                </div>
              </div>

              {/* Credits For credits */}
              <div className='credits_inputs'>
              <div>

              <label htmlFor='credits'>Credits</label>
              <input type='text' name='credits' id='credits' placeholder='Credits' value='' onChange=''/>
              </div>

              <div>

              <label htmlFor='totalHours'>Total totalHours </label>
              <input type='text' name='totalHours' id='totalHours' placeholder='Hours' value='' onChange=''/>
              </div>

              <div>

              <label htmlFor='numberOfSessions'>Number of Sessions </label>
              <input type='text' name='numberOfSessions' id='numberOfSessions' placeholder='Sessions' value='' onChange=''/>
              </div>

              
              </div>
              <label htmlFor='lecturer'>Lecture </label>

              <div className='select'>
                <select name='lecturer' value='' onChange=''>
                <option>John</option>
                <option>Sadev</option>
                <option>Kalisa</option>
              
                </select>
                <div className='icon_container'>
                  <i className='ri-arrow-drop-down-line'></i>
                </div>
              </div>
              
              {/* Groups inputs */}
              <label htmlFor='group'>Group </label>
              <div className='group'>
              <div className='select'>
                <select name='Group' value='' onChange=''>
                  <option>Group 1</option>
                  <option>Group 2</option>
                  <option>Group 3</option>
                </select>

                <div className='icon_container'>
                  <i className='ri-arrow-drop-down-line'></i>
                </div>
              </div>

              <p>Edit students list</p>
              </div>
              
              {/* Action butttons */}
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