import React from 'react'
import './Attendance.scss';

const Attendance = () => {
  return (
    <div className='attendance_contents'>

    {/* Top Filters */}
      <div className='top_items'>
        <h1>Attendance 10</h1>
         <div className='top_filter'>
          
        <div className='filter_inputs'>
          <label htmlFor='academicYear'>Academic Year</label>
          <div className='select'>
                  <select className='' name="academicYear" id="academicYear">
                  <option value="2021-2022"></option>
                  <option value="2021-2022">2021-2022</option>
                  <option value="2021-2022">2022-2023</option>
                  </select>
                <div className='icon_container'>
                        <i className='ri-arrow-drop-down-line'></i>
                </div>

          </div>
         </div>

         <div  className='filter_inputs'>
          <label htmlFor='academicYear'>Period</label>
          <div className='select'>
          <select className='' name="academicYear" id="academicYear">
          <option value="2021-2022"></option>
          <option value="2021-2022">Semester 1</option>
          <option value="2021-2022">Semester 2</option>
          </select>
          <div className='icon_container'>
                  <i className='ri-arrow-drop-down-line'></i>
          </div>

          </div>
         </div>

         </div> 
      </div>

      {/* Other filter */}
    <div className='other_filters'>
        <div className='filter_inputs course'>
          <label htmlFor='academicYear'>Course Name</label>
          <div className='select'>
                  <select className='' name="academicYear" id="academicYear">
                  <option value="2021-2022">Programming Languages</option>
                  <option value="2021-2022">Java Script</option>
                  <option value="2021-2022">Python</option>
                  <option value="2021-2022">C++</option>
                  </select>
                <div className='icon_container'>
                        <i className='ri-arrow-drop-down-line'></i>
                </div>

          </div>
        </div>

        <div className='filter_inputs'>
          <label htmlFor='studentsGroup'>Students Group</label>
          
                  <select className='' name="studentsGropu" id="studentsGroup">
                  <option value="2021-2022">Year 1</option>
                  <option value="2021-2022">Year 2</option>
                  <option value="2021-2022">Year 3</option>
                  </select>

        </div>

        <div className='filter_inputs'>
          <label htmlFor='faculty'>Faculty</label>
          
                  <select className='' name="faculty" id="faculty">
                  <option value="2021-2022"></option>
                  <option value="2021-2022">CSC</option>
                  <option value="2021-2022">IT</option>
                  <option value="2021-2022">IS</option>
                  </select>

        </div>
       

        <div className='filter_inputs'>
          <label htmlFor='department'>Department</label>
          
                  <select className='' name="department" id="department">
                  <option value="2021-2022"></option>
                  <option value="2021-2022">Infomation Technlogy</option>
                  <option value="2021-2022">Computer Science</option>
                  </select>

        </div>

        
    </div>

    {/* Time Filters */}

    <div className='date_filters'>
    
      <div className='filter'>
        <label htmlFor='date'>Date</label>
        <input type='date' placeholder='Date'/>
      </div>

       <div className='filter'>
        <label htmlFor='time'>Date</label>
        <input type='time' placeholder='07:00' value='07:00'/>
      </div>

      <p>To</p>

      <div className='filter'>
        <label htmlFor='time'>Date</label>
        <input type='time' placeholder='08:30' value='08:00'/>
      </div>

      <div className='filter'>
        <label htmlFor='time'>Room</label>
        <input type='text' placeholder='Room' />
      </div>

    </div>

    </div>
  )
}

export default Attendance