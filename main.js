const button = document.querySelector('.btn-primary')
console.log(button);

const input = document.querySelector('.form-control')

console.log(input);

const getInputValue = () => {
    console.log(input.value);
}


button.addEventListener('click', getInputValue)