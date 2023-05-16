import React,{useContext, useState , useRef , useEffect} from 'react'
import { context } from '../../context'
import './editboard.css'

import  Add from '../../assets/icon-add-task-mobile.svg'

export default function EditBoard() {
    const {column ,displayForm ,setDisplayForm , selectedTask ,displayEditForm ,setDisplayEditForm, subTaskComponent , subtaskList , setSubtaskList , addSubtaskComponent , deleteSubtaskComponent} = useContext(context)
//     const inputRef = useRef(null);
//       useEffect(() => {
//     inputRef.current.focus();
//   }, []);
    const [title , setTitle] = useState('')
    const [desc , setDesc] = useState('')
    
   
  return (
    <div className='dialog' onClick={(event)=> {
        if (event.target === event.currentTarget){
        setDisplayForm(displayForm => false)}
    }}>
    <form className="form-add-Task">
        <span>add new board</span>
        <div className="title-div section">
            <label htmlFor='title' className='title'>board name</label>
            <input 
            type="text" 
            id='title' 
            className='title-input inputs' 
            placeholder='e.g. take a coffee break'
            // ref={inputRef}
            value={title}
            onChange={()=>setTitle((title)=> title)}
            />
        </div>
        <div className="section">
            <span className='title'>board columns</span>
            <div className="subtask-div">
            {subtaskList.map((subtask)=> <>subtask</>)}
            <button className="add-new-subtask"
            onClick={(e)=>addSubtaskComponent(e)}>
                <span className='inner-button'>
                <img src={Add} alt='add' className='add-icon' />
                <span className="add-subtask-text">add new board</span>
                </span>
            </button>
            </div>
        </div>
        <button className='create-task'>create new board</button>
    </form>
    </div>
  )
}


