let tasklist = [];

function addtask() {
    let taskInput = document.getElementById("taaskInput");
    let task = taskInput.ariaValueMax.trim();
    if (task !== ""){
        tasklist.push({task: task, completed: false});
        displayTasks();
        taskInput.value = "";
    }
}

function toggleTasks(){
    tasklist[index].completed = !tasklist[index].completed;
    displayTasks();
}

Fuction displayTasks(){
    let tasklistElement = document.getElementById("tasklist");
    tasklistElement.innerHTML = "";
    tasklist.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task.task;
        if (task.completed) {
            li.classList.add("completed");
        }
        li.addEventListener("click", () => toggleTasks(index));
        tasklistElement.appendChild(li);
    });
}