// User information
let userName = '';
let gender = '';
let age = 0;
let answers = [];

// Prompt for user information
function promptUserInformation() {
    userName = prompt("Enter your name:");
    if (!userName) {
        alert("You entered an invalid name.");
    }

    gender = prompt("Enter your gender (male or female):");
    if (!gender || (gender !== "male" && gender !== "female")) {
        alert("You entered an invalid gender (male or female).");
    }

    age = parseInt(prompt("Enter your age:"));
    if (!age || age <= 0) {
        alert("You entered an invalid age.");
    }
}

// Prompt for additional Yes/No questions
function promptAdditionalQuestions() {
    const questions = [
        "Do you like Cake?",
        "Have you traveled abroad?",
        "Did you enjoy the last movie you watched?"
    ];

    for (let i = 0; i < questions.length; i++) {
        let answer = prompt(questions[i]);
        if (answer === '') {
            answer = "invalid";
        }
        answers.push(answer);
    }
}

// Print answers on the console
function printAnswers() {
    console.log("User: " + userName);
    console.log("Gender: " + gender);
    console.log("Age: " + age);

    console.log("Additional Answers:");
    for (let i = 0; i < answers.length; i++) {
        console.log("Question " + (i + 1) + ": " + answers[i]);
    }
}

// Display welcome message
function displayWelcomeMessage() {
    let title = "";
    if (gender === "male") {
        title = "Mr";
    } else if (gender === "female") {
        title = "Ms";
    }

    let message = title ? "Welcome, " + title + " " + userName : "Welcome, " + userName;

    const skipMessage = confirm("Do you want to skip the welcoming message?");
    if (!skipMessage) {
        alert(message);
    }
}

// Add event listener to the "Add Task" button
document.querySelector('.add-task-btn').addEventListener('click', addTask);

// Add task to the table
function addTask() {
    const taskInput = document.querySelector('.task-input');
    const statusSelect = document.querySelector('.status-select');
    const tasksTable = document.querySelector('.tasks-table');

    const task = taskInput.value.trim();
    const selectedStatus = statusSelect.value.toLowerCase().replace(/\s/g, '-');

    if (task !== '') {
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

// Main function to execute the program
function main() {
    promptUserInformation();
    promptAdditionalQuestions();
    displayWelcomeMessage();
    printAnswers();
}

main(); // Run the main function to start the program