let todos = [{id:1, title:"Tomorrow is one", dueDate:"2024-04-02"},
{id:2, title:"Gems", dueDate:"2024-04-05"}
];

//CREATE
let btn = document.getElementById("btn");

btn.addEventListener("click", createTodo);

function createTodo(e){
    e.preventDefault();
    document.getElementById("render").innerHTML = ""; //CLEAR EVERYTHING FROM DISPLAY BOX

    let title = document.getElementById("title").value;
    let dueDate = document.getElementById("dueDate").value;
    let id = new Date().getTime();

    //console.log({id:id, title:title, dueDate:dueDate})
    todos.push({id:id, title:title, dueDate:dueDate})
    
    renderTodos();
}

//UPDATE

//delete
function deleteTodo(e){
    let id = Number(e.target.id);
    todos =todos.filter((todo)=>todo.id !== id);
    renderTodos();
}

//display
function renderTodos(){
    document.getElementById("render").innerHTML = "";
    todos.map((todo, index)=>{
        
        let div = document.createElement("div")
        div.textContent = todo.title + " " + todo.dueDate
        let render = document.getElementById("render") //access parent div
        //UPDATE
        let updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        updateBtn.id = todo.id;
        updateBtn.style = "margin-left: 12px; margin-top: 12px";
        //updateBtn.onclick = updateBtn;
        div.append(updateBtn);

        //DELETE
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.id = todo.id;
        deleteBtn.style = "margin-left: 12px; margin-top: 12px";
        deleteBtn.onclick = deleteTodo;
        div.append(deleteBtn);

        render.append(div)
    })
}

renderTodos();