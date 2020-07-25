var orderList = document.getElementById("orderlist");
function addTask() {
    var taskValue = document.getElementById("textBox").value;
    if(taskValue == ""){
        alert("Please Enter some task in textbox");
    }
    else{
        // Creating new list item
        newLI = document.createElement("li");
        newText = document.createTextNode(taskValue);
        newLI.appendChild(newText);
        
        // Creating edit button
        editButton = document.createElement("button");
        editButton.setAttribute("class","btn btn-info btn-sm ml-2 editBtn");
        editButton.innerHTML = "EDIT";
        editButton.setAttribute("onclick", "editItem(this)");
        newLI.appendChild(editButton);

        // Creating delete button
        deleteButton = document.createElement("button");
        deleteButton.setAttribute("class","btn btn-danger btn-sm ml-2 deleteBtn ");
        deleteButton.innerHTML = "DELETE";
        deleteButton.setAttribute("onclick", "deleteItem(this)");
        newLI.appendChild(deleteButton);

        // Appening list item into order list
        orderList.appendChild(newLI);
        document.getElementById("textBox").value = "";       
    }   
}
function deleteAllTask(){
    orderList.innerHTML = "";   
}
function editItem(btn){
    var taskTextNode = btn.parentNode.firstChild;
    var newValueOfTask = prompt("Update your task", taskTextNode.nodeValue);
    taskTextNode.nodeValue = newValueOfTask;


}
function deleteItem(btn){
    btn.parentNode.remove();
}