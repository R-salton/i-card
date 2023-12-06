import React from 'react'
import { useState } from 'react';

import {
    Button,
    Dialog,
    DialogBody,
  } from "@material-tailwind/react";
  
  import './Model.scss'

  
function Model({title, subject}) {
 
const [size, setSize] = useState(null); 
 
  const handleOpen = (value) => setSize(value);
  
    return ( 
      <div className='add_module'>
        <button className='add_module_button' onClick={() => handleOpen("lg")} variant='gradient'>
        <i class="ri-add-fill"></i> {title}
        </button>
        <Dialog open={size === "lg"} size={size || "lg"} style={{outline:'none'}} >
       
        <DialogBody style={{padding: '0'}}>
         {subject}
        </DialogBody>
       
         <div className='buttons'>
        <p className='cancel' onClick={handleOpen}>
          CANCEL
        </p>
        <button className='submit_btn' type='submit'>
          REGISTER
        </button>
      </div>
      </Dialog>
      </div>
  
    )
  }
  

  export default Model