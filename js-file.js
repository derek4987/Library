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
            <button class="delete-entry">x</button>
            <div class="title">${book.title}</div>
            <div class="author">${book.author}</div>
            <div class="pages">${book.pages}</div>
            <div class="wasRead"><label for="wasRead">Mark as Read</label>
            <input type="checkbox"></div>
            `;
        bookCards.appendChild(card);        
    }
}

// Add book button to open hidden modal
document.querySelector("#addBook").addEventListener('click', (e) => {
    showModal();
});

function showModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add("modal-open");
    const grid = document.querySelector(".grid");
    grid.classList.add("modal-open");
}

// Close modal pressing 'x' in modal block
document.querySelector('.close-modal').addEventListener('click', (e) => {
    closeModal();
});

// Close modal when you click outside of modal **need to make it work
// document.querySelector('.modal').addEventListener('click', function(e) {
//     const isOutside = e.target.closest('.modal-content');
//     if (isOutside) {
//         closeModal();
//     }
// })

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove("modal-open");
    const grid = document.querySelector(".grid");
    grid.classList.remove("modal-open");
    document.getElementById('form').reset();
}

// submit data and add card ***need to make it work
// document.querySelector('#modal-submit').addEventListener('click', function(e) {
//     const title = document.querySelector('#title').textContent;
//     const author = document.querySelector('#author').textContent;
//     const pages = document.querySelector('#pages').textContent;
//     const newBook = Book(title, author, pages, no);
//     addBookToLibrary(newBook);
// })

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'yes');
const Hobbit = new Book('Hobbit', 'J.R.R. Tolkien', 295, 'no');
addBookToLibrary(theHobbit);
addBookToLibrary(Hobbit);
// console.log(theHobbit.info());