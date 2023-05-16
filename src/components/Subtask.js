import React,{useContext} from 'react'
import  Cross from '../assets/icon-cross.svg'
import deleteSubtaskComponent from '../App'
import { context } from '../context'
export default function Subtask({subtask}) {
   const {deleteSubtaskComponent} = useContext(context)
  return (
    <div className="sub-task" key={subtask.trim()}>
               <input 
               type="text" 
               className="subtask-text inputs" 
               placeholder="e.g. Drink coffee & smile" 
               value={subtask} 
            //    onChange={()=>{[...selectedsubtask, selectedsubtask[selectedsubtask.indexOf(subtask)] newValue ]}}
               />
               <button 
               onClick={(e)=>deleteSubtaskComponent(e)}
               style={{border:'none' , backgroundColor: 'inherit'}}><img src={Cross} alt='close' className='close-icon' /></button>
               </div>
  )
}
