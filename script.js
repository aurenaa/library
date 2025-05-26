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