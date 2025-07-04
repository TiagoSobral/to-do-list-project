import { arrayProjectsToDOM, showProject } from "./DOM-content";
import { addInputForNameProject, addInputsForToDos, btnAddToDo, removeProjectContentDOM, removeProjectListDOM } from "./DOM-creation";
import { createToDoList } from "./to-do-list-action";
 


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


export function addProjectListener() {

    const btnAddProject = document.querySelector(".add-project");

    btnAddProject.addEventListener("click", () => {

        addInputForNameProject();

        inputListener();
    })


}


function inputListener() {
    
    const inputName = document.querySelector("input");

    inputName.addEventListener("keydown", (e) => {


        if(e.code == "Enter") {

            createToDoList(inputName.value);

            removeProjectListDOM()

            arrayProjectsToDOM();

        }

    } )

}


export function addTaskListener() {

    const newTask = document.querySelector(".add-todo");

    newTask.addEventListener("click", () => {

        addInputsForToDos();

    })
}