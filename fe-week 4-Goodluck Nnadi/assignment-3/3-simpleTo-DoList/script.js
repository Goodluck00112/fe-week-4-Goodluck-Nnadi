var tasks = [];    //Var is a functiona scope

function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value;
    if (taskText === "") return;

    tasks.push({ text: taskText, completed: false });
    input.value = ""; 
    displayTasks();
}

function toggleTask(index) {
    tasks = tasks.map((task, i) => 
        i === index ? { ...task, completed: !task.completed } : task
    );
    displayTasks();
}

function removeTask(index) {
    tasks = tasks.filter((_, i) => i !== index);
    displayTasks();
}

function displayTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        var li = document.createElement("li");
        li.textContent = task.completed ? `[✔] ${task.text}` : `[ ] ${task.text}`;
        li.onclick = function() { toggleTask(index); };

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        deleteBtn.onclick = function(event) { 
            event.stopPropagation(); 
            removeTask(index);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}