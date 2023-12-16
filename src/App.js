
import NavBar from './Components/NavBar/NavBar';

import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import SideNav from './Components/SideNav/SideNav';
import Modules from './Pages/Courses/Display_Modules/Modules';
import RegisterModule from './Pages/Courses/Register_Module/RegisterModuleForm';
import WorkLoads from './Pages/Courses/WorkLoads/DisplayWorkLoads/WorkLoads';
import CreateWorkLoad from './Pages/Courses/WorkLoads/addWorkLoads/CreateWorkLoad';
import Home from './Pages/Home/Home';
import { useState,useEffect } from 'react';
import Lecturers from './Pages/Lecturers/Display_Lecturers/Lecturers';
import Groups from './Pages/Students/Groups';
import Attendance from './Pages/Attendance/Attendance';

function App() {

  const [isUserSalton, setIsUserSalton] = useState(true);

  const handleLogin = ()=>{

    setIsUserSalton(!isUserSalton);
  }

 


  return (
    <div className="main_wrapper">

    {/* ===============| Top Nav |================ */}
    <NavBar user={isUserSalton} />

      <section className='main_page'>

      {/* ===========| Side Nav |==================*/}
      {
        isUserSalton ? <SideNav /> : <></>
      }
      
      <div className='contents_wrapper'>
        <Routes>
       

          
          {
            isUserSalton ?  
            <>

              <Route path='/' element={<Home />} />
              <Route path='/modules' element={<Modules />} />
              <Route path='/workloads' element={<WorkLoads />} />
              <Route path='/createworkload' element={<CreateWorkLoad />} />
              <Route path='/lecturers' element={<Lecturers />} />
              <Route path='/students-groups' element={<Groups />} />
              <Route path='/attendance' element={<Attendance />} />
            </>
            :<>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login handleLogin={handleLogin} />} />
            <Route path='*' element={<Navigate to='/login' />} />
            </>
          }
          
          {/* <Route path='/modules/register' element={<RegisterModule />} className="module_register" /> */}
        </Routes>
      </div>
      </section>
      <h>Footer</h>
    </div>
  );
}

export default App;
