
var newTask = document.getElementById("new-task");                      //Add a new task.
var addButton = document.getElementById("btnAdd");                      //first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //ul of #incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");  //completed-tasks

var downUI=function(){
  var items = document.createElement("li");
  var label1=document.createElement("label");
  label1.innerText="Note";
  var note=document.createElement("input");
  item.appendChild(label1);
  item.appendChild(note);

  return item;
}
//New task list item
var createNewTaskElement = function (taskString) {
  var listItem = document.createElement("li");

  var checkBox = document.createElement("input");         //checkbx
  var label = document.createElement("label");            //label
  //var nameBtn=document.createElement("button");               //button
  var deleteButton = document.createElement("button");    //delete button
  
  label.innerText = taskString;
  //label2.innerText=new Date();
  //nameBtn.innerText=taskString;
  //nameBtn.className="accordion";
  
  checkBox.type = "checkbox";

  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  //var item=downUI();


  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  //listItem.appendChild(nameBtn);

  //listItem.appendChild(item);
  

  return listItem;
};

//new task addition
var addTask = function () {
  console.log("Add Task...");
  if(newTask.value!=""){
  var listItem = createNewTaskElement(newTask.value);

  //Append listItem to incompleteTaskHolder
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  newTask.value = "";
  }else{
    alert("Sorry i am unable to create empty name TODO list!");
  }
};

//Delete an existing task.
var deleteTask = function () {
  console.log("Delete Task...");

  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
};

//Mark task completed
var taskCompleted = function () {
  console.log("Complete Task...");

  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
};

var taskIncomplete = function () {
  console.log("Incomplete Task...");
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
};

var ajaxRequest = function () {
  console.log("AJAX Request");
};

addButton.onclick = addTask;
//addButton.addEventListener("click", ajaxRequest);
//checkBoxEventHandler=taskCompleted/taskIncomplete

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {

  console.log("bind list item events");
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var deleteButton = taskListItem.querySelector("button.delete");
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;

};

//list imcomplete tasks
//for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
 // bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
//}
//list completed tasks
//for (var i = 0; i < completedTasksHolder.children.length; i++) {
 //bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
//}
