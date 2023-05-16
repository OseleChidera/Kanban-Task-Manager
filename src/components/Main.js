import React,{useContext, useState} from 'react'
import AddNewColumn from './AddNewColumn'
import ADD from '../assets/icon-add-task-mobile.svg'
import { context } from '../context'
import  Cross from "../assets/icon-add-task-mobile.svg"

import AddNewTaskForm from './AddNewTaskForm/AddNewTaskForm'
import EditTask from './EditTask/EditTask'
import Edit2 from './EditTask/Edit2'
import EditBoard from './EditBoard/EditBoard'
import AddnewBoardForm from './AddNewBoards/AddNewBoard'
export default function Main() {
    const {column ,displayForm ,setDisplayForm,tasks, setTasks  ,selectedTask, setSelectedTask , handleTaskClick ,displayEditForm,displayEdit , setDisplayEdit , displayEditBoard , setDisplayEditBoard, displayBoardForm , setDisplayBoardForm} = useContext(context)
    
  return (<>
    {displayForm && (<AddNewTaskForm/>)}
    {displayEditForm && (<EditTask/>)}
    {displayEdit && (<Edit2/>)}
    {displayEditBoard && (<EditBoard/>)}
    {displayBoardForm && (<AddnewBoardForm/>)}
    <main >

        {column.length===0 && (<AddNewColumn/>)}
        {/* <div className="column-added"> */}
        <div className="column-column-container">
        <Column tasks={tasks}/>
        </div>
        <AddNewColumnBtn/>
        {/* </div> */}
    </main>
    </>
  )
}

function Column({tasks}) {
  return (
    <div className="column">
            <span>
            <div className='identifier'></div>
            <h3 className="column-title">todo (4)</h3>
            </span>
            <div className="column-list">
                {tasks.map((task)=>(<TaskItem key={task.id} task={task} />))}
            <button className="add-new-task"  >
                <span className='inner-button'>
                <img src={Cross} alt='add' className='add-icon' />
                <span className="add-task-text">add new</span>
                </span>
            </button>
            </div>
        </div>
  )
}


 function TaskItem({task}) {
    const {handleTaskClick} = useContext(context)

  return (
    <div className="column-list-item" onClick={()=>{handleTaskClick(task)}}>
      <h3 className='item-title'>{task.title}</h3>
      <p>{task.description}</p>
      <span className="substack">{task.subtask.length} substack</span>
    </div>
  )
}


function AddNewColumnBtn() {
  return (
    <div className="add-new-column-main">
            <div className="new-column">
               <img
              src={ADD}
              alt='add'
              width={13}
              height={13}
              /> 
              <h2>new column</h2>
            </div>
        </div>
  )
}
