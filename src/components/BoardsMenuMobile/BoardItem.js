import React from 'react'
import BoardIcon from '../../assets/icon-board.svg'
export default function BoardItem() {
  return (
    <div className="board-menu-item board">
          <img alt='boardIcon' src={BoardIcon} className='board-icon'/>
          <span className="board-name">platform launch</span>
    </div>
  )
}
