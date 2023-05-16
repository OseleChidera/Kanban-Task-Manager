import React,{useContext, useState} from 'react'
import { context } from '../../context'
import './edittask.css'
import  Cross from '../../assets/icon-cross.svg'
import  Add from '../../assets/icon-add-task-mobile.svg'
import Subtask from '../Subtask'
export default function AddNewTaskForm() {
    const {column ,displayForm ,setDisplayForm , selectedTask ,displayEditForm ,setDisplayEditForm} = useContext(context)
    const [selectedInput , setSelectedInput] = useState(selectedTask.title)
    const [selectedDesc , setSelectedDesc] = useState(selectedTask.description)
    const [selectedsubtask , setSelectedSubtask] = useState(selectedTask.subtask)

     const handleDelete = (id) => {
    const updatedItems = selectedsubtask.filter((item) => item.id !== id);
    setSelectedSubtask(updatedItems);
  };
  return (
    <div className='dialog' onClick={(event)=> {
        if (event.target === event.currentTarget){
        setDisplayEditForm(displayEditForm => false)}}}>
    <form className="form">
        <h2>Edit task</h2>
        <div className="title-div section">
            <label htmlFor='title' className='title'>title</label>
            <input 
            type="text" 
            id='title' 
            className='title-input inputs' 
            placeholder='e.g. take a coffee break' 
            value={selectedInput} 
            onChange={()=>setSelectedInput((selectedInput)=> selectedInput)}/>
        </div>
        <div className="desc section">
            <label htmlFor='desc' className='title'>description</label>
            <textarea name="desc-input" id="desc" className='desc-input' placeholder='e.g. It/’s always good to take a break. This 15 minute break will  recharge a little.' onChange={()=>setSelectedDesc((selectedDesc)=> selectedDesc)}>
            {selectedDesc}
            </textarea>
        </div>
        <div className="section">
            <h3 className='title'>Subasks</h3>
            <div className="subtask-div">
            {selectedsubtask.map((subtask)=><Subtask subtask={subtask}/>)}
            
            
            <button className="add-new-subtask">
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
