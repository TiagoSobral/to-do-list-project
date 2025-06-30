import "../css/style.css"
import { createToDoList, addToDoItem, changeCompletionStatus, removeToDo } from "./to-do-list-action"
import { allProjects } from "./to-do-list";

createToDoList("Family");
createToDoList("Travel");

addToDoItem("Family","Cleaning", "Weekly Chores", "22-22-22", 3);
addToDoItem("Family","zapp", "Weekly Chores", "22-22-22", 3);
addToDoItem("Travel","Packing", "Weekly Chores", "22-22-22", 5);
