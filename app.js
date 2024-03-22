var userName, gender, age;

while (!userName) {
    userName = prompt("Enter your name:");
    if (!userName) {
        alert("Please enter a valid name.");
    }
}

while (!gender || (gender !== "male" && gender !== "female")) {
    gender = prompt("Enter your gender (male or female):");
    if (!gender || (gender !== "male" && gender !== "female")) {
        alert("Please enter a valid gender (male or female).");
    }
}

while (!age || age <= 0) {
    age = parseInt(prompt("Enter your age:"));
    if (!age || age <= 0) {
        alert("Please enter a valid age.");
    }
}

var skipMessage = confirm("Do you want to show the welcoming message?");

if (skipMessage) {
    var title;
    if (gender === "male") {
        title = "Mr";
    } else if (gender === "female") {
        title = "Ms";
    }

    var message = title ? "Welcome, " + title + " " + userName + "!" : "Welcome, " + userName + "!";
    alert(message);
}

// Get necessary elements
const taskInput = document.querySelector('.task-input');
const addTaskBtn = document.querySelector('.add-task-btn');
const tasksTable = document.querySelector('.tasks-table');

// Add click event listener to the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Add task to the table
function addTask() {
    const task = taskInput.value;
    const statusSelect = document.querySelector('.status-select');
    const selectedStatus = statusSelect.value.toLowerCase().replace(/\s/g, '-');

    if (task.trim() !== '') {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
      <td>${task}</td>
      <td class="${selectedStatus}">${statusSelect.value}</td>
    `;
        tasksTable.querySelector('tbody').appendChild(newRow);

        taskInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task.'); // Show an alert if the input is empty
    }
}