import { arrayProjectsToDOM, showProject } from "./DOM-content";
import { addProjectListener, addTaskListener, filterListener } from "./DOM-logic";

const body = document.querySelector("body");

let btnTitles = ["Add Project", "Today", "Upcoming", "Completed"]



export function createDOM() {

    mainElements();

    projectsTabElements();

    projectContentElements();

    showProject();

    addSpans();

    filterListener();

    addProjectListener();

    addTaskListener();


}

function mainElements() {

    const projectList = document.createElement("aside");
        projectList.setAttribute("class", "project-list");

    const projectContents = document.createElement("section");
        projectContents.setAttribute("class", "project-content");

    body.appendChild(projectList);
    body.appendChild(projectContents);

}

    // LEFT SECTION 

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


    // arrayProjectsToDOM();
}


export function displayAreaTabElements(arrayOfTodos) {

    // debugger;
        const displayArea = document.querySelector(".display-area");

        const wrapperTitle = document.createElement("div");
            wrapperTitle.setAttribute("class", "wrapper-title");

        const projectTitle = document.createElement("h5");
            projectTitle.setAttribute("class", "project-list-title");
        
        const delProject = document.createElement("div");
            delProject.setAttribute("class", "del-project");

        const listOfToDos = document.createElement("ul");
            listOfToDos.setAttribute("class", "list-of-to-dos");


         displayArea.appendChild(wrapperTitle);
            wrapperTitle.appendChild(projectTitle);
            wrapperTitle.appendChild(delProject);
        displayArea.appendChild(listOfToDos);


    for (let index = 0; index < arrayOfTodos.length; index++) {
       
        const listItem = document.createElement("li");
            listItem.setAttribute("class", "to-do-item");
    
        listOfToDos.appendChild(listItem);
    }

}



function addSpans() {

    const buttons = document.querySelectorAll("button");
    

    for (let i = 0; i < buttons.length; i++) {

        const span = document.createElement("span");

        buttons[i].append(span);

        span.textContent = `${btnTitles[i]}`;

    }

}


export function removeProjectListDOM() {

    const projectList = document.querySelectorAll(".display-area > *");

    projectList.forEach((element) => element.remove());


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



        // RIGHT SECTION

function projectContentElements() {

    const projectContent = document.querySelector("section");

    const projectTitle = document.createElement("div");
        projectTitle.setAttribute("class",  "project-title")

    const projectToDos = document.createElement("div");
        projectToDos.setAttribute("class",  "project-to-dos")


    projectContent.appendChild(projectTitle);
    projectContent.appendChild(projectToDos);

    btnAddToDo();

}


export function toDoElements() {

    
    const btnAddTask = document.querySelector(".add-todo");
            
        const ul = document.createElement("ul");

            const edit = document.createElement("div");
                edit.setAttribute("class", "edit-todo");


            const trash = document.createElement("li");
                trash.setAttribute("class", "delete-to-do");

            const btnStatus = document.createElement("input");
                btnStatus.setAttribute("type", "checkbox");
                btnStatus.setAttribute("name", "completed");
                btnStatus.setAttribute("value", "Yes");
                btnStatus.setAttribute("class", "checkbox");

        btnAddTask.before(ul);


       
        for (let i = 0 ; i < 5 ; i++) {

            const li = document.createElement("li");
                li.setAttribute("data-class", "to-do-item");


            ul.appendChild(li);


        }

        ul.appendChild(btnStatus);
        ul.appendChild(edit);
        ul.appendChild(trash);

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



export function addInputsForToDos(title = "", description = "", dueDate = "", option) {

    const projectToDos = document.querySelector(".project-to-dos");

    const addToDo = document.querySelector(".add-todo");


    const form = document.createElement("form");
            
            const inputTitle = document.createElement("input");
                inputTitle.setAttribute("type", "text");
                inputTitle.setAttribute("id", "to-do-title-input");
                inputTitle.setAttribute("minlength", "2");
                inputTitle.setAttribute("value", `${title}`);



            const inputDescription = document.createElement("input")
                inputDescription.setAttribute("type", "text");
                inputDescription.setAttribute("id", "to-do-description-input");
                inputDescription.setAttribute("minlength", "2");
                inputDescription.setAttribute("value", `${description}`);
            


            const inputDueDate = document.createElement("input")
                inputDueDate.setAttribute("type", "date");
                inputDueDate.setAttribute("id", "to-do-due-date-input");
                inputDueDate.setAttribute("value", `${dueDate}`);
            


            const inputPriority = document.createElement("select")
                inputPriority.setAttribute("id", "to-do-priority-input");
                

                const optionLow = document.createElement("option");
                    optionLow.setAttribute("value", "Low");
                    optionLow.textContent = "Low";


                const optionMedium = document.createElement("option");
                    optionMedium.setAttribute("value", "Medium");
                    optionMedium.textContent = "Medium";


                const optionHigh = document.createElement("option");
                    optionHigh.setAttribute("value", "High");
                    optionHigh.textContent = "High";
            

            const inputSubmit = document.createElement("button")
                inputSubmit.setAttribute("type", "submit");
                inputSubmit.setAttribute("id", "btn-submit");
                inputSubmit.textContent = "Add";


    projectToDos.insertBefore(form, addToDo);
       
           
            form.appendChild(inputTitle);
            form.appendChild(inputDescription);
            form.appendChild(inputDueDate);
            form.appendChild(inputPriority);
                inputPriority.appendChild(optionHigh);
                inputPriority.appendChild(optionMedium);
                inputPriority.appendChild(optionLow);
            form.appendChild(inputSubmit);



}



export function removeProjectContentDOM() {
    const todosContentDOM = document.querySelectorAll(".project-to-dos > *:not(.add-todo)");

    todosContentDOM.forEach((element) => element.remove());


}







