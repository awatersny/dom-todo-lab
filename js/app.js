// 1. In your JavaScript file, create cached element references for each element you created above with an `id`. You should have three cached element references in total, one for the `input` element, one for the `button` element, and one for the `ul` element.
const textBox = document.getElementById('text-box');
const todoList = document.getElementById('todo-list');
const submitButton = document.getElementById('submit-button');
// 2. Add an event listener to the button that listens to click events. When the button is clicked, we need to:
//     - Create a new `li` element.
//     - Set the text of the newly created `li` element to the text that the user has entered into the `input` element.
//     - Reset the text in the `input` field to an empty string.
//     - Add the new `li` element to the page, inside the `ul` element.