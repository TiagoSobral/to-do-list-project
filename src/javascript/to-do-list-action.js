
import { allProjects, Project, ToDoItem } from "./to-do-list.js";


export function createToDoList(name) {
   
    const newToDoList = new Project(name);
    
    allProjects.push(newToDoList);

}


export function addToDoItem(selectProject, title, description, dueDate, priority){
    
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

export function removeToDo(selectProject, selectToDo) {
    
    const bring = find(selectProject, selectToDo);

    let chosenProject = allProjects[bring.projectIndex];

    let toDosList = chosenProject.toDoArray;

    toDosList.splice(bring.toDoIndex,1);

}