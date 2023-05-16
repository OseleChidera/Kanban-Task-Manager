import React from 'react'
import ADD from '../assets/icon-add-task-mobile.svg'
export default function AddNewColumn() {
  return (
    <div className='add-new-column'>
        <p className="details">
            This board is empty. Create a new column to get started.
        </p>
        <button className="add-new-column">
            <img
              src={ADD}
              alt='add'
            />
            <span>add new column</span>
        </button>
    </div>
  )
}
