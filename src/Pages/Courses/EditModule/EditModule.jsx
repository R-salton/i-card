import React from 'react'
import { useState } from 'react';

import {
    Button,
    Dialog,
    DialogBody,
  } from "@material-tailwind/react";
  
  import RegisterModuleForm from './EditModuleForm';
import EditModuleForm from './EditModuleForm';
import { modulesData } from '../../../Data';
  
function EditModule({id}) {
 
const [size, setSize] = useState(null);
 
  const handleOpen = (value) => setSize(value);
  const moduleInfo = modulesData.find((module)=> module.id === id);

  console.log(moduleInfo);
  
    return (
      <div className=' edit_module'>
        <button className='add_module_button edit_module_button' onClick={() => handleOpen("lg")} variant='gradient'>
        <i class="ri-edit-line icon"></i>
        </button>
        <Dialog open={size === "lg"} size={size || "lg"} style={{outline:'none'}} >
       
        <DialogBody style={{padding: '0'}}>
         <EditModuleForm handleOpen={handleOpen} moduleInfo={moduleInfo} id={id} />
        </DialogBody>
        
      </Dialog>
      </div>
  
    )
  }
  

  export default EditModule