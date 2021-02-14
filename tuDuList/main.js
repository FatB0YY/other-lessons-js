"use strict";

document.addEventListener("DOMContentLoaded", function() {
    let clearAll = document.querySelector("#clearAll");
    clearAll.addEventListener("click", () => {
        localStorage.removeItem("todo");
        window.location.reload();
    });

    let addMessage = document.querySelector(".message");
    let addButton = document.querySelector(".add");
    let todo = document.querySelector(".todo");

    const generateId = () => `id${Math.round(Math.random() * 1e8).toString(16)}`;

    let toDoList = [];

    if (localStorage.getItem("todo")) {
        toDoList = JSON.parse(localStorage.getItem("todo"));
        displayMessages();
    }

    addButton.addEventListener("click", function() {
        if (!addMessage.value) return; //запрет на пустую строку

        let newToDo = {
            todo: addMessage.value,
            checked: false,
            important: false,
            idImp: generateId(),
            idDel: generateId(),
            idTodo: generateId(),
        };

        toDoList.push(newToDo);
        displayMessages();
        localStorage.setItem("todo", JSON.stringify(toDoList));
        addMessage.value = "";
    });

    function displayMessages() {
        let displayMessage = "";

        if (toDoList.length === 0) todo.innerHTML = "";

        toDoList.forEach((item, i) => {
            displayMessage += `

            <li class="toDoItem">
            <input type="checkbox" class="cbx" id="item_${i}" style="display: none;" ${
        item.checked ? "checked" : ""
      }>
            <label data-id="${item.idTodo}" for="item_${i}" class="mycheck ${
        item.important ? "important" : ""
      }"><svg width="18px" height="18px" viewBox="0 0 18 18">
      <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
      <polyline points="1 9 7 14 15 4"></polyline>
  </svg>${item.todo}</label>
            <button class="history__important ${
              item.important ? "important" : ""
            }" data-id="${item.idImp}">&#9733;</button>
            <button class="history__delete" data-id="${item.idDel}">x</button>
        </li>
            `;
            todo.innerHTML = displayMessage;
        });
    }

    todo.addEventListener("change", (event) => {
        const target = event.target;
        //можно сократить, но мне так удобнее епт
        let idInput = target.getAttribute("id");
        let forLabel = todo.querySelector("[for=" + idInput + "]");
        let idLabel = forLabel.getAttribute("data-id");

        toDoList.forEach((item) => {
            if (item.idTodo === idLabel) {
                item.checked = !item.checked;
                localStorage.setItem("todo", JSON.stringify(toDoList));
            }
        });
    });

    todo.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("history__important")) {
            toDoList.forEach((item) => {
                if (item.idImp === target.getAttribute("data-id")) {
                    item.important = !item.important;
                    displayMessages();
                    localStorage.setItem("todo", JSON.stringify(toDoList));
                }
            });
        }
        if (target.classList.contains("history__delete")) {
            toDoList.forEach((item, i) => {
                if (item.idDel === target.getAttribute("data-id")) {
                    toDoList.splice(i, 1);
                    displayMessages();
                    localStorage.setItem("todo", JSON.stringify(toDoList));
                }
            });
        }
    });
});