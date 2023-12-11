
import NavBar from './Components/NavBar/NavBar';

import { Routes, Route } from 'react-router-dom';
import './App.scss'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import SideNav from './Components/SideNav/SideNav';
import Modules from './Pages/Courses/Display_Modules/Modules';
import RegisterModule from './Pages/Courses/Register_Module/RegisterModuleForm';
import WorkLoads from './Pages/Courses/WorkLoads/DisplayWorkLoads/WorkLoads';
import CreateWorkLoad from './Pages/Courses/WorkLoads/addWorkLoads/CreateWorkLoad';

function App() {
  return (
    <div className="main_wrapper">

    {/* ===============| Top Nav |================ */}
    <NavBar />

      <section className='main_page'>

      {/* ===========| Side Nav |==================*/}
      <SideNav />
      <div className='contents_wrapper'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/modules' element={<Modules />} />
          <Route path='/workloads' element={<WorkLoads />} />
          <Route path='/createworkload' element={<CreateWorkLoad />} />
          {/* <Route path='/modules/register' element={<RegisterModule />} className="module_register" /> */}
        </Routes>
      </div>
      </section>
      <h>Footer</h>
    </div>
  );
}

export default App;
