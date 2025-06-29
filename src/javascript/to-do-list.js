export let allProjects = [];

export class Project {
   toDoArray = [];

   constructor(name) {
    this.projectName = name;
   }
}


export class toDoList{
    checkList = [];

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

}
