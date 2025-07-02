import { arrayProjectsToDOM, showDefaultProject } from "./DOM-content";

const body = document.querySelector("body");

export function createDOM() {

    mainElements();

    projectsTabElements();

    projectContentElements();

}

function mainElements() {

    const projectList = document.createElement("aside");
        projectList.setAttribute("class", "project-list");

    const projectContents = document.createElement("section");
        projectContents.setAttribute("class", "project-content");

    body.appendChild(projectList);
    body.appendChild(projectContents);

}


function projectsTabElements() {

    const projectList = document.querySelector("aside");

    const filterArea = document.createElement("div")
        filterArea.setAttribute("class", "filter-area");

    const displayArea = document.createElement("div");
        displayArea.setAttribute("class", "display-area");

    const addProject = document.createElement("button");
        addProject.setAttribute("class", "add-project");
        addProject.textContent = "Add Project";
    
    const todayToDos = document.createElement("button");
        todayToDos.setAttribute("class", "today");
        todayToDos.textContent = "Today";

    const upcomingToDos = document.createElement("button");
        upcomingToDos.setAttribute("class", "upcoming");
        upcomingToDos.textContent = "Upcoming";

    const completedToDos = document.createElement("button");
        completedToDos.setAttribute("class", "completed-todos");
        completedToDos.textContent = "Completed"

    

    projectList.appendChild(filterArea);
        filterArea.appendChild(addProject);
        filterArea.appendChild(todayToDos);
        filterArea.appendChild(upcomingToDos);
        filterArea.appendChild(completedToDos);

    projectList.appendChild(displayArea);


    arrayProjectsToDOM();
}


function projectContentElements() {

    const projectContent = document.querySelector("section");

    const projectTitle = document.createElement("div");
        projectTitle.setAttribute("class",  "project-title")

    const projectToDos = document.createElement("div");
        projectToDos.setAttribute("class",  "project-to-dos")


    projectContent.appendChild(projectTitle);
    projectContent.appendChild(projectToDos);


    showDefaultProject();
}



function footerElements() {
    
    const footer = document.querySelector("footer");

    const addProject = document.createElement("button");
        addProject.setAttribute("class", "add-project");

    const addToDo = document.createElement("button");
        addToDo.setAttribute("class", "add-todo");

    footer.appendChild(addProject);
    footer.appendChild(addToDo);

}

