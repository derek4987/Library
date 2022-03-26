let myLibrary = [];

function Book(title, author, pages, wasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.wasRead = wasRead;
    // this.info = function() {
    //     let info = `${title} by ${author}, ${pages} pages, ${wasRead}`
    //     return info;
    // }
}

// store new book objects into myLibrary array
function addBookToLibrary(book) {
    const container = document.querySelector('#card');
    container.innerHTML = '';
    myLibrary.push(book);
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const container = document.querySelector('#card');
        const div = document.createElement('div');
        div.textContent = book.title;
        container.appendChild(div);        
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const Hobbit = new Book('Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
addBookToLibrary(theHobbit);
addBookToLibrary(Hobbit);
// console.log(theHobbit.info());