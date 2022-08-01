let input = document.querySelector('.input')
let submit = document.querySelector('.add')
let taskDiv = document.querySelector('.tasks')


//Empty array to store tasks
let arrayOfTasks = [];

//Add Task
submit.onclick = function () {
  if (input.value != ''){
    addTaskToArray(input.value) // add tasks to array of tasks
    input.value = ''; //empty input field
  }
}

function addTaskToArray(taskText)
{
  //task data
  const task = {
    id: Date.now(),
    title:taskText,
    completed:false,
  };
  arrayOfTasks.push(task)
  console.log(arrayOfTasks)
}

function addElementsToPageForm(arrayOfTasks)
{
  //Empty Tasks Div
  taskDiv.innerHTML = '';

  //Looping On Array Of Tasks
  arrayOfTasks.forEach((task)=>{
    let div = document.createElement('div')
    div.className = 'task';
  })
}
