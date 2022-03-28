let myLibrary = [];
const bookCards = document.querySelector('#book-cards');

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
    bookCards.innerHTML = '';
    myLibrary.push(book);
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="title">${book.title}</div>
            <div class="author">${book.author}</div>
            <div class="pages">${book.pages}</div>
            <div class="wasRead"><label for="wasRead">Mark as Read</label>
            <input type="checkbox"></div>
            `;
        bookCards.appendChild(card);        
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'yes');
const Hobbit = new Book('Hobbit', 'J.R.R. Tolkien', 295, 'no');
addBookToLibrary(theHobbit);
addBookToLibrary(Hobbit);
// console.log(theHobbit.info());