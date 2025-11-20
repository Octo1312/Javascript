const taskInput = document.getElementById('input')
const btn = document.getElementById('btn')
const inProgressList = document.getElementById('inProgress')
const doneList = document.getElementById('done')

btn.addEventListener('click', function() {
    const taskNames = document.querySelectorAll('.task-name')
    const existingTasks = Array.from(taskNames).filter(function(task) {
        return task.textContent === taskInput.value
    })
    if  (!existingTasks.length) {
        inProgressList.innerHTML += "<p class='task-name'>"+taskInput.value+"</p>"
    } else {
        taskInput.value = 'You are not allowed to have twice the same task'
    }
})