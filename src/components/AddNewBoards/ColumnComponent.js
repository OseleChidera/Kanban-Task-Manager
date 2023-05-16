import React,{useContext, useState , useRef , useEffect} from 'react'
import { context } from '../../context'
import  Cross from '../../assets/icon-cross.svg'

export default function ColumnComponent() {
    
  return (
    <div className="column">
               <input 
               type="text" 
               className="column-text inputs" 
               placeholder="e.g. Drink coffee & smile" 
            //    value={subtask} 
            //    onChange={()=>setSubtask(subtask[])}
               />
               <button
            //    onClick={(e)=>deleteSubtaskComponent(e)}
                style={{border:'none' , backgroundColor: 'inherit'}}>
                  <img src={Cross} alt='close' className='close-icon' />
                </button>
            </div>
  )
}
