import { allProjects } from "./to-do-list";
import { findProject } from "./to-do-list-action";

export function arrayProjectsToDOM() {

    const displayArea = document.querySelector(".display-area");

   
    for (let project of allProjects) {
       
       
        const projectName = project.projectName;
        
        const projectToDoArray = project.toDoArray;

        const projectTitle = document.createElement("h5");
            projectTitle.textContent = projectName;
            projectTitle.setAttribute("class", "project-list-title");

        const ul = document.createElement("ul");


        
        for (let toDo of projectToDoArray) {

            const li = document.createElement("li");
                li.textContent = toDo.title;
            
            ul.appendChild(li);

        }
    
        displayArea.appendChild(projectTitle);
        displayArea.appendChild(ul);
    
    }

}


export function showProject(name = "Main") {


    const chosenProject = findProject(name).chosenProject;

    let toDosOfProject = chosenProject.toDoArray;

    
    const projectTitle = document.querySelector(".project-title");
        projectTitle.textContent = chosenProject.projectName;
    
    const projectToDos = document.querySelector(".project-to-dos");


   
    for (let toDo of toDosOfProject) {

        
        let arrayOfInfoNames = Object.keys(toDo);

        let arrayOfInfoValues = Object.values(toDo);

        
        
        const ul = document.createElement("ul");

        projectToDos.appendChild(ul);


       
        for (let i = 0 ; i < arrayOfInfoValues.length ; i++) {

            const li = document.createElement("li");
                li.setAttribute("class", `${arrayOfInfoNames[i]}`)
                li.textContent = arrayOfInfoValues[i];

            ul.appendChild(li);


        }


    }

}

