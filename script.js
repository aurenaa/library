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
        if (newBook.read != "read") {
            readButton(book, newBook.id);
        }
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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

function getBookById(id) {
    return myLibrary.find(book => book.id == id);
}

let buttonRemove = false;
const buttons = document.querySelector(".buttons");
let removeBtn = document.createElement("button");
function removeButton(book, bookId) {
    if (buttonRemove) {
        return;
    }

    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-button");
    buttons.appendChild(removeBtn);
    buttonRemove = true;

    removeBtn.addEventListener("click", () => {
        book.remove();
        buttons.removeChild(removeBtn);
        buttonRemove = false;
        bookCounter--;
        if (bookCounter == 0) {
            buttons.removeChild(readBtn);
        }
    });
}

let buttonRead = false;
let readBtn = document.createElement("button");
function readButton(book, bookId) {
    if (buttonRead) {
        return;
    }

    readBtn.textContent = "Status";
    readBtn.classList.add("read-button");
    buttons.appendChild(readBtn);
    buttonRead = true;

    readBtn.addEventListener("click", () => {
        const bookToUpdate = getBookById(bookId);
        if (bookToUpdate) {
            bookToUpdate.read = "read";
            book.setAttribute('data-info', bookToUpdate.info());
            buttons.removeChild(readBtn);
            buttonRead = false;
        }
    });
}