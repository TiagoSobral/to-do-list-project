import { arrayProjectsToDOM, showProject } from "./DOM-content";
import { btnAddToDo } from "./DOM-creation";
import { createToDoList } from "./to-do-list-action";
 

function removeProjectContentDOM() {
    const todosContentDOM = document.querySelectorAll(".project-to-dos > ul");

    const btnAddTask = document.querySelectorAll(".add-todo");

    todosContentDOM.forEach((element) => element.remove());

    btnAddTask.forEach((element) => element.remove());

}

function removeProjectListDOM() {

    const projectList = document.querySelectorAll(".display-area > *");

    projectList.forEach((element) => element.remove());


}

export function listenerProjectExpand() {

    const h5s = document.querySelectorAll("h5");

    h5s.forEach((h5) => {

        let projectTitle = h5.textContent;

        h5.addEventListener("click", () => {
            
            removeProjectContentDOM();
            
            showProject(projectTitle);
            
            btnAddToDo();


        })
    })



}


export function addNewProject() {

    const btnAddProject = document.querySelector(".add-project");

    btnAddProject.addEventListener("click", () => {

        removeProjectListDOM();
        
        createToDoList("Tiago");
        
        arrayProjectsToDOM();

        listenerProjectExpand();

    })

}
