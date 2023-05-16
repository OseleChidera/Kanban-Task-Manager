import React,{useContext, useState , useRef , useEffect} from 'react'
import { context } from '../../context'
import './addboard.css'
import Cross from '../../assets/icon-cross.svg'
import ColumnComponent from './ColumnComponent'

import  Add from '../../assets/icon-add-task-mobile.svg'

export default function AddnewBoardForm() {
    const {column ,displayForm ,setDisplayForm,ColumnList , displayEditBoard , setDisplayEditBoard, displayBoardForm , setDisplayBoardForm} = useContext(context)
    const inputRef = useRef(null);
      useEffect(() => {
    inputRef.current.focus();
  }, []);
    const [title , setTitle] = useState('')
    const [desc , setDesc] = useState('')
    
   
  return (
    <div className='dialog' onClick={(event)=> {
        if (event.target === event.currentTarget){
        setDisplayBoardForm(displayBoardForm => false)}
    }}>
    <form className="form-add-board">
        <h3>add new board</h3>
        <div className="title-div section">
            <label htmlFor='title' className='title'>board name</label>
            <input 
            type="text" 
            id='title' 
            className='title-input inputs' 
            placeholder='e.g.web design'
            ref={inputRef}
            value={title}
            onChange={()=>setTitle((title)=> title)}
            />
        </div>
        <div className="section">
            <h3 className='title'>board columns</h3>
            <div className="column-div">
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
            <button className="add-new-board"
            // onClick={(e)=>addSubtaskComponent(e)} 
            >
                <span className='inner-button'>
                <img src={Add} alt='add' className='add-icon' />
                <span className="add-board-text">add new board</span>
                </span>
            </button>
            </div>
        </div>
        <button className='create-board'>create new board</button>
    </form>
    </div>
  )
}


