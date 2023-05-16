import React,{useContext, useState , useRef , useEffect} from 'react'
import { context } from '../../context'
import './AddNewTaskForm.css'

import  Add from '../../assets/icon-add-task-mobile.svg'

export default function AddNewTaskForm() {
    const {column ,displayForm ,setDisplayForm , selectedTask ,displayEditForm ,setDisplayEditForm, subTaskComponent , subtaskList , setSubtaskList , addSubtaskComponent , deleteSubtaskComponent} = useContext(context)
    const inputRef = useRef(null);
      useEffect(() => {
    inputRef.current.focus();
  }, []);
    const [title , setTitle] = useState('')
    const [desc , setDesc] = useState('')
    
   
  return (
    <div className='dialog' onClick={(event)=> {
        if (event.target === event.currentTarget){
        setDisplayForm(displayForm => false)}
    }}>
    <form className="form-add-Task">
        <h3>add new task</h3>
        <div className="title-div section">
            <label htmlFor='title' className='title'>title</label>
            <input 
            type="text" 
            id='title' 
            className='title-input inputs' 
            placeholder='e.g. take a coffee break'
            ref={inputRef}
            value={title}
            onChange={()=>setTitle((title)=> title)}
            />
        </div>
        <div className="desc section">
            <label htmlFor='desc' className='title'>description</label>
            <textarea 
            name="desc-input" 
            id="desc" 
            className='desc-input' 
            placeholder="e.g. It's always good to take a break. This 15 minute break will  recharge a little."
            value={desc}
            onChange={()=>setDesc((desc)=> desc)}
            ></textarea>
        </div>
        <div className="section">
            <h3 className='title'>Subasks</h3>
            <div className="subtask-div">
            {subtaskList.map((subtask)=> <>subtask</>)}
            <button className="add-new-subtask"
            onClick={(e)=>addSubtaskComponent(e)}>
                <span className='inner-button'>
                <img src={Add} alt='add' className='add-icon' />
                <span className="add-subtask-text">add new subtask</span>
                </span>
            </button>
            </div>
        </div>
        <div className=" status section">
            <h3 className='title'>Status</h3>
            <select id="status">
            <option value="doing">doing</option>
            <option value="todo">todo</option>
            <option value="completed">completed</option>
            </select>
        </div>
        <button className='create-task'>create task</button>
    </form>
    </div>
  )
}


