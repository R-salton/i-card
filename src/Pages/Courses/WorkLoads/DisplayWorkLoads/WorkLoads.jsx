
import { useEffect, useState } from 'react';
import { workLoads } from '../../../../Data';
import Pagination from '../../../../Components/Pagination/Pagination';
import './WorkLoads.scss'
import RegisterModule from '../../Register_Module/RegisterModule';

import EditModule from '../../EditModule/EditModule';
import Model from '../../../../Components/Model/Model';
import { Link } from 'react-router-dom';
import EditWorkload from '../editWorkLoads/EditWorkload';

const WorkLoads = () => {

 
  const workLoadsPerPage = 8;
  const [currentPage, setCurrentpage] = useState(1);

//Handle pagination change
const onPageChange = (page) => {
 
  setCurrentpage(page);

  console.log(typeof(page));

};

  const totalWorkLoads = workLoads.length;
  const indexOfLastModule = currentPage * workLoadsPerPage;
  console.log(indexOfLastModule);
  const indexOfFirstModule = indexOfLastModule - workLoadsPerPage;
  const currentWorkloads = workLoads.slice(indexOfFirstModule, indexOfLastModule);
  const [workLoadsToDisaplay, setWorkLoads_toDisplay] = useState([]);

  const totalPages = Math.ceil(totalWorkLoads/workLoadsPerPage);

  useEffect(() => {
    const  getData = async () => {
     
      setWorkLoads_toDisplay(currentWorkloads);
    };
    getData();
  }, [currentPage]);

  
   // Handle search
   const handleFilter = (e) => {

    const filteredWorkLoads = currentWorkloads.filter((workLoad) =>
    workLoad.moduleName.toLowerCase().includes(e.target.value.toLowerCase())
  );

    if( e.target.value === ''){
      setWorkLoads_toDisplay(currentWorkloads);

    } else{
      
       setWorkLoads_toDisplay(filteredWorkLoads)
      
    }

    

   };

  

  
 
  return (
    <div className='module_container'>

    <div className='modules_header'>
    <div className='search-tab'>
    <h6>WorkLoads <span>{totalWorkLoads}</span></h6>
    <div className='search-items'>
      <input type='text' placeholder='Search...'  onChange={handleFilter} />
      <i class="ri-search-line icon"></i>
    </div>
    </div>
       {/* <Model title={'Workloads'}  subject={<h1>Hello</h1>}/> */}
       <Link to='/createworkload'>
       <button>Create Workload</button>

       </Link>
    </div>

      <table className='table'>
      <tr className='table_header'>
        <th>MODULE CODE</th>
        <th>MODULE NAME</th>
        <th>DEPARTMENT</th>
        <th>PROGRAM</th>
        <th>GROUP</th>
        <th>Action</th>
      </tr>
        {
            workLoadsToDisaplay.map((workLoad ) =>{

      return (
              
          <tr key={workLoad.id}>
            <td className='module_title '><input type="checkbox" /> <span>{workLoad.moduleCode}</span></td>
            <td>{workLoad.moduleName}</td>
            <td>{workLoad.department}</td>
            <td>{workLoad.program}</td>
            <td>{workLoad.group}</td>
            <td><EditWorkload id={module.id} / ></td>

          </tr>
      )})
        }
      </table>
      
      <Pagination itemsPerpage={workLoadsPerPage} totalPages={totalPages} handlePageChange={onPageChange} currentPage={currentPage} />
    </div>
  )
}

export default WorkLoads