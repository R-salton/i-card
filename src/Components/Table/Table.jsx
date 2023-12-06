import React from 'react'
import Pagination from '../Pagination/Pagination'
import { modulesData } from '../../Data'
import './Table.scss'

const Table = ({currentPage,itemsPerpage,totalPages,onPageChange, headerData, Data}) => {
  return (
    <div className='container'>
         <table className='table'> 
      <tr className='table_header'>
        {
          headerData.map((header)=><th>{header}</th>)
        }
      </tr>
        {
            Data.map((data) =>{

      return (
              
          <tr key={data.id}>
            <td className='module_title '> <input type="checkbox" /> <span>{data}</span></td>
            <td>{data}</td>
            <td>{data}</td>
            <td>{data}</td>
            

          </tr>
      )})
        }
      </table>
      
      <Pagination itemsPerpage={itemsPerpage} totalPages={totalPages} handlePageChange={onPageChange} currentPage={currentPage} />
    </div>
    
  )
}

export default Table