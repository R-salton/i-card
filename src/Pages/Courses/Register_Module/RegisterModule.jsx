import React from 'react'
import { useState } from 'react';

import {
    Button,
    Dialog,
    DialogBody,
  } from "@material-tailwind/react";
  
  import RegisterModuleForm from './RegisterModuleForm';
  
function RegisterModule() {

const [size, setSize] = useState(null);
 
  const handleOpen = (value) => setSize(value);
  
    return (
      <div className='add_module'>
        <button className='add_module_button' onClick={() => handleOpen("lg")} variant='gradient'>
        <i class="ri-add-fill"></i> Add module
        </button>
        <Dialog open={size === "lg"} size={size || "lg"} style={{outline:'none'}} >
       
        <DialogBody style={{padding: '0'}}>
         <RegisterModuleForm handleOpen={handleOpen}/>
        </DialogBody>
       
      </Dialog>
      </div>
  
    )
  }
  

  export default RegisterModule