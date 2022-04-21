const button = document.querySelector('.btn-primary')
console.log(button);

const input = document.querySelector('.form-control')
let tasks = [];

const textInput = document.querySelector('.todoList')
console.log(input);

const render = ()=>{
    textInput.innerHTML = '';
    tasks.forEach(element => {
        textInput.innerHTML +=
        `<li><input type="checkbox" id="${element.id}">
        <span id="${element.id}">${element.text}</span>
        <button id="${element.id}">X</button></li>`
    });    
}

const getInputValue = () => {
    const newTodo = {id: Date.now(), text: input.value, status: false};
    tasks.push(newTodo);
    console.log(tasks);
    render();
}


button.addEventListener('click', getInputValue) 