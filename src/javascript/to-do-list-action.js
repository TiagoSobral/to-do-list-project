
import { allProjects, Project, toDoList } from "./to-do-list.js";


export function createProject(name) {
    const newProject = new Project(name);
    
    allProjects.push(newProject);

}


export function addToDoList(selectProject, title, description, dueDate, priority){
    const newToDo = new toDoList(title, description, dueDate, priority);

    let groupOfProjects = allProjects;

    groupOfProjects.map((project) => { 
        if (project.projectName === selectProject) {
            project.toDoArray.push(newToDo);
        }

    })

}

// export function addItemToCheckList(selectProject, toDoListName, itemCheckList) {

//     let filterProject = allProjects.filter((project) => project.projectName === selectProject);
//     let toDoListArray = filterProject.map((project) => project.toDoArray);


//     for (let toDo of toDoListArray) {
        
//         if (toDo.title === toDoListName) {
            
//             toDo.checkList.push(itemCheckList);
//         }
//     }
// }

// export function removeItemFromCheckList (toDoListName, itemCheckList) {
    
//     for (let toDo of allProjects) {
        
//         let checklist = toDo.checkList;
        
//         for (let item of checklist) {
            
//             if (toDo.title === toDoListName && item === itemCheckList) {
                
//                 let itemIndex = checklist.indexOf(item);

//                 checklist.splice(itemIndex,1);

//             }
//         }
//     }
// }
