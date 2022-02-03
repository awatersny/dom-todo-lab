// Create cached element references for each element you created above with an id.
const textBox = document.getElementById('text-box');
const todoList = document.getElementById('todo-list');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');

const addLi = evt => {
  if (textBox.value !== '') {
    //     - Create a new `li` element.
    const newLi = document.createElement('li');
    //     - Set the text of the newly created `li` element to the text that the user has entered into the `input` element.
    newLi.textContent = textBox.value;
    //     - Reset the text in the `input` field to an empty string.
    textBox.value = '';
    //     - Add the new `li` element to the page, inside the `ul` element.
    todoList.appendChild(newLi);
    //     - Event Listener for individual removal
    newLi.addEventListener('click', removeSelfOnCLick);
  }
}
// Add an event listener to the button that listens to click events. When the button is clicked, we need to:
submitButton.addEventListener('click', addLi);

const resetTodoList = evt => {
  textBox.value = '';
  todoList.textContent = '';
}

const removeSelfOnCLick = evt => {
  evt.target.remove();
}

resetButton.addEventListener('click', resetTodoList);
