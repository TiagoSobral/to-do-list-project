import { se } from "date-fns/locale";
import { btnAddToDo } from "./DOM-creation";
import { addProjectListener, addTaskListener, btnCompleteListener, delProjectListener, listenerProjectExpand, trashListener } from "./DOM-logic";
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


    const foundProject = findProject(name).nameProject;

    let toDosOfProject = foundProject.toDoArray;

    
    const projectTitle = document.querySelector(".project-title");
        projectTitle.textContent = foundProject.projectName;
    
    const projectToDos = document.querySelector(".project-to-dos");


   
    toDosOfProject.forEach((toDo) => {

        
        let arrayOfInfoNames = Object.keys(toDo);

        let arrayOfInfoValues = Object.values(toDo);

        
        
        const ul = document.createElement("ul");
            ul.setAttribute("data-project-name", `${foundProject.projectName}`);
            ul.setAttribute("data-todo-name", `${toDo.title}`)


            const trash = document.createElement("li");
                trash.setAttribute("class", "delete-to-do");

            const btnStatus = document.createElement("input");
                btnStatus.setAttribute("type", "checkbox");
                btnStatus.setAttribute("name", "completed");
                btnStatus.setAttribute("value", "Yes");
                btnStatus.setAttribute("class", "checkbox");

        projectToDos.appendChild(ul);


       
        for (let i = 0 ; i < arrayOfInfoValues.length ; i++) {

            const li = document.createElement("li");
                li.setAttribute("class", `${arrayOfInfoNames[i]}`);
                li.textContent = arrayOfInfoValues[i];


            ul.appendChild(li);


        }

        ul.appendChild(btnStatus);
        ul.appendChild(trash);
    })


    trashListener();
    btnAddToDo();
    addTaskListener();
    btnCompleteListener();
}

