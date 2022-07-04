console.log("hello");
let activeTextValue = "";
let toDoList = [];

const changeToDoText = (textValue) => {
  console.log(textValue);
  activeTextValue = textValue;
};

const addToDo = () => {
  toDoList.push(activeTextValue);
  activeTextValue = "";
  document.getElementById("activeTextInput").innerHTML = "";
  console.log(toDoList);
};

document.getElementById("listRow").innerHTML = `
<div class="rowTask">
    <div class="checkbox">
        <input type="checkbox" onclick="taskdescription" class="taskBox">   
    </div>
    <div class="title">
        Task1
    </div>
</div>`;
