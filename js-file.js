let myLibrary = [];
const bookCards = document.querySelector('#book-cards');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const grid = document.querySelector('.grid');
let card;

function Book(title, author, pages, wasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.wasRead = wasRead;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'yes');
const Hobbit = new Book('Hobbit', 'J.R.R. Tolkien', 295, 'no');
myLibrary.push(theHobbit,Hobbit);
addBookToLibrary(theHobbit);
addBookToLibrary(Hobbit);

// Add book button to open hidden modal
document.querySelector("#addBook").addEventListener('click', (e) => {
    showModal();
});


// Close modal pressing 'x' in modal block
document.querySelector('.close-modal').addEventListener('click', (e) => {
    closeModal();
});

// Close modal when you click outside of modal ** Maybe update and add for future use
// document.querySelector('.grid').addEventListener('click', function(e) {
//     const isOutside = (e.target.closest('.modal'));
//     const modal = document.querySelector('.modal');
//     console.log(isOutside);
//     if (modal.classList.length === 2 && isOutside === null) {
//         closeModal();
//     } else return
// })


// clear button
document.querySelector('#clear').addEventListener('click', function(e) {
    clear();
})


// submit data and add card after pressing submit on modal
document.querySelector('#modal-submit').addEventListener('click', function(e) {
    let wasRead;
    if (document.getElementById('yes').checked === true) {
        wasRead = 'yes';
    } else wasRead = 'no';
    if (title.value!=='' && author.value!=='' && (pages.value!=='' || pages.value<1)) {
        const newBook = new Book(title.value, author.value, pages.value, wasRead);
        myLibrary.push(newBook);
        addBookToLibrary(newBook);
        closeModal();
    } else return;
})

// card event listeners
document.addEventListener('click', function(e) {

    // delete card
    if (e.target.matches('.delete-entry')) {
        // removes entry from page
        deleteEntry(e);
        
        card = document.querySelectorAll('.card');
    }

    // change was read status
    if (e.target.matches('.checkbox')) {
        wasRead(e);
    }

}, false);

// update library log
function updateLibraryLog() {
    const totalBooks = document.querySelector('#totalBooks');
    const booksRead = document.querySelector('#booksRead');
    const booksNotRead = document.querySelector('#booksNotRead');
    let read = 0;
    let notRead = 0;

    for (let i=0; i<myLibrary.length; i++) { 
        if (myLibrary[i].wasRead === 'yes') {
            read += 1;
        } else {
            notRead += 1;
        }
    }
    totalBooks.textContent = myLibrary.length;
    booksRead.textContent = read;
    booksNotRead.textContent = notRead;
}

// show modal function
function showModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add("modal-open");
    const grid = document.querySelector(".grid");
    grid.classList.add("modal-open");
    grid.classList.add('disable');
}


// close Modal function
function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove("modal-open");
    const grid = document.querySelector(".grid");
    grid.classList.remove("modal-open");
    grid.classList.remove("disable");
    // buttons
    document.querySelector('.grid-button').disabled = false;
    // checkbox
    document.querySelector('#wasRead').disabled = false;
    clear();
}


// store new book objects into myLibrary array and add card
function addBookToLibrary(book) {
    bookCards.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const card = document.createElement('div');
        let wasRead;
        if (book.wasRead === 'yes') {
            wasRead = 'checked';
        } else wasRead = '';
        card.classList.add('card');
        card.innerHTML = `
            <button class="delete-entry grid-button" id="x${i}">x</button>
            <div class="title">${book.title}</div>
            <div class="author">${book.author}</div>
            <div class="pages">${book.pages}</div>
            <div class="wasRead"><label>Mark as Read</label>
            <input class="checkbox box${i}" id="wasRead" type="checkbox" ${wasRead}></div>
            `;
        bookCards.appendChild(card);        
    }
    card = document.querySelectorAll('.card');
    console.log(card)
    updateLibraryLog();
}

// clear form function
function clear() {
    title.value = '';
    author.value = '';
    pages.value = '';
    document.getElementById('yes').checked = false;
    document.getElementById('no').checked = true;
}

// delete card function
function deleteEntry(e) {
    let parent = e.target.parentNode;
    console.log(parent);
    bookCards.removeChild(parent);

    //removes associated object from myLibrary
    for (let i=0; i<myLibrary.length; i++) {
        if (e.target.matches(`#x${i}`)) {
            if (myLibrary.length > 1) {
                myLibrary.splice(i,1);
            } else {
                myLibrary = [];
            }
        }
        // refreshes cards on page
        addBookToLibrary(myLibrary[i]);
    }
}

// change was read function
function wasRead(e) {
    for (let i=0; i<myLibrary.length; i++) {
        if (e.target.matches(`.box${i}`)) {
            let book = myLibrary[i];
            if (book.wasRead === 'yes') {
                book.wasRead = 'no';
            } else {
                book.wasRead = 'yes';
            }
        }
        // refreshes cards on page
        addBookToLibrary(myLibrary[i]);
    }
}