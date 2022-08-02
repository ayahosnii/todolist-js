let input = document.querySelector('.input')
let submit = document.querySelector('.add')
let taskDiv = document.querySelector('.tasks')


//Empty array to store tasks
let arrayOfTasks = [];
if (localStorage.getItem('tasks')){
  arrayOfTasks = JSON.parse(localStorage.getItem('tasks'))
}

getDataFromLocalStorage()

//Add Task
submit.onclick = function () {
  if (input.value != ''){
    addTaskToArray(input.value) // add tasks to array of tasks
    input.value = ''; //empty input field
  }
}

taskDiv.addEventListener('click', (e)=>{
  if (e.target.classList.contains('del')){
    deleteTaskWith(e.target.parentElement.getAttribute('data-id'));
    e.target.parentElement.remove()
  }

  if (e.target.classList.contains('task')){
    toggleStatusTaskWith(e.target.parentElement.getAttribute('data-id'));
    //Toggle Done Class
    e.target.classList.toggle('done')
  }
})

function addTaskToArray(taskText)
{
  //task data
  const task = {
    id: Date.now(),
    taskname:taskText,
    completed:false,
  };
  arrayOfTasks.push(task)
  // Add Tasks To Page
  addElementsToPageFrom(arrayOfTasks)
  //Add Tasks to local storage
  addDataToLocalStorageFrom(arrayOfTasks)
  //For Testing
  console.log(arrayOfTasks)
  console.log(JSON.stringify(arrayOfTasks))
}

function addElementsToPageFrom(arrayOfTasks)
{
  //Empty Tasks Div
  taskDiv.innerHTML = '';

  //Looping On Array Of Tasks
  arrayOfTasks.forEach((task)=>{
    let div = document.createElement('div')
    div.className = 'task';
    if (task.completed){
      div.className = 'task done'
    }
    div.setAttribute('data-id', task.id)
    div.appendChild(document.createTextNode(task.taskname))

    //Create Delete Button
    let span = document.createElement('span')
    span.className='del';
    span.appendChild(document.createTextNode('x'));
    //Append Button to Main Div
    div.appendChild(span)
    //Add task div to tasks container
    taskDiv.appendChild(div)
  })
}
function addDataToLocalStorageFrom(arrayOfTasks){
  window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks))
}

function getDataFromLocalStorage(){
  let data = window.localStorage.getItem('tasks')
  if (data){
    let tasks = JSON.parse(data)
    addElementsToPageFrom(tasks)
  }
}

function deleteTaskWith(taskId)
{
  //For Explain Only
  // for (let i = 0; i < arrayOfTasks.length; i++){
  //   console.log(`${arrayOfTasks[i].id} === ${taskId}`)
  // }

  arrayOfTasks = arrayOfTasks.filter((task)=>task.id != taskId)
  addDataToLocalStorageFrom(arrayOfTasks)
}


function toggleStatusTaskWith(taskId){
  for (let i = 0; i < arrayOfTasks.length; i++){
       if(arrayOfTasks[i].id == taskId){
         arrayOfTasks[i].completed == false ? arrayOfTasks[i].completed == true : arrayOfTasks[i].completed == false
       }
    }
  addDataToLocalStorageFrom(arrayOfTasks)
}
