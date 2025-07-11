import { btnAddToDo, displayAreaTabElements, toDoElements, toDoListElementsForDisplayArea } from "./DOM-creation";
import { addProjectListener, addTaskListener, btnCompleteListener, delProjectListener, editToDo, listenerProjectExpand, trashListener } from "./DOM-logic";
import { allProjects } from "./to-do-list";
import { findProject, sort} from "./to-do-list-action";

export function arrayProjectsToDOM() {


    const displayArea = document.querySelector(".display-area");

   
    allProjects.forEach((project, indexProject) => {

        const projectToDos = project.toDoArray;

        const projectName = project.projectName;


        displayAreaTabElements(projectToDos);

       
        const lastProjectCreated = displayArea.querySelector(".wrapper-title:last-of-type");
            lastProjectCreated.setAttribute("data-project-name", `${projectName}`);

        const projectTitle = lastProjectCreated.querySelector("h5");
            projectTitle.textContent = projectName;
            projectTitle.setAttribute("class", "project-list-title");
            projectTitle.setAttribute("data-indexProject", `${indexProject}`);

        const listItems = displayArea.querySelectorAll("ul:last-of-type li");

        for (let index = 0; index < projectToDos.length; index++) {

                listItems[index].textContent = projectToDos[index].title;

        }
            
        // const projectToDoArray = project.toDoArray;

        // sort(projectToDoArray, "dueDate");


    listenerProjectExpand();
    delProjectListener();

})
}




export function showProject(name = "Main") {


    const bring = findProject(name).nameProject;

    let toDosOfProject = bring.toDoArray;

    const projectTitle = document.querySelector(".project-title");
        projectTitle.textContent = bring.projectName;
    
    const projectToDos = document.querySelector(".project-to-dos");

   
    toDosOfProject.forEach((toDo) => {

        let toDoValues = Object.values(toDo);

        let toDoKeys = Object.keys(toDo);


        toDoElements();

       
        const toDoParentElement = projectToDos.querySelector("ul:last-of-type");
            toDoParentElement.setAttribute("priority", `${toDo.priority}`);
            toDoParentElement.setAttribute("data-project-name", `${bring.projectName}`);
            toDoParentElement.setAttribute("data-todo-name", `${toDo.title}`);
            toDoParentElement.setAttribute("complete", `${toDo.completion}`);

            const toDoInfo = toDoParentElement.querySelectorAll("li");
        
        const checkbox = toDoParentElement.querySelector("input[type='checkbox']");
            checkbox.setAttribute("checked", `${toDo.completion}`);

       
        for (let index = 0; index < 5; index++) {

            toDoInfo[index].setAttribute("class", `${toDoKeys[index]}`);
            toDoInfo[index].textContent = toDoValues[index];


        }

    })


    editToDo();
    trashListener();
    btnCompleteListener();
}




export function showFilteredToDos(arrayOfToDos) {

    const projectToDos = document.querySelector(".project-to-dos");


    arrayOfToDos.forEach((toDo) => {

        let value =  Object.values(toDo);

        toDoElements();

        const lastUl = projectToDos.querySelector("ul:last-of-type");

        const listItem = lastUl.querySelectorAll("li");

        const checkBox = projectToDos.querySelector("[type='checkbox']");
            checkBox.setAttribute("checked", `${toDo.completion}`);

        for (let index = 0; index < value.length ; index++) {

            lastUl.setAttribute("priority", `${toDo.priority}`);
            lastUl.setAttribute("complete", `${toDo.completion}`);

            listItem[index].textContent = value[index];

        }

    })
   

}