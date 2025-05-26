const myLibrary = [];

function Book(id, title, author, pageNum, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
    this.info = function () {
        return this.id + ", " +this.title + " by " + this.author + ", " + this.pageNum + " pages" + ", " + this.read;
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
    let r = getRandomInt(255);
    let g = getRandomInt(255);
    let b = getRandomInt(255);

    if(bookCounter >= 40) {
        return;
    }

    if(bookCounter >= 10 && bookCounter < 20) {
        book.classList.add("book");
        book.style.width = "30px";
        book.style.height = "135px";
        book.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
        book.style.boxShadow = "0 0 0 2px black";
        shelfTwo.appendChild(book);
        bookCounter++;
        return;
    }
    else if(bookCounter >= 20 && bookCounter < 30) {
        book.classList.add("book");
        book.style.width = "30px";
        book.style.height = "135px";
        book.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
        book.style.boxShadow = "0 0 0 2px black";
        shelfThree.appendChild(book);
        bookCounter++;
        return;
    }
    else if(bookCounter >= 30 && bookCounter < 40) {
        book.classList.add("book");
        book.style.width = "30px";
        book.style.height = "135px";
        book.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
        book.style.boxShadow = "0 0 0 2px black";
        shelfFour.appendChild(book);
        bookCounter++;
        return;
    }
    else {
        book.classList.add("book");
        book.style.width = "30px";
        book.style.height = "135px";
        book.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
        book.style.boxShadow = "0 0 0 2px black";
        shelfOne.appendChild(book);
        bookCounter++;
        return;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

displayBook(myLibrary[0]);
displayBook(myLibrary[1]);
displayBook(myLibrary[2]);
displayBook(myLibrary[3]);
displayBook(myLibrary[4]);
displayBook(myLibrary[5]);
displayBook(myLibrary[6]);
displayBook(myLibrary[7]);
displayBook(myLibrary[8]);
displayBook(myLibrary[9]);
displayBook(myLibrary[10]);


