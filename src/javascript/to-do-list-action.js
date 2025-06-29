
import { allProjects, Project, ToDoItem } from "./to-do-list.js";


export function createToDoList(name) {
    const newToDoList = new Project(name);
    
    allProjects.push(newToDoList);

}


export function addToDoItem(selectProject, title, description, dueDate, priority){
    const newToDo = new ToDoItem(title, description, dueDate, priority);

    let groupOfProjects = allProjects;

    groupOfProjects.map((project) => { 
        if (project.projectName === selectProject) {
            project.toDoArray.push(newToDo);
        }

    })

}
