const myLibrary = [];

function Book(id, title, author, pageNum, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
    this.info = function () {
        return this.title + " by " + this.author + ", " + this.pageNum + " pages" + ", " + this.read;
    }
}

function addBookToLibrary(title, author, pageNum, read) {
    let id = crypto.randomUUID();
    let book = new Book(id, title, author, pageNum, read);
    myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, "not read");
addBookToLibrary("The Last of Us", "Neil Druckman", 2, "not read");

const shelfOne = document.querySelector(".bookshelf-shelf_one");
const shelfTwo = document.querySelector(".bookshelf-shelf_two");
const shelfThree = document.querySelector(".bookshelf-shelf_three");
const shelfFour = document.querySelector(".bookshelf-shelf_four");
let bookCounter = 0;

function displayBook(newBook) {
    let book = document.createElement("div");
    book.setAttribute('data-info', newBook.info());
    book.classList.add("book");
    book.dataset.id = newBook.id;

    let r = getRandomInt(255);
    let g = getRandomInt(255);
    let b = getRandomInt(255);

    if(bookCounter >= 40) {
        return;
    }

    if(bookCounter >= 10 && bookCounter < 20) {
        book.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
        shelfTwo.appendChild(book);
    }
    else if(bookCounter >= 20 && bookCounter < 30) {
        book.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
        shelfThree.appendChild(book);
    }
    else if(bookCounter >= 30 && bookCounter < 40) {
        book.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
        shelfFour.appendChild(book);
    }
    else {
        book.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
        shelfOne.appendChild(book);

    }
    bookCounter++;

    book.addEventListener("click", () => {
        removeButton(book, newBook.id);
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

displayBook(myLibrary[0]);
displayBook(myLibrary[1]);

const addBtn = document.getElementById("add-button");
const dialog = document.getElementById("dialog");
const closeBtn = dialog.querySelector("#close");

addBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titleInput = document.getElementById("title");
    const title = titleInput.value;
    const authorInput = document.getElementById("author");
    const author = authorInput.value;
    const pagesInput = document.getElementById("pages");
    const pageNum = pagesInput.value;

    addBookToLibrary(title, author, pageNum, "not read");
    const lastAddedBook = myLibrary[myLibrary.length - 1];
    displayBook(lastAddedBook);

    dialog.close();
});

let buttonMade = false;
const buttons = document.querySelector(".buttons");
function removeButton(book, bookId) {
    if (buttonMade) {
        return;
    }
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-button");
    buttons.appendChild(removeBtn);
    buttonMade = true;
}