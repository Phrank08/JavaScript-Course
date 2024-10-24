const todoArray = [{
  name : 'make my bed',
  dueDate : '10-16-2024'
}, 
{
name : 'wash my clothes',
dueDate : '11-16-2024'}];   // an array consisting of an object

renderArray();

function renderArray() {
  let todoListHTML = '';    // an empty string to store data

  todoArray.forEach(function(todoObject, index) {
    
    const {name, dueDate} = todoObject;   // this access the name propety and dueDate propety --- DESTRUCTURING
    // const dueDate = todoObject.dueDate;   // this access the 
    const html = `
      <div>${name}</div>  
      <div>${dueDate}</div>

        <button onclick="
          todoArray.splice(${index}, 1);
          renderArray();
        " class="delete-btn">Delete</button>`   // this creates a container that will display the data on the page in grid form and also a delete butto n that deletes the todo
    todoListHTML += html;   // stores the paragraphed data in an empty string.
  } )

 

  // console.log(todoListHTML);

  document.querySelector('.js-todo-content')
    .innerHTML = todoListHTML;    // access the div element on the HTML page and assigns it totodoListHTML

}

 function addTodo() {
  const inputElement = document.querySelector('.js-todo-name');   // access the input element on the HTML page

  const content = inputElement.value;     // access the contents inside the input 
  const date = document.querySelector('.js-due-date');     // access the date inside the input
  const dueDate = date.value;

  todoArray.push({
    name : content,
    dueDate : dueDate
  });    // adds content and date to the end of the object-array
  console.log(todoArray);

  inputElement.value = '';    // changes the input to an empty string ater its been added to the array
   renderArray();
 }