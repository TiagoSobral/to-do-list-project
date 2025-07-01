import "../css/style.css"
import { createToDoList, addToDoItem, changeCompletionStatus, removeToDo } from "./to-do-list-action"
import { allProjects } from "./to-do-list";
import { createDOM } from "./DOM-creation.js";

createToDoList("Family");
createToDoList("Travel");

addToDoItem("Cleaning", "Weekly Chores", "22-22-22",3, "Family");
addToDoItem("zapp", "Weekly Chores", "22-22-22", 3, "Family");
addToDoItem("Packing", "Weekly Chores", "22-22-22", 5, "Travel");


createDOM();
