const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function createToDoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-check';

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.innerHTML = '🗑️';

    checkbox.addEventListener('change', function(e) {
        const textSpan = this.parentNode.querySelector('.todo-text');
        if (this.checked) {
            textSpan.classList.add('completed');
        } else {
            textSpan.classList.remove('completed');
        }
    });

    delBtn.addEventListener('click', function(e) {
        const li = this.parentNode;
        li.remove();
        checkEmptyList();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    return li;
}

function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    const newTask = createToDoItem(taskText);
    todoList.appendChild(newTask);

    todoInput.value = '';
    todoInput.focus();

    checkEmptyList();
}

function checkEmptyList() {
    const items = document.querySelectorAll('.todo-item');
    const emptyMsg = document.querySelector('.empty-message');

    if (items.length === 0) {
        if (!emptyMsg) {
            const msg = document.createElement('li');
            msg.className = 'empty-message';
            todoList.appendChild(msg);
        }
    } else {
        if (emptyMsg) emptyMsg.remove();
    }
}

addBtn.addEventListener('click', addTask);

todoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

checkEmptyList();