import React from 'react'
import { PiUsersThreeThin, PiChalkboardTeacherThin  } from "react-icons/pi";
import { GiBookshelf, GiTeacher } from "react-icons/gi";
import { TbReport } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
function SideNav() {
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
              <div className='name_icon'>
              <i class="ri-layout-grid-fill"></i>
              <h5>Dashboard</h5>
              </div>
              <i class="ri-arrow-down-s-line"></i>
            </div>
            
            <div className='nav_link'>
              <div className='name_icon'>
              <PiChalkboardTeacherThin className='icon' />
              <h5>Attendance</h5>
              </div>
              <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className='nav_link'>
              <div className='name_icon'>
              <GiTeacher className='icon' />
              <h5>Student groups</h5>
              </div>
              <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className='nav_link'>
              <div className='name_icon'>
                <PiUsersThreeThin className='icon' />
              <h5>Lecturers</h5>
              </div>
              <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className='nav_link'>
              <div className='name_icon'>
              <GiBookshelf className='icon' />
              <h5>Courses</h5>
              </div>
              <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className='nav_link'>
              <div className='name_icon'>
              <TbReport className='icon' />
              <h5>Reports</h5>
              </div>
              <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className='nav_link'>
              <div className='name_icon'>
              <i class="ri-settings-5-line"></i>
              <h5>Settings</h5>
              </div>
              <i class="ri-arrow-down-s-line"></i>
            </div>
            
            
          </div>
      </div>
  )
}

export default SideNav