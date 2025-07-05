import { arrayProjectsToDOM, showProject } from "./DOM-content";
import { addInputForNameProject, addInputsForToDos, btnAddToDo, removeProjectContentDOM, removeProjectListDOM } from "./DOM-creation";
import { addToDoItem, createToDoList } from "./to-do-list-action";
 


export function listenerProjectExpand() {

    const h5s = document.querySelectorAll("h5");

    h5s.forEach((h5) => {

        let projectTitle = h5.textContent;

        h5.addEventListener("click", () => {
            
            removeProjectContentDOM();
            
            showProject(projectTitle);
            
            btnAddToDo();

            addTaskListener();
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

            listenerProjectExpand();

        }

    } )

}


export function addTaskListener() {

    const newTask = document.querySelector(".add-todo");

    newTask.addEventListener("click", () => {

        addInputsForToDos();

        btnAddListener();

    })
}


function btnAddListener() {

    const btnAdd = document.querySelector("#btn-submit");


    btnAdd.addEventListener("click", (e) => {

        const projectTitle = document.querySelector(".project-title").textContent;

        const todoInputs = document.querySelectorAll(".project-to-dos input")

        const todoSelect = document.querySelector("select");



        let inputTitle = todoInputs[0].value;
        let inputDescription = todoInputs[1].value;
        let inputDueDate = todoInputs[2].value;
        let inputPriority = todoSelect[0].value;

        e.preventDefault();

        addToDoItem(inputTitle, inputDescription, inputDueDate, inputPriority, projectTitle)

        removeProjectListDOM();

        removeProjectContentDOM();

        arrayProjectsToDOM();

        addProjectListener();

        showProject(projectTitle);

        btnAddToDo()

        addTaskListener();

    })

}