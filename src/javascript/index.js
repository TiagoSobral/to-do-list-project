import "../css/style.css"
import "../css/svgs.css"
import "../css/active-styling.css"

import { createToDoList, addToDoItem, changeCompletionStatus, removeToDo} from "./to-do-list-action"
import { createDOM } from "./DOM-creation.js";
import { addNewProject, listenerProjectExpand } from "./DOM-logic.js";

createToDoList();
createToDoList("Family");
createToDoList("Travel");

addToDoItem("Cleaning", "Weekly Chores", "22-22-22",3, "Family");
addToDoItem("zapp", "Weekly Chores", "22-22-22", 3, "Family");
addToDoItem("Packing", "Weekly Chores", "22-22-22", 5, "Travel");
addToDoItem("Finish Project", "To Do List", "Tomorrow", 5);


createDOM();
listenerProjectExpand();
addNewProject();


// add project button
// add task button

// today, upcoming and complete btns

// eliminate button for task and project

// figure out what to do with the complete ones 