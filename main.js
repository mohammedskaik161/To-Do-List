// Selectors
let todoBtn = document.querySelector(".todo-button");
let todoInput = document.querySelector(".todo-input");
let completeBtn = document.querySelector(".complete-todo");
let trashBtn = document.querySelector(".trash-todo");
let todolist = document.querySelector(".todo-list");
let todo = document.querySelector(".todo");
// Event Listener
todoBtn.addEventListener("click", addTask);
todolist.addEventListener("click", check);
// functions
function addTask(e) {
  e.preventDefault();
  // create li
  let todoLi = document.createElement("li");
  todoLi.classList.add("todo");
  // create div
  let tododiv = document.createElement("div");
  tododiv.classList.add("todo-item");
  // create complete
  let todocomp = document.createElement("button");
  todocomp.classList.add("complete-todo");
  todocomp.innerHTML = `<i class="fas fa-check"></i>`;
  // create trash
  let todotrash = document.createElement("button");
  todotrash.classList.add("trash-todo");
  todotrash.innerHTML = `<i class="fas fa-trash"></i>`;
  let content = todoInput.value;
  tododiv.innerText = content;
  todoLi.append(tododiv);
  todoLi.append(todocomp);
  todoLi.append(todotrash);
  todolist.append(todoLi);
  todoInput.value = ``; 
}
function check(e) {
//   e.preventDefault();
    let item=e.target;
    // console.log(item.classList[0]);
    
    if(item.classList[0] ==="complete-todo"){
      let todo =item.parentElement;
      todo.classList.toggle('completed');
    }if(item.classList[0] ==="trash-todo"){
      let todo =item.parentElement;
      todo.classList.toggle('fall');
      todo.addEventListener('transitionend' ,()=>{
        todo.remove();
      })
    }
}
