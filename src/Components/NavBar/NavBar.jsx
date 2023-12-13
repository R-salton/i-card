import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

function NavBar({user}) {
  return (
    <div className='container'>
        <div className='logo_content'>
       

            <h4><span className='i'>i</span><span className='_logo'>card</span></h4>
            <h6><i>ATTENDANCE MONITORING</i></h6>
        
        </div>
            <div className='nav_links'>
                <ul>
                {
                    user ? <li>Logout</li> : <Link to='/login'><li>Login</li></Link>
                }
                    
                    <li>
                        About
                    </li>
                    <li>
                        Help
                    </li>
                   

                    {
                        user ?  (<><span></span><li className='user_name'>Hi HOD John!</li></>): <></>
                    }
                </ul>
            </div>
    </div>
  )
}

export default NavBar