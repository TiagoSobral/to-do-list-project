import "../css/style.css"
import "../css/svgs.css"
import "../css/active-styling.css"

import { createToDoList } from "./to-do-list-action"
import { createDOM } from "./DOM-creation.js";
import { allProjects, looksForStoredProjects } from "./to-do-list.js";
import { arrayProjectsToDOM, showProject } from "./DOM-content.js";
import { filterListener, addProjectListener, addTaskListener } from "./DOM-logic.js";



createDOM();

createToDoList();

looksForStoredProjects();

arrayProjectsToDOM();

showProject();

filterListener();

addProjectListener();

addTaskListener();

