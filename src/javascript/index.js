import "../css/style.css"
import "../css/svgs.css"
import "../css/active-styling.css"

import { createToDoList } from "./to-do-list-action"
import { createDOM } from "./DOM-creation.js";
import { allProjects } from "./to-do-list.js";
import { arrayProjectsToDOM } from "./DOM-content.js";

createToDoList();
// createToDoList("Family");
// createToDoList("Travel");

// addToDoItem("Cleaning", "Weekly Chores", "2022-02-22", "High", "Family");
// addToDoItem("zapp", "Weekly Chores", "2027-01-12", "Low", "Family");
// addToDoItem("Packing", "Weekly Chores", "2027-12-22", "Medium", "Family");
// addToDoItem("Finish Project", "To Do List", "2025-07-08", "High");


createDOM();

arrayProjectsToDOM();


console.log(allProjects);


// listener doesn't work when project expand when a new project is entered.

// today, upcoming and complete btns

// eliminate button for task and project

// figure out what to do with the complete ones 