import "../css/style.css"
import { createToDoList, addToDoItem, changeCompletionStatus, removeToDo } from "./to-do-list-action"
import { allProjects } from "./to-do-list";

createToDoList("Family");
createToDoList("Travel");

addToDoItem("Cleaning", "Weekly Chores", "22-22-22",3, "Family");
addToDoItem("zapp", "Weekly Chores", "22-22-22", 3, "Family");
addToDoItem("Packing", "Weekly Chores", "22-22-22", 5, "Travel");


console.log(allProjects);

// changeCompletionStatus("Yes", "Family", "Cleaning");

// let blaz = allProjects[0].toDoArray;

// const ze = blaz.sort((a, b) => {
//     if (a.completion > b.completion) {
//         return 1;
//     }
//     if (a.completion < b.completion) {
//         return -1;
//     }
//     return 0;
// });

// console.log(blaz);
// console.log(ze);
