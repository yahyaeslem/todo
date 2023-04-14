export default function taskModule () {
const taskDiv = document.querySelector('#taskContainer')
//Object For single todo item
class task {
  
  constructor(title, description, dueDate, priority, ) {
    this.title= title
    this.description= description
    this.dueDate= dueDate
    this.priority= priority
    this.completed = false;
  }

}

const taskItems = ()=> {
  const taskItems = [];

  function addtaskItems (task) {
    taskItems .push(task);
  }

  function removetaskItems (index) {
    taskItems .splice(index, 1);
  }

  function gettaskItems () {
    return taskItems ;
  }

  return {
    addtaskItems ,
    removetaskItems ,
    gettaskItems ,
  };
}

function taskRender (){
  
  const array = taskItems.gettaskItems()
  array.forEach(element => {
    const div = document.createElement("div");
    div.textContent = element;
    taskDiv.appendChild(div);
  });}

}