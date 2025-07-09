import { format } from "date-fns";
import { arrayProjectsToDOM, showFilteredToDos, showProject } from "./DOM-content";
import { addInputForNameProject, addInputsForToDos, btnAddToDo, removeProjectContentDOM, removeProjectListDOM, toDoElements } from "./DOM-creation";
import { addToDoItem, changeCompletionStatus, createToDoList, gatherToDos, removeProject, removeToDo } from "./to-do-list-action";
import { de } from "date-fns/locale";
 

        // LEFT SIDE

export function listenerProjectExpand() {

    const h5s = document.querySelectorAll("h5");

    h5s.forEach((h5) => {

        let projectTitle = h5.textContent;

        h5.addEventListener("click", () => {
            
            removeProjectContentDOM();
            
            showProject(projectTitle);

        })
    })



}


export function addProjectListener() {

    const btnAddProject = document.querySelector(".add-project");

    btnAddProject.addEventListener("click", () => {

        addInputForNameProject();

        inputListener();

    })


}


export function filterListener() {

    const btnsFilter = document.querySelectorAll(".today, .upcoming, .completed-todos");

    btnsFilter.forEach((btn) => {

            btn.addEventListener("click", () => {

                // debugger;
            let btnValue = btn.textContent;
        
            removeProjectContentDOM();

            toDosByFilter(btnValue);

        })

});

}


function inputListener() {
    
    const inputName = document.querySelector("input");

    inputName.addEventListener("keydown", (e) => {


        if(e.code == "Enter") {

            createToDoList(inputName.value);

            removeProjectListDOM()

            arrayProjectsToDOM();


        }

    } )

}


export function delProjectListener() {

    const trashIcons = document.querySelectorAll(".del-project");

    trashIcons.forEach((trash) => {

        trash.addEventListener("click", () => {

            const parentNode = trash.parentElement;

            const parentNodeList = parentNode.nextElementSibling;

        parentNode.remove();
        parentNodeList.remove();

        removeProject(trash.dataset.indexnumber);

        });

    })
}

function toDosByFilter(projectKey) {

    const toDos = gatherToDos().arrayOfGathered;

    const projectTitle = document.querySelector(".project-title");

    let filterBy;

    let todaysDate = format(Date(), "yyyy-MM-dd");


    if (projectKey === "Today") {

       filterBy = toDos.filter((task) => task.dueDate == `${todaysDate}`);

    }

    else if (projectKey === "Upcoming") {

       filterBy = toDos.filter((task) => task.dueDate > `${todaysDate}`);
    }

    else {
        
        filterBy = toDos.filter((task) => task.completion === "Yes");
   
    }

    showFilteredToDos(filterBy);

    projectTitle.textContent = projectKey;

}


        // RIGHT SIDE


export function editToDo() {

    const btnEdit = document.querySelectorAll(".edit-todo");


    btnEdit.forEach((btn) => btn.addEventListener("click", () => {

        // debugger;
        const editParentElement = btn.parentElement;

        const dataFromToDo = editParentElement.querySelectorAll("[data-class]");

        let title = dataFromToDo[0].textContent;
        let description = dataFromToDo[1].textContent;
        let dueDate = dataFromToDo[2].textContent;
        let priority = dataFromToDo[3].textContent;

        
        editParentElement.remove();

        addInputsForToDos(title, description, dueDate);

        getPreviousPriorityValue(priority);

        btnAddListener();
    
        
    }
))

};

    // GETS THE VALUE OF THE OPTION TO BE ABLE TO SET IT AS A DEFAULT VALUE WHEN 
    // EDIT IS CLICKED.

function getPreviousPriorityValue(previousOptionValue) {

        const options = document.querySelectorAll("option");

        options.forEach((option) => {

            if (option.value === previousOptionValue) {
                option.setAttribute("selected", "");
            }

        })

};

        // COMPLETE CIRCLE ON EVERY TO DO ITEM


export function btnCompleteListener() {

    const checkboxes = document.querySelectorAll(".checkbox");

    const projectToDos = document.querySelector(".project-to-dos");

    const lastUl = document.querySelector(".project-to-dos ul:last-of-type");

    checkboxes.forEach((checkbox) => {
        
        checkbox.addEventListener("click", () => {


            const parentNode = checkbox.parentElement;
            const nextNode = parentNode.nextElementSibling;

            const projectName = checkbox.parentElement.dataset.projectName;
            const todoName = checkbox.parentElement.dataset.todoName;

            const completeStatus = checkbox.previousElementSibling;
            const status =  completeStatus.textContent;

        if (status === "No") {

            changeCompletionStatus("Yes", projectName, todoName);
            completeStatus.textContent = "Yes";
            completeStatus.setAttribute("completion", "Yes");
            lastUl.after(parentNode);

        }
        
        else {
            changeCompletionStatus("No", projectName, todoName);
            completeStatus.textContent = "No";
            completeStatus.setAttribute("completion", "No");
            nextNode.before(parentNode);
        }


    })
})
};

    // DELETE ICON ON EVERY TO DO ITEM

export function trashListener() {


    const trash = document.querySelectorAll(".delete-to-do");

    trash.forEach((trashIcon) => {


        const projectTitle = trashIcon.parentElement.dataset.projectName;
        const toDoName = trashIcon.parentElement.dataset.todoName;

        const lineToErase = trashIcon.parentElement;

        trashIcon.addEventListener("click", () => {

            removeToDo(toDoName, projectTitle);
            lineToErase.remove();



        })

    })

}

    // ADD NEW TO DOS LOGIC


export function addTaskListener() {

    const newTask = document.querySelector(".add-todo");

    newTask.addEventListener("click", () => {

        addInputsForToDos();

        btnAddListener();

    })
}


function btnAddListener() {

    const btnAdd = document.querySelector("#btn-submit");


    btnAdd.addEventListener("click", (e) => {

        const projectTitle = document.querySelector(".project-title").textContent;

        const todoInputs = document.querySelectorAll(".project-to-dos form input");

        const todoSelect = document.querySelector("select");


        let inputTitle = todoInputs[0].value;
        let inputDescription = todoInputs[1].value;
        let inputDueDate = todoInputs[2].value;
        let inputPriority = todoSelect.value;

        e.preventDefault();

        addToDoItem(inputTitle, inputDescription, inputDueDate, inputPriority, projectTitle)

        removeProjectListDOM();

        removeProjectContentDOM();

        arrayProjectsToDOM();

        showProject(projectTitle);

    })

}

