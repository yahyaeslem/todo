//Object for projects (list of todos)

const  projects = function () {
    const projectItems = [];
  
    function addprojectItems (todoItem) {
      projectItems .push(todoItem);
    }
  
    function removeprojectItems (index) {
      projectItems .splice(index, 1);
    }
  
    function getprojectItems () {
      return projectItems ;
    }
  
    return {
      addprojectItems ,
      removeprojectItems ,
      getprojectItems ,
    };
  }
  
  const taskContainer = document.querySelector('#taskContainer')
  export default function projectRender (){
  
  const array = projects.getprojectItems()
  array.forEach(element => {
    const div = document.createElement("div");
    div.textContent = element;
    taskContainer.appendChild(div);
  });}