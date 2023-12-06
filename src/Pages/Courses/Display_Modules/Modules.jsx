
import { useEffect, useState } from 'react';
import { modulesData } from '../../../Data';
import Pagination from '../../../Components/Pagination/Pagination';
import './Modules.scss'
import RegisterModule from '../Register_Module/RegisterModule';
import EditModuleForm from '../EditModule/EditModuleForm';
import EditModule from '../EditModule/EditModule';

const Modules = () => {

 
  const ModulesPerPage = 10;
  const [currentPage, setCurrentpage] = useState(1);

//Handle pagination change
const onPageChange = (page) => {
 
  setCurrentpage(page);

  console.log(typeof(page));

};

  const totalModules = modulesData.length;
  const indexOfLastModule = currentPage * ModulesPerPage;
  console.log(indexOfLastModule);
  const indexOfFirstModule = indexOfLastModule - ModulesPerPage;
  const currentModules = modulesData.slice(indexOfFirstModule, indexOfLastModule);
  const [modulesToDisaplay, setModules_toDisplay] = useState([]);

  const totalPages = Math.ceil(totalModules/ModulesPerPage);

  useEffect(() => {
    const  getData = async () => {
     
      setModules_toDisplay(currentModules);
    };
    getData();
  }, [currentPage]);

  
   // Handle search
   const handleFilter = (e) => {

    const filteredModules = currentModules.filter((module) =>
    module.title.toLowerCase().includes(e.target.value.toLowerCase())
  );

    if( e.target.value === ''){
      setModules_toDisplay(currentModules);

    } else{
      
       setModules_toDisplay(filteredModules)
      
    }

    

   };

  

  
 
  return (
    <div className='module_container'>

    <div className='modules_header'>
    <div className='search-tab'>
    <h6>Modules <span>{totalModules}</span></h6>
    <div className='search-items'>
      <input type='text' placeholder='Search...'  onChange={handleFilter} />
      <i class="ri-search-line icon"></i>
    </div>
    </div>
        <RegisterModule className='' />
    </div>

      <table className='table'>
      <tr className='table_header'>
        <th>TITLE</th>
        <th>CODE</th>
        <th>SHORT</th>
        <th>TEACHING MODE</th>
        <th>Action</th>
      </tr>
        {
            modulesToDisaplay.map((module) =>{

      return (
              
          <tr key={module.id}>
            <td className='module_title '> <input type="checkbox" /> <span>{module.title}</span></td>
            <td>{module.code}</td>
            <td>{module.short}</td>
            <td>{module.teachingMode}</td>
            <td><EditModule id={module.id} /></td>

          </tr>
      )})
        }
      </table>
      
      <Pagination ModulesPerPage={ModulesPerPage} totalPages={totalPages} handlePageChange={onPageChange} currentPage={currentPage} />
    </div>
  )
}

export default Modules