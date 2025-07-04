import { arrayProjectsToDOM, showProject } from "./DOM-content";

const body = document.querySelector("body");

let btnTitles = ["Add Project", "Today", "Upcoming", "Completed"]

export function createDOM() {

    mainElements();

    projectsTabElements();

    projectContentElements();

    showProject();

    addSpans();

    btnAddToDo();

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

    
    const todayToDos = document.createElement("button");
        todayToDos.setAttribute("class", "today");


    const upcomingToDos = document.createElement("button");
        upcomingToDos.setAttribute("class", "upcoming");


    const completedToDos = document.createElement("button");
        completedToDos.setAttribute("class", "completed-todos");

    

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

}



export function btnAddToDo() {
    
    const projectShowing = document.querySelector(".project-to-dos");

    const addToDo = document.createElement("div");
        addToDo.setAttribute("class", "add-todo");
        const span = document.createElement("span");
            span.textContent = "Add Task";

    projectShowing.appendChild(addToDo);
    addToDo.appendChild(span);
}

function addSpans() {

    const buttons = document.querySelectorAll("button");
    

    for (let i = 0; i < buttons.length; i++) {

        const span = document.createElement("span");

        buttons[i].append(span);

        span.textContent = `${btnTitles[i]}`;

    }

}


export function addInputForNameProject() {

    const projectList = document.querySelector(".display-area");

    const h5 = document.createElement("h5");
        const form = document.createElement("form");
            const inputName = document.createElement("input");
                inputName.setAttribute("type", "text");
                inputName.setAttribute("id", "project-name-input");
                

    h5.setAttribute("class", "input-name");
    
    projectList.appendChild(h5);
        h5.appendChild(form);
            form.appendChild(inputName);

}

