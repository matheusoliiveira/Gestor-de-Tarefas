document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-title");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("tasks");

  function addTask() {
    const taskTitle = taskInput.value.trim();
    if (!taskTitle) return;

    const li = document.createElement("li");
    li.classList.add("task");

    li.innerHTML = `
      <span>${taskTitle}</span>
      <button class="delete-task">X</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

    li.querySelector(".delete-task").addEventListener("click", () => {
      li.remove();
    });
  }

  addTaskButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });
});
