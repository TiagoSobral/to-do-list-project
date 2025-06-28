
import { projects, toDoList } from "./to-do-list.js";


export function addToDoList(title, description, dueDate, priority){
    const newToDo = new toDoList(title, description, dueDate, priority);

    projects.push(newToDo);
    console.log(projects);
}

export function addItemToCheckList(toDoListName, itemCheckList) {

    for (let toDo of projects) {
        
        if (toDo.title === toDoListName) {
            
            toDo.checkList.push(itemCheckList);
        }
    }
}

export function removeItemFromCheckList (toDoListName, itemCheckList) {
    
    for (let toDo of projects) {
        
        let checklist = toDo.checkList;
        
        for (let item of checklist) {
            
            if (toDo.title === toDoListName && item === itemCheckList) {
                
                let itemIndex = checklist.indexOf(item);

                checklist.splice(itemIndex,1);

            }
        }
    }
}

