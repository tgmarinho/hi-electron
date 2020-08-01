"use strict";

console.log(" ---> Lendo o arquito todos.js");

// Cria o botão excluir para a lista de tarefas já existentes.
const myNodelist = document.querySelectorAll("li");
myNodelist.forEach((_, index) => {
  let span = document.createElement("span");
  let iconDelete = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(iconDelete);
  myNodelist[index].appendChild(span);
});

// Clicando no botão para excluir a tarefa da lista
const closesButton = document.querySelectorAll(".close");

function addCloseButton() {
  closesButton.forEach((_, index) => {
    closesButton[index].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    };
  });
}

addCloseButton();

// Marca a tarefa como checada quando clicar em algum item da lista
const todoList = document.querySelector("ul");
todoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

// Cria uma nota lista de tarefas quando clicar no botão addNewTodo
function addNewTodo(event) {
  if (event && event.keyCode !== 13) return;

  const li = document.createElement("li");
  const inputTodo = document.getElementById("inputTodo").value;
  let t = document.createTextNode(inputTodo);
  li.appendChild(t);
  if (inputTodo === "") {
    alert("Digite alguma tarefa!");
  } else {
    document.getElementById("ulTodo").appendChild(li);
  }
  document.getElementById("inputTodo").value = "";

  const span = document.createElement("SPAN");
  const iconDelete = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(iconDelete);
  li.appendChild(span);

  span.onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
}
