
import { allProjects, Project, ToDoItem } from "./to-do-list.js";


let defaultValue = "Main";

export function createToDoList(name = defaultValue) {
   
    const newToDoList = new Project(name);
    
    allProjects.push(newToDoList);

}


export function addToDoItem(title, description, dueDate, priority, selectProject = defaultValue){
    
    const newToDo = new ToDoItem(title, description, dueDate, priority);


    allProjects.map((project) => { 
        if (project.projectName === selectProject) {
            project.toDoArray.push(newToDo);
        }

    })

}

export function changeCompletionStatus(answer, selectProject, selectToDo) {
    
    for (let project of allProjects) {
        
        for (let toDoItem of project.toDoArray) {
            
            if(project.projectName === selectProject && toDoItem.title === selectToDo) {
                
                toDoItem.taskStatus(answer);
            }
        }
}
}

function find(selectProject, selectToDo) {

    let projectIndex;
    
    let toDoIndex;
    
    for (let project of allProjects) {
        
        for (let toDoItem of project.toDoArray) {
            
            if (project.projectName === selectProject && toDoItem.title === selectToDo) {
               
                projectIndex = allProjects.indexOf(project);
                
                toDoIndex = project.toDoArray.indexOf(toDoItem);
            }
        }
    }
    return {projectIndex, toDoIndex};
}

export function removeToDo(selectToDo, selectProject = defaultValue) {
    
    const bring = find(selectProject, selectToDo);

    let chosenProject = allProjects[bring.projectIndex];

    let toDosList = chosenProject.toDoArray;

    toDosList.splice(bring.toDoIndex,1);

}