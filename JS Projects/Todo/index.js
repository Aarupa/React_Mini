// let item = document.querySelector('#add');
// let btn = document.querySelector('#btn');
// let p = document.querySelector('#p')
// let task = document.querySelector('.tasklist');

// function add() {
//     let taskText = item.value.trim();
//     if(taskText === '')
//     {
//         alert("add task");
//         return;
//     }
//     else{
//         let  li=document.createElement('li');
//         let del = document.createElement('input');
//         let priority = p.value;
//         del.type ='button';
//         del.value='Delete';
//         del.onclick= function(){li.remove()};
        

//         switch(priority)
//         {
//             case 'High':
//                del.style.backgroundColor = "red";
//                 break;
            
//             case 'Medium':
//                 del.style.backgroundColor = "orange";
//                 break;

//             case 'Low':
//                 del.style.backgroundColor = "yellow";
//                 break;

//             case 'NA':
//                 del.style.backgroundColor = "grey";
//                 break;

//             default:
//                 del.style.backgroundColor = "white";
//         }

//         li.textContent = taskText;
//         li.appendChild(del);
//         task.appendChild(li);
        



//         item.value = ' ';
//     }
// }

// btn.addEventListener('click',add);


let item = document.querySelector('#add');
let btn = document.querySelector('#btn');
let p = document.querySelector('#p')
let task = document.querySelector('.tasklist');

let tasks = []; // Array to store tasks

function addTask(taskText, priority) {
    let li = document.createElement('li');
    let del = document.createElement('input');
    del.type = 'button';
    del.value = 'Delete';
    del.onclick = function () {
        li.remove();
        // Remove the task from the tasks array when deleted
        tasks = tasks.filter(task => task.text !== taskText);
    };

    switch (priority) {
        case 'High':
            del.style.backgroundColor = "red";
            break;

        case 'Medium':
            del.style.backgroundColor = "orange";
            break;

        case 'Low':
            del.style.backgroundColor = "yellow";
            break;

        case 'NA':
            del.style.backgroundColor = "grey";
            break;

        default:
            del.style.backgroundColor = "white";
    }

    li.textContent = taskText;
    li.appendChild(del);
    task.appendChild(li);
}

function add() {
    let taskText = item.value.trim();
    let priority = p.value;

    if (taskText === '') {
        alert("Please add a task and select priority");
        return;
    } else {
        // Add the task to the tasks array
        tasks.push({ text: taskText, priority: priority });

        addTask(taskText, priority);

        item.value = '';
    }
}

btn.addEventListener('click', add);

// Add event listeners to priority buttons to display tasks based on priority
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', function () {
        let priority = this.textContent;
        // Clear the task list
        task.innerHTML = '';
        // Display all tasks if "All" button is clicked
        if (priority === "All") {
            tasks.forEach(task => {
                addTask(task.text, task.priority);
            });
        } else {
            // Filter tasks based on priority and add them to the task list
            tasks.filter(task => task.priority === priority).forEach(task => {
                addTask(task.text, task.priority);
            });
        }
    });
});

