import "../css/style.css"
import { createProject, addToDoList, addItemToCheckList, removeItemFromCheckList } from "./to-do-list-action"
import { allProjects } from "./to-do-list";

createProject("Family");
createProject("Travel");

addToDoList("Family","Cleaning", "Weekly Chores", "22-22-22", 3);
addToDoList("Family","zapp", "Weekly Chores", "22-22-22", 3);
addToDoList("Travel","Packing", "Weekly Chores", "22-22-22", 5);

console.log(allProjects);