
import { useEffect, useState } from 'react';
import SearchBar from '../../../Components/Search/SearchBar';
import { modulesData } from '../../../Data';
import Pagination from '../../../Components/Pagination/Pagination';
import './Modules.scss'
import RegisterModuleForm from '../Register_Module/RegisterModule';
import RegisterModule from '../Register_Module/RegisterModule';

const Modules = () => {

 
  const [currentPage, setCurrentPage] = useState(1);
  const ModulesPerPage = 10;
// Handle pagination change
const onPageChange = (page) => {
  setCurrentPage(page);

};

  const totalModules = modulesData.length;
  const indexOfLastModule = currentPage * ModulesPerPage;
  const indexOfFirstModule = indexOfLastModule - ModulesPerPage;
  const currentModules = modulesData.slice(indexOfFirstModule, indexOfLastModule);
  const [modulesToDisaplay, setModules_toDisplay] = useState([]);

  

  useEffect(() => {
    const getData = async () => {
     
      setModules_toDisplay(currentModules);
    };
    getData();
  }, []);

  
   // Handle search
   const handleSearch = (searchTerm) => {
    if(searchTerm === ''){
      setModules_toDisplay(currentModules)

    }
    else{

      const filteredModules = modulesToDisaplay.filter((module) =>
        module.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setModules_toDisplay(filteredModules)
    }

   };

  

  
 
  return (
    <div className='module_container'>

    <div className='modules_header'>
      <SearchBar onSearch={handleSearch} totalModules={totalModules} modules={modulesToDisaplay}/>
        <RegisterModule className='' />
    </div>

      <table className='table'>
      <tr className='table_header'>
        <th>TITLE</th>
        <th>CODE</th>
        <th>SHORT</th>
        <th>TEACHING MODE</th>
      </tr>
        {
modulesToDisaplay.map((module) =>{
            return (
              
              <tr key={module.id}>
        <td className='module_title'> <input type="checkbox" /> <span>{module.title}</span></td>
        <td>{module.code}</td>
        <td>{module.short}</td>
        <td>{module.teachingMode}</td>
      </tr>
            )
          })
        }
      </table>
      
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(modulesData.length / ModulesPerPage)}
        onPageChange={onPageChange}
      />
    </div>
  )
}

export default Modules