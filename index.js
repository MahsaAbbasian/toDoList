console.log("hello");
let activeTextValue = "";
let toDoList = [];
let taskRow = "";
let taskForDelete = [];
const changeToDoText = (textValue) => {
  console.log(textValue);
  activeTextValue = textValue;
};

const addToDo = () => {
  //if( activeTextValue)
  console.log("this is before: ", toDoList);
  if (activeTextValue != "" && !toDoList.includes(activeTextValue)) {
    toDoList.push(activeTextValue);
    renderList();
    {
      "Mahsa", "Aysa";
    }

    console.log("adding ", toDoList);
    activeTextValue = "";
  }
};
const addTaskForDelete = (item) => {
  var checkbox = document.getElementById(`taskCheckBox_${item}`);
  console.log("checkbox.checked ", checkbox.checked);
  if (checkbox.checked != true) {
    taskForDelete = taskForDelete.filter((taskItem) => {
      return taskItem != item;
    });
  } else {
    taskForDelete.push(item);
  }

  console.log("taskForDelete", taskForDelete);
};

const deleteSelectedTasks = () => {
  toDoList = toDoList.filter((item) => {
    if (taskForDelete.includes(item)) {
      return false;
    } else {
      return true;
    }

    //return !taskForDelete.includes(item);
  });
  renderList();
};
const renderList = () => {
  taskRow = "";
  toDoList.map((item) => {
    taskRow =
      taskRow +
      `
  <div class="rowTask">
      <div class="checkbox">
          <input type="checkbox" onclick="addTaskForDelete('${item}')" id="taskCheckBox_${item}" class="taskBox">   
      </div>
      <div class="title">
          ${item}
      </div>
  </div>`;
  });

  document.getElementById("listRow").innerHTML = taskRow;
  document.getElementById("activeTextInput").value = "";
};

renderList();
