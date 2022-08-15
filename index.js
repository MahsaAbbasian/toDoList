console.log("hello");
let activeTextValue = "";
let toDoList = ["Mahsa", "Aysa", "Madar", "car"];
let taskRow = "";
const changeToDoText = (textValue) => {
  console.log(textValue);
  activeTextValue = textValue;
};

const addToDo = () => {
  toDoList.push(activeTextValue);

  document.getElementById("activeTextInput").innerHTML = "";
  console.log(toDoList);
  activeTextValue = "";
};

const renderList = () => {
  toDoList.map((item) => {
    taskRow =
      taskRow +
      `
  <div class="rowTask">
      <div class="checkbox">
          <input type="checkbox" onclick="taskdescription" class="taskBox">   
      </div>
      <div class="title">
          ${item}
      </div>
  </div>`;
  });

  document.getElementById("listRow").innerHTML = taskRow;
};

renderList();
