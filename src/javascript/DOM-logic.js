import { showProject } from "./DOM-content";
import { btnAddToDo } from "./DOM-creation";
 

function eliminateDOM() {
    const todosContentDOM = document.querySelectorAll(".project-to-dos > ul");

    const btnAddTask = document.querySelectorAll(".add-todo");

    todosContentDOM.forEach((element) => element.remove());

    btnAddTask.forEach((element) => element.remove());

}

export function expandProjectToMainScreen() {

    const h5s = document.querySelectorAll("h5");

    h5s.forEach((h5) => {

        let projectTitle = h5.textContent;

        h5.addEventListener("click", () => {
            console.log("tiago");
            
            eliminateDOM();
            
            showProject(projectTitle);
            
            btnAddToDo();


        })
    })



}
