import React, { useState , useContext} from 'react'
import { context } from '../../context'
import BoardIcon from '../../assets/icon-board.svg'
import addicon from '../../assets/icon-add-task-mobile.svg'
import Toggleswitch from '../togglwswitch/Toggleswitch'


export default function BoardsMenuMobile() {
    const {boardList} = useContext(context)
  return (
    <div className='boards'>
      <h3>all boards ({boardList.length})</h3>

      <div className="list-of-boards">
        {boardList}
        <AddNewBoard/>
      </div>
    <Toggleswitch/>
  </div>
  )
}

 function AddNewBoard() {
    const {addNewBoard} = useContext(context)
  return(
         <button 
         onClick={()=>addNewBoard()}
         className="board-menu-item create-new">
          <img alt='boardIcon' src={BoardIcon} className='board-icon'/>
          <span className="board-name">
            <img alt='boardIcon' src={addicon} className='add-icon'/>
            <span className="board-name">create new Boards</span>
          </span>
        </button>
  )
}

