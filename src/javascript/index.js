import "../css/style.css"
import "../css/svgs.css"
import "../css/active-styling.css"

import { createToDoList, addToDoItem, changeCompletionStatus, removeToDo} from "./to-do-list-action"
import { createDOM } from "./DOM-creation.js";
import { addProjectListener, addTaskListener, listenerProjectExpand , showToDosFromFilter} from "./DOM-logic.js";
import { allProjects } from "./to-do-list.js";

createToDoList();
createToDoList("Family");
createToDoList("Travel");

addToDoItem("Cleaning", "Weekly Chores", "2022-02-22", "High", "Family");
addToDoItem("zapp", "Weekly Chores", "2022-01-12", "Low", "Family");
addToDoItem("Packing", "Weekly Chores", "2022-12-22", "Medium", "Travel");
addToDoItem("Finish Project", "To Do List", "2025-07-08", "High");


createDOM();
listenerProjectExpand();

console.log(allProjects);


// listener doesn't work when project expand when a new project is entered.

// today, upcoming and complete btns

// eliminate button for task and project

// figure out what to do with the complete ones 