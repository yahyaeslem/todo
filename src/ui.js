import taskRender from './task.js'
import taskItems from './task.js'
import newListForms from './newList'
import projectRender  from './projects.js'
import { listsRender } from './newList'


function renderUI(){


const newListForm = document.querySelector('newListForm');
const taskForm = document.querySelector('taskForm');
listsRender()


document.addEventListener('DOMContentLoaded', () => {
    taskRender();
})
document.addEventListener("click", function(e){
    const target = e.target.closest("#taskRender"); 
    if(target){
     taskRender()
    }
  });
  document.addEventListener("click", function(e){
    const target = e.target.closest("#projects"); 
    if(target){
     projectRender()
    }
  });

  
  newListForm.addEventListener('submit', newListFormHandler);
  function newListFormHandler(event) {
          event.preventDefault();
        
       
      const data = new FormData(event.target);
  
      const value = Object.fromEntries(data.entries());
     newListForms(value);
      newListForm.reset();
    listsRender()
  
     }

     taskForm.addEventListener('submit', taskFormHandler);
     function taskFormHandler(event) {
             event.preventDefault();
           
          
         const data = new FormData(event.target);
     
         const value = Object.fromEntries(data.entries());
         taskItems(value);
         taskItems.reset();
         taskRender ()
     
        }
      }
      export {renderUI}