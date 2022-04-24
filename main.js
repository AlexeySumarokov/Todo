const button = document.getElementById('addButton');
const taskInput = document.getElementById('itemInput');
const textInput = document.querySelector('.text-center');

let tasks;
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
                <button onclick ="deleteTask(${index})" class="btn-delete">Delete</button>
        </div>
    </div>
    `
}

const fillHtmlList = () => {
    textInput.innerHTML = "";
    if(tasks.length > 0) {
        tasks.forEach((item, index) => {
            textInput.innerHTML += createTemplate(item, index);
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
    todoItemElems[index].classList.add('cheked');
    } else {
    todoItemElems[index].classList.remove('cheked');
}
updateLocal();
fillHtmlList();
}

button.addEventListener('click', () => {
    tasks.push(new Task(taskInput.value));
    updateLocal();
    fillHtmlList();
    taskInput.value = '';
})

const deleteTask = index =>{
    tasks.splice(index, 1);
    updateLocal
    fillHtmlList();
}