// ?SELECTORS START //

const todosContainer = document.querySelector(".todos");
const searchInput = document.querySelector("#search-input");
const deleteBtn = document.querySelector("#delete-btn");
const addBtn = document.querySelector(".add-btn");
const addPlus = document.querySelector(".fa-plus");
const alertNoti = document.querySelector(".alertNoti");
const clearAll = document.querySelector(".clear-all");
const headerTitle = document.querySelector(".h2text");
const popUpBtn = document.querySelector(".popup-btn");
const mainContainer = document.querySelector(".container");
const closeBtn = document.querySelector(".close-btn");

// ?SELECTORS END //

//* Header Local Storage  START//

function headerData() {
  localStorage.setItem("headerTitle", headerTitle.value);
}
function headerGetData() {
  headerTitle.value = localStorage.getItem("headerTitle");
}
headerTitle.addEventListener("input", () => {
  headerData();
});

headerGetData();

//* Header Local Storage  END//

// TODO Add START//

let id = 1;

const addTodos = () => {
  let newDate = new Date();
  const addTime = newDate.toLocaleString();
  todoValue = searchInput.value;
  if (!searchInput.value) {
    alertNoti.classList.add("shownoti");
  } else {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    todo.innerHTML = `
        <div class="todo-text">
          <h2 class= "todo-value">${todoValue}</h2>
        </div>
        <div class="time-adjust">${addTime}</div>
        <i class="fa-solid fa-trash" id="delete-btn"></i>
         `;
    todosContainer.insertBefore(todo, todosContainer.children[0]);
    searchInput.value = "";
    id++;
    alertNoti.classList.remove("shownoti");
    clearAll.classList.add("showMe");
  }

  if (todosContainer.children.length === 0) {
    clearAll.classList.remove("showMe");
  } else {
    clearAll.classList.add("showMe");
  }
  saveData();
};
// TODO Add END//

// * ADD and CLEAR section //

addBtn.addEventListener("click", addTodos);
addPlus.addEventListener("click", addTodos);
window.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addTodos();
  }
});

todosContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "H2") {
    e.target.classList.toggle("checked");
  } else if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
    if (todosContainer.children.length === 0) {
      clearAll.classList.remove("showMe");
    }
  }
});

clearAll.addEventListener("click", () => {
  todosContainer.innerHTML = "";
  clearAll.classList.remove("showMe");
  saveData();
});

// * ADD and CLEAR END//


// * POPUP SECTION START//

popUpBtn.addEventListener("click", () => {
  mainContainer.style.transform = "scale(1)";
  mainContainer.style.opacity = "1";
  popUpBtn.style.display = "none";
  popUpBtn.style.opacity = "0";
});

closeBtn.addEventListener("click", () => {
  mainContainer.style.transform = "scale(0)";
  mainContainer.style.opacity = "0";
  popUpBtn.style.display = "flex";
  popUpBtn.style.opacity = "1";
});

// * POPUP SECTION START//

// * TO DO Local Storage START //

function saveData() {
  localStorage.setItem("myTodoData", todosContainer.innerHTML);
}

function showTask() {
  todosContainer.innerHTML = localStorage.getItem("myTodoData");
}
showTask();

// * TO DO Local Storage START //

