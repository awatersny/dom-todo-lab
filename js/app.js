const textBox = document.getElementById('text-box');
const todoList = document.getElementById('todo-list');
const submitButton = document.getElementById('submit-button');
// 2. Add an event listener to the button that listens to click events. When the button is clicked, we need to:
const addLi = evt => {
  //     - Create a new `li` element.
  //     - Set the text of the newly created `li` element to the text that the user has entered into the `input` element.
  //     - Reset the text in the `input` field to an empty string.
  //     - Add the new `li` element to the page, inside the `ul` element.
  console.log(evt);
}

submitButton.addEventListener('click', addLi);