export let allProjects = [];

export class Project {
   toDoArray = [];

   constructor(name) {
    this.projectName = name;
   }
}


export class ToDoItem{

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completion = "No";
    }

    taskStatus(status) {
        this.completion = status;
    } 

}


export function savesProjects() {

    localStorage.setItem("AllProjects", JSON.stringify(allProjects));

}

export function looksForStoredProjects() {
   
    

    let currentAllProjects = localStorage.getItem("AllProjects");

    if (currentAllProjects) {
        const updatedProjects = JSON.parse(currentAllProjects);

        allProjects = updatedProjects;
        console.log(updatedProjects);

    }

}
