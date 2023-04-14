import { compareAsc, format } from 'date-fns' ;
import taskModule from './task.js' ;
// import taskItems from './task.js'
import newListForms from './newList.js';
import projectRender  from './projects.js';
import { listsRender } from './newList.js';

// import renderUI from './ui';
format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(compareAsc)


console.log('asdsad')


// renderUI()

const newListForm = document.querySelector('newListForm');
const taskForm = document.querySelector('taskForm');
newListForm.addNewListForms("taskssss")
listsRender()


document.addEventListener('DOMContentLoaded', () => {
    taskRender();
})
document.addEventListener("click", function(e){
    const target = e.target.closest("#task"); 
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
      