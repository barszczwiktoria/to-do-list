{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent
        });
        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
    <li class="tasks__item js-tasks"> 
    <button class="tasks__button tasks__button--toggleDone js-toggleDone">
    ${task.done ? "✓" : ""}
    </button>
    <span class="tasks__content${task.done ? "tasks__content--done" : ""}">
    ${task.content}</span>
    <button class="tasks__button tasks__button--remove js-remove">
    🗑
    </button>
    </li>
    `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });


    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }
        newTaskElement.focus();
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

        addNewTask();
    };
    init();
}
