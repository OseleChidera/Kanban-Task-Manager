import React,{useContext, useState} from 'react'
import { context } from '../../context'
import options from '../../assets/icon-vertical-ellipsis.svg'
import './edit2.css'
export default function Edit2() {
        const {column ,displayForm ,setDisplayForm , selectedTask ,displayEditForm ,setDisplayEditForm,displayEdit , setDisplayEdit} = useContext(context)
    const [selectedInput , setSelectedInput] = useState(selectedTask.title)
    const [selectedDesc , setSelectedDesc] = useState(selectedTask.description)
    const [selectedsubtask , setSelectedSubtask] = useState(selectedTask.subtask)
  return (
    <div className='edit-main'
    onClick={(event)=> {
        if (event.target === event.currentTarget){
        setDisplayEdit(displayEdit => false)}}}
    >
        <div className="edit-center">
        <div className="section1">
            <div className="title-options">
                <p>{selectedInput}</p>
                <button>
                    <img alt='options' src={options} />
                </button>
            </div>
        </div>
        <div className="section2">
            <span>
                {selectedDesc}
            </span>
        </div>
        <h4>subtask (2 of 3)</h4>
        <div className="section3">
        {selectedsubtask.map((subtaskWithInputDetail)=> <SubtaskInput 
        subtaskWithInputDetail={subtaskWithInputDetail}
        />)}
        </div>
        <h4>current status</h4>
        <div className="section4">
            <select id="status">
            <option value="doing">doing</option>
            <option value="todo">todo</option>
            <option value="completed">completed</option>
            </select>
        </div>
        </div>
    </div>
  )
}



function SubtaskInput({subtaskWithInputDetail}) {
  return (
     <div className="subtask-input">
                <input type='checkbox' name='subtask1' id='subtask1' className='checkbox'/>
                <label htmlFor='subtask1'>{subtaskWithInputDetail}</label>
    </div>
  )
}
