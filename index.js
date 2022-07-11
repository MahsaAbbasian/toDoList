console.log("hello");
let activeTextValue = "";
let toDoList = [];
let taskRow = "";
const changeToDoText = (textValue) => {
  console.log(textValue);
  activeTextValue = textValue;
};

const addToDo = () => {
  toDoList.push(activeTextValue);

  document.getElementById("activeTextInput").innerHTML = "";
  console.log(toDoList);

  taskRow =
    taskRow +
    `
  <div class="rowTask">
      <div class="checkbox">
          <input type="checkbox" onclick="taskdescription" class="taskBox">   
      </div>
      <div class="title">
          ${activeTextValue}
      </div>
  </div>`;
  document.getElementById("listRow").innerHTML = taskRow;
  activeTextValue = "";
};
