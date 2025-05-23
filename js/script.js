// Selectores
const bgColor = document.getElementById("bgColor");
const fontSize = document.getElementById("fontSize");
const themeToggle = document.getElementById("themeToggle");
const defaultPriority = document.getElementById("defaultPriority");
const defaultDueDate = document.getElementById("defaultDueDate");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskPriority = document.getElementById("taskPriority");
const taskDueDate = document.getElementById("taskDueDate");
const taskTags = document.getElementById("taskTags");
const taskList = document.getElementById("taskList");
const body = document.getElementById("body");
const container = document.getElementById("container");

// Variables

// Funciones

// Configuracion
const changeTheme = () => {
  body.classList.toggle("dark-theme");
};

const storeBgColorTask = () => {
  container.style.backgroundColor = bgColor.value;
};

const storeFontSizeTask = () => {
  container.style.fontSize = fontSize.value;
};

const storeDefaultPriority = () => {
  priorityDefault = defaultPriority.value;
  console.log("ss" + defaultPriority.value);
};

const storeDefaultDueDate = () => {
  dateDefault = defaultDueDate.value;
};

// Task

const addTask = () => {
  let check = true;

  //   console.log(taskDueDate.value);

  //   console.log(taskInput.value);
  if (taskInput.value === "") {
    taskInput.style.backgroundColor = "tomato";
    check = false;
  } else {
    taskInput.style.backgroundColor = "transparent";
  }
  if (taskTags.value === "") {
    taskTags.style.backgroundColor = "tomato";
    check = false;
  } else {
    taskTags.style.backgroundColor = "transparent";
  }
  if (taskDueDate.value === "") {
    taskDueDate.style.backgroundColor = "tomato";
    check = false;
  } else {
    taskDueDate.style.backgroundColor = "transparent";
  }
  if (taskPriority.value === "") {
    taskPriority.style.backgroundColor = "tomato";
    check = false;
  } else {
    taskPriority.style.backgroundColor = "transparent";
  }
  if (check) {
    taskInput.style.bordbackgroundColor = "transparent";
    taskPriority.style.backgroundColor = "transparent";
    taskDueDate.style.backgroundColor = "transparent";
    taskTags.style.backgroundColor = "transparent";
    addTaskIntoHTML();
    clearValuesTask();
  }
};

const clearValuesTask = () => {
  taskInput.value = "";
  taskDueDate.value = "";
  taskTags.value = "";
};

const addTaskIntoHTML = () => {
  let priorityName = "";
  //   console.log(taskPriority.value);
  switch (taskPriority.value) {
    case "low":
      priorityName = "Baja";
      break;
    case "medium":
      priorityName = "Media";
      break;
    case "high":
      priorityName = "Alta";
      break;
  }

  taskList.innerHTML +=
    '<div class="task priority-' +
    taskPriority.value +
    '"><div class="task-header"><span class="task-text">' +
    taskInput.value +
    '</span><div class="task-buttons"><button class="complete-btn">✓</button><button class="delete-btn">✕</button></div></div><div class="task-properties"><div class="property"><span class="property-label">Prioridad:</span><span class="property-value">' +
    priorityName +
    '</span></div><div class="property"><span class="property-label">Vencimiento:</span><span class="property-value">' +
    taskDueDate.value +
    '</span></div><div class="property"><span class="property-label">Etiquetas:</span><span class="property-value">' +
    taskTags.value +
    "</span></div></div></div>";
};

const buttonsTasks = (event) => {
  let e = event.target;
  let allTask = taskList.querySelectorAll(".task");
  let allCompleteBtns = taskList.querySelectorAll(".complete-btn");
  let allDeleteBtns = taskList.querySelectorAll(".delete-btn");
  let buttonIndex = 0;

  if (e.nodeName === "BUTTON") {
    // if (e.classList.contains("complete-btn")) {
    //   const buttonIndex = Array.from(allCompleteBtns).indexOf(event.target);
    //   allTask[buttonIndex].classList.toggle("completed");
    // }

    // if (e.classList.contains("delete-btn")) {
    //   if (e.classList.contains("delete-btn")) {
    //     const buttonIndex = Array.from(allDeleteBtns).indexOf(event.target);
    //     allTask[buttonIndex].style.display = "none";
    //   }
    // }

    if (e.classList.contains("complete-btn")) {
      buttonIndex = Array.from(allCompleteBtns).indexOf(e);
      allTask[buttonIndex].classList.toggle("completed");
    }

    if (e.classList.contains("delete-btn")) {
      if (e.classList.contains("delete-btn")) {
        buttonIndex = Array.from(allDeleteBtns).indexOf(e);
        allTask[buttonIndex].style.display = "none";
      }
    }
  }
};

// Eventos

themeToggle.addEventListener("click", changeTheme);

// Configuracion
bgColor.addEventListener("change", storeBgColorTask);
fontSize.addEventListener("change", storeFontSizeTask);
defaultPriority.addEventListener("change", storeDefaultPriority);
defaultDueDate.addEventListener("change", storeDefaultDueDate);

// Task

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", buttonsTasks);
