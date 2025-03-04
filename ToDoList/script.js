document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-btn");
            removeBtn.addEventListener("click", function () {
                taskList.removeChild(li);
            });

            li.appendChild(removeBtn);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });
});