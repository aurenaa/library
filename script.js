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

const book = document.createElement("div");
const shelf = document.querySelector(".bookshelf-shelf");
function displayBook(newBook) {
    const r = getRandomInt(255);
    const g = getRandomInt(255);
    const b = getRandomInt(255);
    book.classList.add("book");
    book.style.width = "30px";
    book.style.height = "135px";
    book.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
    book.style.boxShadow = "0 0 0 2px black";
    shelf.appendChild(book);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

displayBook(myLibrary[0]);
