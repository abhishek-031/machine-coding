const Todos = {
  init(container) {
    this.todos = [];
    this.container = container;
    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.addEventListener("keyup", this.inputChangeHandler.bind(this));
    this.todosListEl = document.createElement("div");
    this.todosListEl.classList.add("todos-list")
    container.appendChild(inputEl)
    container.appendChild(this.todosListEl);
  },
  inputChangeHandler(e) {
    if(e.key === "Enter") {
      let text = e.target.value.trim();
      if(text.length) {
        this.addTodo(text);
        e.target.value = "";
      }
    }
  },
  handleClickEvent(e) {
    switch(e.target.tagName){
      case "INPUT" : 
        this.updateTodo(e.target.dataset.todoid);
        break;
      case "BUTTON":
        this.removeTodo(e.target.dataset.todoid);
    }
  },
  addTodo(text) {
    this.todos.push({
      id: this.todos.length+1,
      text,
      done: false
    });
    this.input = "";
    this.renderTodos();
  },
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== +id)
    this.renderTodos();
  },
  updateTodo(id) {
    let todoToUpdate = this.todos.find(todo => todo.id === +id);
    if(todoToUpdate) {
      todoToUpdate.done = !todoToUpdate.done
    }
    this.renderTodos();
  },
  renderTodos() {
    this.todosListEl.innerHTML = "";
    this.todos.forEach(todo => {
      let todoEl = document.createElement("div");
      todoEl.classList.add("todo");
      let checkbox = document.createElement("input");
      checkbox.type="checkbox";
      checkbox.checked = todo.done;
      checkbox.dataset.todoid = todo.id;
      let title = document.createElement("span");
      title.innerText = todo.text;
      title.style.textDecoration = todo.done ? "line-through" : "none"
      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "X";
      deleteBtn.dataset.todoid = todo.id;
      todoEl.appendChild(checkbox);
      todoEl.appendChild(title);
      todoEl.appendChild(deleteBtn);
      todoEl.addEventListener("click", this.handleClickEvent.bind(this))
      this.todosListEl.appendChild(todoEl);
    })
  },
}

function initTodos(container) {
  let todos = Object.create(Todos);
  todos.init(container);
}

export {initTodos}