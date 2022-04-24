const addTaskBtn = document.getElementById('add-task-btn');
const deskTaskInput = document.getElementById('description-task');
const todosWrapper = document.querySelector('.todos-wrapper');

let tasks= [];
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

 let todoItemElems = [];

function Task(description){
    this.description = description;
    this.completed = false;
}

const createTemplate = (task, index) => {
    return `
        <div class="todo-item"${task.completed ? 'cheked' : ''}">
            <div class="description">${task.description}</div>
            <div class="buttons">
                <input onclick ="completeTask(${index})" class="btn-complete" type="checkbox" ${task.completed ? 'cheked' : ''}>
                <button onclick ="deleteTask(${index})" class="btn-delete">X</button>
        </div>
    </div>
    `
}

const fillHtmlList = () => {
    todosWrapper.innerHTML = "";
    if(tasks.length > 0) {
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index);
        });
        todoItemElems = document.querySelectorAll('.todo-item')
    }
}




const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const completeTask = (index) => { 
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed) {
    todoItemElems[index].classList.add('checked');
    } else {
    todoItemElems[index].classList.remove('checked');
}
updateLocal();
fillHtmlList();
}

addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(deskTaskInput.value));
    
   updateLocal();
   fillHtmlList();
    deskTaskInput.value = '';
})

const deleteTask = index =>{
    tasks.splice(index, 1);
    updateLocal
    fillHtmlList();
}