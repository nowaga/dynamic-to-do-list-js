// Ensure DOM is fully loaded before running JS
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Alert if task input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add remove functionality
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
        };

        // Append remove button to list item
        listItem.appendChild(removeButton);

        // Append list item to the task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});