import React ,{useContext, useState}from 'react'
import LOGO from '../assets/logo-mobile.svg'
import ADD from '../assets/icon-add-task-mobile.svg'
import OPTION from '../assets/icon-vertical-ellipsis.svg'
import { context } from '../context'
import BoardsMenuMobile from './BoardsMenuMobile/BoardsMenuMobile'
export default function Nav() {
   const {column ,displayForm ,setDisplayForm,tasks, setTasks  ,selectedTask, setSelectedTask , handleTaskClick ,displayEditForm ,} = useContext(context)
  const [chevron , setChevron] = useState('../assets/icon-chevron-down.svg')
  const [showNav , setShowNav] = useState(false )
  const toggleNav=()=>{
    setChevron((chevron)=> '../assets/icon-chevron-up.svg')
    setShowNav((showNav)=> !showNav)
  }
  return (
    <>
    <nav>
       <div className="logo-div">
            <img src={LOGO} alt='logo'className='logo'/>
            <div className='platform-launch-div' style={{letterSpacing: '1.5px'}}>
              <h3>platform launch</h3>
              <button 
              onClick={()=> toggleNav()}
              style={{border:'none', backgroundColor:'inherit' ,color:'white'}}>
                <img src={chevron} alt='chevron'/></button>
              </div>
        </div>
        <div className="flex-end">
          <button className="add" onClick={()=> setDisplayForm(displayForm => !displayForm)}>
            <img src={ADD} alt='add'/>
          </button>
           <img src={OPTION} alt='option'/>
        </div>
    </nav>
    {showNav && (<BoardsMenuMobile/>)}
    </>
  )
}

