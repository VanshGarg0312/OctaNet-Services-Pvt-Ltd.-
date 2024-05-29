document.getElementById('add-task-button').addEventListener('click', function() {
    var taskText = document.getElementById('new-task').value;
    if (taskText) {
        var li = document.createElement('li');
        li.textContent = taskText;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteButton);
        document.getElementById('tasks-list').appendChild(li);

        document.getElementById('new-task').value = '';
    }
});
