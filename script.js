let tasks = [];

let taskInput = document.getElementById("taskInput");
let priority = document.getElementById("priority");
let dueDate = document.getElementById("dueDate");

let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let counter = document.getElementById("counter");
let clearAllBtn = document.getElementById("clearAllBtn");


function displayTasks() {

    taskList.innerHTML = "";

    if (tasks.length == 0) {

        let row = document.createElement("tr");

        row.className = "empty-row";

        row.innerHTML = "<td colspan='5'>No tasks yet</td>";

        taskList.appendChild(row);
    }

    else {

        for (let i = 0; i < tasks.length; i++) {

            let row = document.createElement("tr");

            if (tasks[i].done == true) {
                row.classList.add("done");
            }


            let doneCell = document.createElement("td");

            let checkbox = document.createElement("input");

            checkbox.type = "checkbox";

            checkbox.checked = tasks[i].done;


            checkbox.addEventListener("change", function () {

                tasks[i].done = checkbox.checked;

                displayTasks();

            });


            doneCell.appendChild(checkbox);


            let nameCell = document.createElement("td");

            nameCell.className = "task-name";

            nameCell.textContent = tasks[i].name;


            let priorityCell = document.createElement("td");

            priorityCell.textContent = tasks[i].priority;


            let dateCell = document.createElement("td");

            dateCell.textContent = tasks[i].dueDate;


            let deleteCell = document.createElement("td");

            let deleteButton = document.createElement("button");

            deleteButton.className = "del-btn";

            deleteButton.textContent = "Delete";


            deleteButton.addEventListener("click", function () {

                deleteTask(i);

            });


            deleteCell.appendChild(deleteButton);


            row.appendChild(doneCell);

            row.appendChild(nameCell);

            row.appendChild(priorityCell);

            row.appendChild(dateCell);

            row.appendChild(deleteCell);

            taskList.appendChild(row);
        }
    }


    let left = 0;

    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].done == false) {
            left++;
        }
    }


    counter.textContent = left + " tasks left";
}


function addTask() {

    let name = taskInput.value.trim();

    if (name == "") {
        return;
    }


    let task = {

        name: name,

        priority: priority.value,

        dueDate: dueDate.value,

        done: false
    };


    tasks.push(task);

    taskInput.value = "";

    dueDate.value = "";

    priority.value = "Medium";

    taskInput.focus();

    displayTasks();
}


function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}


function clearAll() {

    if (tasks.length == 0) {
        return;
    }


    tasks = [];

    displayTasks();
}


addBtn.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function (event) {

    if (event.key == "Enter") {
        addTask();
    }

});


clearAllBtn.addEventListener("click", clearAll);


displayTasks();