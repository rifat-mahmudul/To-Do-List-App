const addTaskBtn = () =>{
    const dailyTaskInput = document.getElementById('dailyTaskInput').value.trim();
    const dailyTask = document.getElementById('dailyTask');
    

    if(dailyTaskInput){
        const dailyTaskList = document.createElement("li");
        dailyTask.appendChild(dailyTaskList);

        dailyTaskList.innerHTML = `
            <div><input type="checkbox"> ${dailyTaskInput}</div> <i class="ri-delete-bin-5-line" onclick="deleteTask(this)"></i>
        `
        document.getElementById('dailyTaskInput').value = "";
    }

    else{
        alert("Please enter your task");
    }
}


const deleteTask = (deleteIcon) => {
    const li = deleteIcon.parentNode;
    li.parentNode.removeChild(li);
}

const deleteCompletedTask = () =>{

    const dailyTask = document.getElementById('dailyTask');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')

    checkboxes.forEach(checkbox => {
        const div = checkbox.parentNode;

        const li = div.parentNode;

        li.parentNode.removeChild(li);
    })
}