let addBtn = document.querySelector("button");
let tfield = document.getElementById("title");
let afield = document.getElementById("author");
let isbnfield = document.getElementById("isbn");
let tbody = document.getElementById("tb");

let books = [];
num = -1;

addBtn.addEventListener("click", function () {
  if (isFieldsEmpty()) {
    displayEmptyFieldWarning();
  } else {
    if (isBookAleadyExist()) {
      displayWarning();
    } else {
      create();
    }
    clearFields();
  }
});

function isFieldsEmpty() {
  if (tfield.value == "" || afield == "" || isbnfield == "") {
    return true;
  } else return false;
}

function deleteBook() {
  let delBtn = document.querySelector("p");
  delBtn.parentElement.remove();
  books.splice(num, 1);
}

function clearFields() {
  tfield.value = "";
  afield.value = "";
  isbnfield.value = "";
}

function create() {
  let book = {
    title: tfield.value,
    author: afield.value,
    isbnVal: isbnfield.value,
  };
  books.push(book);
  showAll();
}

function showAll() {
  tbody.innerHTML = "";
  for (i = 0; i < books.length; i++) {
    let tr = document.createElement("tr");
    num++;
    let oTitle = books[i].title;
    let oAuthor = books[i].author;
    let oIsbn = books[i].isbn;
    tr.innerHTML = `
      <td>${oTitle}</td>
      <td>${oAuthor}</td>
      <td>${oIsbn}</td>
      <p class = 'del' id = "${i}" onclick = "deleteBook()">DELETE BOOK</p>`;
    tbody.appendChild(tr);
  }
}

function displayEmptyFieldWarning() {
  let fillout = document.createElement("div");
  fillout.setAttribute("id", "fd");
  fillout.innerHTML = `
        <p id = "fillout">PLEASE CMPLETE FIELD</p>`;
  let idiv = document.getElementById("input-field");
  let body = document.querySelector("body");
  body.insertBefore(fillout, idiv);
  setTimeout(function () {
    document.getElementById("fd").remove();
  }, 3000);
}

function isBookAleadyExist() {
  let isFound = false;
  for (let i = 0; i < books.length; i++) {
    if (tfield.value === books[i].title) {
      isFound = true;
    }
  }
  return isFound;
}

function displayWarning() {
  let reminder = document.createElement("div");
  reminder.setAttribute("id", "rd");
  reminder.innerHTML = `
          <p id = "reminder">BOOK EXISTS</p>`;
  let idiv = document.getElementById("input-field");
  let body = document.querySelector("body");
  body.insertBefore(reminder, idiv);
  setTimeout(function () {
    document.getElementById("rd").remove();
  }, 3000);
}
