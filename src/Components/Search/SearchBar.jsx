// src/components/SearchBar.js
import React, { useEffect, useState } from 'react'
import './SearchBar.scss'
import {FiSearch}  from 'react-icons/fi'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
function SearchBar({onSearch,totalModules, modules}) { 

  console.log(totalModules);

  const[SearchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) =>{
    const newData = e.target.value
    onSearch(newData);
  }
  return (
    <div className='search-tab'>
    <h6>Modules <span>{totalModules}</span></h6>
    <div className='search-items'>
      <input type='text' placeholder='Search...'  onChange={handleSearch} />
     
    </div>
    </div>
    
  )
}

export default SearchBar
