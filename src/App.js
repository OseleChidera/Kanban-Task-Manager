import './App.css';
import { useState } from 'react';
import { context } from './context';
import { list } from './api/todo'
//components
import Nav from './components/Nav';
import Main from './components/Main';
import SubtaskAdd from './components/AddNewTaskForm/SubtaskAdd'
import BoardItem from './components/BoardsMenuMobile/BoardItem'
import ColumnComponent from './components/AddNewBoards/ColumnComponent';
function App() {
  const [column , setColumn] = useState([1]);
  const [displayForm , setDisplayForm] = useState(false)
  const [displayEditForm , setDisplayEditForm] = useState(false)
  const [displayEdit , setDisplayEdit] = useState(false)
  const [displayBoardForm , setDisplayBoardForm] = useState(false)
  const [displayEditBoard , setDisplayEditBoard] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState(list);
  const [subtask , setSubtask] = useState([])
  const subTaskComponent = <SubtaskAdd subtask={subtask} setSubtask={setSubtask}/>
  const [subtaskList, setSubtaskList] = useState([subTaskComponent ]);
  const boardItemComponent = <BoardItem/>
  const [boardList , setBoardList] = useState([boardItemComponent , boardItemComponent , boardItemComponent])
  const addBoardColumnComponent = <ColumnComponent/>
  const [ColumnList , setColumnList] =useState([addBoardColumnComponent , addBoardColumnComponent])
  const addSubtaskComponent = (e) => {
    e.preventDefault();
    setSubtaskList([...subtaskList, subTaskComponent]);
  };

  const deleteSubtaskComponent = (e)=>{
      e.preventDefault();
      const parentOfSelected = e
      console.log(parentOfSelected)
      console.log('delete subtask clicked')
    //  setSubtaskList(subtaskList.filter((component, i) => i !== ));
  }
  const handleTaskClick = (task) => {
    setSelectedTask(task);
    // setDisplayEditForm((displayEditForm)=> !displayEditForm)
    setDisplayEdit((displayEdit)=> !displayEdit)
    // console.log(selectedTask)
  };
  const addNewBoard = ()=>{
    setDisplayBoardForm((displayBoardForm)=> true)
    console.log('chevron clicked')
    setBoardList([...boardList , boardItemComponent])
  }
  return (
    <context.Provider value={{column , displayForm ,setDisplayForm,tasks, setTasks ,selectedTask, setSelectedTask , handleTaskClick ,displayEditForm ,setDisplayEditForm , selectedTask , subTaskComponent , subtaskList , setSubtaskList , addSubtaskComponent , deleteSubtaskComponent ,boardList , setBoardList , addNewBoard , displayEdit , setDisplayEdit , ColumnList , displayEditBoard , setDisplayEditBoard , displayEditBoard , setDisplayEditBoard, displayBoardForm , setDisplayBoardForm}} >
    <div className="app">
     <Nav/>
     <Main/>
    </div>
    </context.Provider>
  );
}

export default App;
