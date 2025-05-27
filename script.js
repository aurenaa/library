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
console.log(myLibrary[0].info());

addBookToLibrary("The Last of Us", "Neil Druckman", 2, "not read");
addBookToLibrary("GTA6", "Rockstar", 10, "read");

const shelfOne = document.querySelector(".bookshelf-shelf_one");
const shelfTwo = document.querySelector(".bookshelf-shelf_two");
const shelfThree = document.querySelector(".bookshelf-shelf_three");
const shelfFour = document.querySelector(".bookshelf-shelf_four");
let bookCounter = 0;

function displayBook(newBook) {
    let book = document.createElement("div");
    book.setAttribute('data-info', newBook.info());
    book.classList.add("book");
    
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
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

displayBook(myLibrary[0]);
displayBook(myLibrary[1]);
