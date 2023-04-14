  function newListForms () {
    const newListForms = [];
  
    function addnewListForms (newList) {
      newListForms .push(newList);
    }
  
    function removenewListForms(index) {
      newListForms .splice(index, 1);
    }
  
    function getnewListForms () {
      return newListForms ;
    }
  
    return {
      addnewListForms ,
      removenewListForms ,
      getnewListForms ,
    };
  }

 function listsRender (){
    const sideMain= document.querySelector('.sideMain')
    const array = newListForms.getnewListForms()
    array.forEach(element => {
     
      
      const div = document.createElement('div');

     
      const anchor = document.createElement('a');
      
     
      
      
      // set the text content of the anchor element to 'Tasks'
      anchor.textContent = element;
      
      // append the anchor element to the div element
      div.appendChild(anchor);
      sideMain.appendChild(div);
    });}

  export {listsRender , newListForms};