import { arrayProjectsToDOM, showDefaultProject } from "./DOM-content";

const body = document.querySelector("body");

export function createDOM() {

    baseElements();

    mainElements();

    projectsTabElements();

    projectContentElements();

    footerElements();
}


function baseElements() {

    const main = document.createElement("main");

    const footer = document.createElement("footer");

    body.appendChild(main);
    body.appendChild(footer);

}


function mainElements() {

    const main = document.querySelector("main");

    const projectList = document.createElement("aside");
        projectList.setAttribute("class", "project-list");

    const projectContents = document.createElement("section");
        projectContents.setAttribute("class", "project-content");

    main.appendChild(projectList);
    main.appendChild(projectContents);

}


function projectsTabElements() {

    const projectList = document.querySelector("aside");

    const filterArea = document.createElement("div")
        filterArea.setAttribute("class", "filter-area");

    const displayArea = document.createElement("div");
        displayArea.setAttribute("class", "display-area");

    const search = document.createElement("button");
        search.setAttribute("class", "search");
        search.textContent = "Search"
    
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
        filterArea.appendChild(search);
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

