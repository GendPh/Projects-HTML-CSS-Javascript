let addList = document.getElementById("addList");
let listBody = document.getElementById("container-list");
let createDiv = true;
let todoText;




addList.addEventListener("click", function () {
  if (createDiv) {
    const bodyInput = document.createElement("div");
    bodyInput.classList.add("taskBody", "flex");
    addButtonConfirm(bodyInput);
    addInputText(bodyInput);
    addButtonDelete(bodyInput);
    document.getElementById("onGoingTask").appendChild(bodyInput);
    createDiv = false;
  }
});

function addInputText(destination) {
  const inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("placeholder", "Task...");
  inputField.classList.add("todoTask");


  inputField.onkeyup = function () {
    todoText = inputField.value;
    let confirmBtn = document.querySelector(".confirm");
    if (todoText !== undefined && todoText !== "") {
      confirmBtn.classList.remove("confirm-waiting");
    } else {
      confirmBtn.classList.add("confirm-waiting");
    }
  }

  destination.appendChild(inputField);
}

function addButtonConfirm(destination) {
  const button = document.createElement("button");
  button.classList.add("confirm", "confirm-waiting");
  button.addEventListener("click", function () {
    destination.remove();
    createTaskTextBody();
    createDiv = true;
    todoText = undefined;
  })
  destination.appendChild(button);
}

function addButtonDelete(destination) {
  const button = document.createElement("button");
  button.classList.add("cancel");
  button.addEventListener("click", function () {
    destination.remove();
    createDiv = true;
    todoText = undefined;
  })
  destination.appendChild(button);
}




function createTaskTextBody() {
  const dateTime = document.createElement("p");
  const showTaskBody = document.createElement("div");
  showTaskBody.classList.add("taskBody", "flex");

  dateTime.classList.add("timeTask");
  dateTime.textContent = "Start: " + getDays();

  const textTask = document.createElement("p");
  textTask.classList.add("textTask");
  textTask.textContent = todoText;

  showTaskBody.appendChild(dateTime);
  showTaskBody.appendChild(textTask);


  deleteTask(showTaskBody, dateTime);

  document.getElementById("onGoingTask").appendChild(showTaskBody);
}

function deleteTask(parent, dateRemove) {
  const button = document.createElement("button");
  const endTask = document.createElement("p");
  button.classList.add("delete");
  button.addEventListener("click", function () {
    document.getElementById("completedTasks").appendChild(parent);
    endTask.textContent = "End: " + getDays();
    parent.removeChild(button);
    dateRemove.appendChild(endTask);
  })
  parent.appendChild(button);
}


function getDays() {
  let dateObj = new Date();
  let hour = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let seconds = dateObj.getSeconds();
  let month = dateObj.getUTCMonth() + 1;
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();

  let hourDay = hour + " : " + minutes + " : " + seconds;
  let date = year + "/" + month + "/" + day;

  return date + " " + hourDay;
}