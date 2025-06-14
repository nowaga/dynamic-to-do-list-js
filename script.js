document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText) {
            alert('Please enter a task.');
            return;
        }

        // Create and configure task list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create and configure remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => li.remove();

        // Append elements and clear input
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }

    // Event listener for add button click
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});