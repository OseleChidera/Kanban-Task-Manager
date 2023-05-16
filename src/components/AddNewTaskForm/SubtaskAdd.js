
import React,{useContext, useState , useRef , useEffect} from 'react'
import { context } from '../../context'
import  Cross from '../../assets/icon-cross.svg'

export default function SubtaskAdd({subtask,setSubtask}) {
  const {column ,displayForm ,setDisplayForm , selectedTask ,displayEditForm ,setDisplayEditForm, subTaskComponent , subtaskList , setSubtaskList , addSubtaskComponent , deleteSubtaskComponent} = useContext(context)
  return (
              <div className="sub-task">
               <input 
               type="text" 
               className="subtask-text inputs" 
               placeholder="e.g. Drink coffee & smile" 
               value={subtask} 
            //    onChange={()=>setSubtask(subtask[])}
               />
               <button
               onClick={(e)=>deleteSubtaskComponent(e)}
                style={{border:'none' , backgroundColor: 'inherit'}}>
                  <img src={Cross} alt='close' className='close-icon' />
                </button>
               </div>
  )
}







// function Subtask({subtask,setSubtask}) {
//    const {column ,displayForm ,setDisplayForm , selectedTask ,displayEditForm ,setDisplayEditForm, subTaskComponent , subtaskList , setSubtaskList , addSubtaskComponent , deleteSubtaskComponent} = useContext(context)
//   return (
//     <div className="sub-task">
//                <input 
//                type="text" 
//                className="subtask-text inputs" 
//                placeholder="e.g. Drink coffee & smile" 
//                value={subtask} 
//             //    onChange={()=>setSubtask(subtask[])}
//                />
//                <button
//                onClick={()=>deleteSubtaskComponent()}
//                 style={{border:'none' , backgroundColor: 'inherit'}}>
//                   <img src={Cross} alt='close' className='close-icon' />
//                 </button>
//                </div>
//   )
// }
