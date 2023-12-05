import React from 'react'
import './Navbar.scss'

function NavBar() {
  return (
    <div className='container'>
        <div className='logo_content'>
       

            <h4><span className='i'>i</span><span className='_logo'>card</span></h4>
            <h6><i>ATTENDANCE MONITORING</i></h6>
        
        </div>
            <div className='nav_links'>
                <ul>
                    <li>
                        Logout
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Help
                    </li>
                    <span></span>
                    <li className='user_name'>
                        Hi HOD John!
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default NavBar