
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

export function findProject(selectProject = "Main") {

    let nameProject;

    allProjects.forEach((project) => {

        if (project.projectName === selectProject) {

            nameProject = project;

        }

    })

    return { nameProject };
}



function findIndex(selectProject, selectToDo) {

    let projectIndex;
    
    let toDoIndex;
    
    allProjects.forEach((project, indexProject) => {
        
        project.toDoArray.forEach((toDo, indexToDo) =>  {
            
            if (project.projectName === selectProject && toDo.title === selectToDo) {
               
                projectIndex = indexProject;
                
                toDoIndex = indexToDo;
            }
        })
    })
    return {projectIndex, toDoIndex};
}



export function changeCompletionStatus(answer, selectProject, selectToDo) {
    
    const bring = findIndex(selectProject, selectToDo);

    let arrayOfToDos = allProjects[bring.projectIndex].toDoArray;

    let toDoOfChosen = arrayOfToDos[bring.toDoIndex];

    toDoOfChosen.taskStatus(answer);

    sortBasedOnCompletion(arrayOfToDos);


}




export function removeToDo(selectToDo, selectProject = defaultValue) {
    
    const bring = findIndex(selectProject, selectToDo);

    let chosenProject = allProjects[bring.projectIndex];

    let toDosList = chosenProject.toDoArray;

    toDosList.splice(bring.toDoIndex,1);

}


export function removeProject(projectIndex) {

    allProjects.splice(projectIndex,1);

}



function sortBasedOnCompletion(array) {


    array.sort((a, b) => {

    let completionA = a.completion.toLowerCase();

    let completionB = b.completion.toLowerCase();

    if (completionA > completionB) {
        return 1;
    }

    if (completionA < completionB) {
        return -1;
    }

    return 0;
});

}