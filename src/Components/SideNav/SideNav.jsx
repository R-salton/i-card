import React, { useState } from 'react'
import { PiUsersThreeThin, PiChalkboardTeacherThin  } from "react-icons/pi";
import { GiBookshelf, GiTeacher } from "react-icons/gi";
import { TbReport } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
function SideNav() {

  const [dispalyDropDown, setDropDown] = useState({
    reports: false,
    settings: false,
    courses: false,
    lecturers: false,
    studentGroups: false,
    attendence: false,


  });

  const handleToggle = (navLink) =>{
    setDropDown((prevStates) =>{
      const newStates = { ...prevStates, [navLink]: !prevStates[navLink] };

      Object.keys(newStates).forEach((key) => {
        if (key !== navLink) {
          newStates[key] = false;
        }
      });
      return newStates;

      
    })
  }
  return (
    <div className='side_navs'>

      {/* =====================| Profile |======================== */}
        <div className='profile'>
          <img className='profile_picture' src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'  alt='' />
          <h6 className='name'>John</h6>
          <p className='title'>HOD</p>

        </div>

          {/* ===============| Nav Links |================= */}
          <div className='nav_bar'>
            <div className='nav_link'>
              <div className='top_title'>

              <div className='name_icon'>
              <i class="ri-layout-grid-fill"></i>
              <h5>Dashboard</h5>
              </div>
              <i class="ri-arrow-down-s-line"></i>
              </div>
              {/* Add Drop down */}
            </div>
            
            <div className='nav_link' >
              <div className='top_title'>

              <div className='name_icon' onClick={()=>{handleToggle('attendence')}}>
              <PiChalkboardTeacherThin className='icon' />
              <h5>Attendance</h5>
              </div>
              <i class="ri-arrow-down-s-line"></i>
              </div>
              <div className={dispalyDropDown.attendence ? 'drop_down' : 'hide_drop'}>
                <p>Best Data</p>
                <p>Set study period</p>
                <p>Users & Roles</p>
              </div>
            </div>
            <div className='nav_link' >
              <div className='top_title'>

              <div className='name_icon' onClick={()=>handleToggle('studentGroups')}>
              <GiTeacher className='icon' />
              <h5>Student groups</h5>
              </div>
              {
                dispalyDropDown.studentGroups ? <i class="ri-arrow-up-s-line drop_icon"></i> : <i class="ri-arrow-down-s-line drop_icon"></i> 
              }
              
              </div>

              <div className={dispalyDropDown.studentGroups ? 'drop_down' : 'hide_drop'}>
                <p>Best Data</p>
                <p>Set study period</p>
                <p>Users & Roles</p>
              </div>
            </div>

            <div className='nav_link' onClick={()=>handleToggle('lecturers')}>
              <div className='top_title'>

              <div className='name_icon'>
                <PiUsersThreeThin className='icon' />
              <h5>Lecturers</h5>
              </div>
              <i class="ri-arrow-down-s-line"></i>
              </div>
              <div className={dispalyDropDown.lecturers ? 'drop_down' : 'hide_drop'}>
                <p>Best Data</p>
                <p>Set study period</p>
                <p>Users & Roles</p>
              </div>
            </div>

            <div className='nav_link' onClick={()=>handleToggle('courses')}>
              <div className='top_title'>

              <div className='name_icon'>
              <GiBookshelf className='icon' />
              <h5>Courses</h5>
              </div>
              <i class="ri-arrow-down-s-line"></i>
              </div>
              <div className={dispalyDropDown.courses ? 'drop_down' : 'hide_drop'}>
                <p>Best Data</p>
                <p>Set study period</p>
                <p>Users & Roles</p>
              </div>
            </div>

            <div className='nav_link' onClick={()=>handleToggle('reports')}>

              <div className='top_title'>

              <div className='name_icon'>
              <TbReport className='icon' />
              <h5>Reports</h5>
              </div>
              <i class="ri-arrow-down-s-line"></i>
              </div>
              <div className={dispalyDropDown.reports ? 'drop_down' : 'hide_drop'}>
                <p>Best Data</p>
                <p>Set study period</p>
                <p>Users & Roles</p>
              </div>
            </div>

            <div className='nav_link' onClick={() =>handleToggle('settings')}>
            <div className='top_title'>

              <div className='name_icon'>
                <i class="ri-settings-5-line"></i>
                <h5>Settings</h5>
              </div>
              <i class="ri-arrow-down-s-line"></i>
            </div>

              <div className={dispalyDropDown.settings ? 'drop_down' : 'hide_drop'}>
                <p>Best Data</p>
                <p>Set study period</p>
                <p>Users & Roles</p>
              </div>
            </div>
            
            
          </div>
      </div>
  )
}

export default SideNav