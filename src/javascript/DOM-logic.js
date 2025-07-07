import { arrayProjectsToDOM, showProject } from "./DOM-content";
import { addInputForNameProject, addInputsForToDos, removeProjectContentDOM, removeProjectListDOM } from "./DOM-creation";
import { addToDoItem, changeCompletionStatus, createToDoList, removeProject, removeToDo } from "./to-do-list-action";
 


export function listenerProjectExpand() {

    const h5s = document.querySelectorAll("h5");

    h5s.forEach((h5) => {

        let projectTitle = h5.textContent;

        h5.addEventListener("click", () => {
            
            removeProjectContentDOM();
            
            showProject(projectTitle);

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

        showProject(projectTitle);

    })

}


export function trashListener() {


    const trash = document.querySelectorAll(".delete-to-do");

    trash.forEach((trashIcon) => {


        const projectTitle = trashIcon.parentElement.dataset.projectName;
        const toDoName = trashIcon.parentElement.dataset.todoName;

        const lineToErase = trashIcon.parentElement;

        trashIcon.addEventListener("click", () => {

            removeToDo(toDoName, projectTitle);
            lineToErase.remove();



        })

    })

}

export function delProjectListener() {

    const trashIcons = document.querySelectorAll(".del-project");

    trashIcons.forEach((trash) => {

        trash.addEventListener("click", () => {

            const parentNode = trash.parentElement;

            const parentNodeList = parentNode.nextElementSibling;

        parentNode.remove();
        parentNodeList.remove();

        removeProject(trash.dataset.indexnumber);

        });

    })
}

export function btnCompleteListener() {

    const checkboxes = document.querySelectorAll(".checkbox");

    checkboxes.forEach((checkbox) => {
        
        checkbox.addEventListener("click", () => {

            const projectName = checkbox.parentElement.dataset.projectName;
            const todoName = checkbox.parentElement.dataset.todoName;

            const completeStatus = checkbox.previousElementSibling;
            const status =  completeStatus.textContent;

        if (status === "No") {

            changeCompletionStatus("Yes", projectName, todoName);
            completeStatus.textContent = "Yes";

        }
        else {
            changeCompletionStatus("No", projectName, todoName);
            completeStatus.textContent = "No";
        }


    })
})
}