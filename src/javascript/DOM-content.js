import { btnAddToDo, toDoElements } from "./DOM-creation";
import { addProjectListener, addTaskListener, btnCompleteListener, delProjectListener, editToDo, listenerProjectExpand, trashListener } from "./DOM-logic";
import { allProjects } from "./to-do-list";
import { findProject } from "./to-do-list-action";

export function arrayProjectsToDOM() {

    const displayArea = document.querySelector(".display-area");

   
    allProjects.forEach((project, indexProject) => {
       
       
        const projectName = project.projectName;
        
        const projectToDoArray = project.toDoArray;


        const wrapperTitle = document.createElement("div");
            wrapperTitle.setAttribute("class", "wrapper-title");

        const projectTitle = document.createElement("h5");
            projectTitle.textContent = projectName;
            projectTitle.setAttribute("class", "project-list-title");
            projectTitle.setAttribute("data-indexProject", `${indexProject}`)
        
        const delProject = document.createElement("div");
            delProject.setAttribute("class", "del-project");

        const ul = document.createElement("ul");


        
        projectToDoArray.forEach((toDo) => {

            const li = document.createElement("li");
                li.textContent = toDo.title;
            
            ul.appendChild(li);

        })
    
        displayArea.appendChild(wrapperTitle);
        wrapperTitle.appendChild(projectTitle);
        wrapperTitle.appendChild(delProject);
        displayArea.appendChild(ul);
    
    })

    addProjectListener();
    listenerProjectExpand();
    delProjectListener();

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

       
        const toDoParentElement = projectToDos.querySelector("ul:last-child");
            toDoParentElement.setAttribute("data-project-name", `${bring.projectName}`);
            toDoParentElement.setAttribute("data-todo-name", `${toDo.title}`);
            const toDoInfo = toDoParentElement.querySelectorAll("li");

       
        for (let index = 0; index < 5; index++) {

            toDoInfo[index].setAttribute("class", `${toDoKeys[index]}`);
            toDoInfo[index].textContent = toDoValues[index];


        }

    })


    editToDo();
    btnAddToDo();
    trashListener();
    addTaskListener();
    btnCompleteListener();
}

export function showFilteredToDos(arrayOfToDos) {

    const projectToDos = document.querySelector(".project-to-dos");

    let bla = arrayOfToDos;

    arrayOfToDos.forEach((toDo) => {

        let value =  Object.values(toDo);

        toDoElements();

        const li = projectToDos.querySelectorAll("ul:last-child li");

        for (let i = 0; i < value.length ; i++) {

            li[i].textContent = value[i];

        }

    })
   

}