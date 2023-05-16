export const todos = async ()=>{
   const fetchUrl = 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8'
   const res = await fetch(fetchUrl ,  {method: "GET", headers: {"Content-type": "application/json;charset=UTF-8"}})
   
   const data  = await res.json()
   console.log(data)
   return data;
}


export const list = [
  {
    id: 1,
    title: "Task 1",
    description: "Lorem ipsum dolor sit amet",
    subtask: ["Subtask 1", "Subtask 2"],
    status: "To do"
  },
  {
    id: 2,
    title: "Task 2",
    description: "Consectetur adipiscing elit",
    subtask: ["Subtask 1"],
    status: "In progress"
  },
  {
    id: 3,
    title: "Task 3",
    description: "Sed do eiusmod tempor incididunt",
    subtask: [],
    status: "Done"
  },
  {
    id: 4,
    title: "Task 4",
    description: "Ut enim ad minim veniam",
    subtask: ["Subtask 1", "Subtask 2", "Subtask 3"],
    status: "To do"
  },
  {
    id: 5,
    title: "Task 5",
    description: "Duis aute irure dolor in reprehenderit",
    subtask: ["Subtask 1", "Subtask 2"],
    status: "In progress"
  },
  {
    id: 6,
    title: "Task 6",
    description: "Excepteur sint occaecat cupidatat non proident",
    subtask: ["Subtask 1", "Subtask 2", "Subtask 3"],
    status: "To do"
  },
  {
    id: 7,
    title: "Task 7",
    description: "Sunt in culpa qui officia deserunt mollit anim id est laborum",
    subtask: ["Subtask 1"],
    status: "In progress"
  },
  {
    id: 8,
    title: "Task 8",
    description: "Fugiat nulla pariatur",
    subtask: [],
    status: "Done"
  },
  {
    id: 9,
    title: "Task 9",
    description: "Mollit anim id est laborum",
    subtask: ["Subtask 1", "Subtask 2"],
    status: "To do"
  },
  {
    id: 10,
    title: "Task 10",
    description: "Tempor incididunt ut labore et dolore magna aliqua",
    subtask: ["Subtask 1", "Subtask 2", "Subtask 3"],
    status: "In progress"
  }
];
