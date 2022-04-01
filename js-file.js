let myLibrary = [];
const bookCards = document.querySelector('#book-cards');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const grid = document.querySelector('.grid');
// const wasRead = document.querySelector('input[name="wasRead"]:checked');

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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'yes');
const Hobbit = new Book('Hobbit', 'J.R.R. Tolkien', 295, 'no');
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

// Close modal when you click outside of modal **need to make it work
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
    if (title.value!=='' && author.value!=='' && pages.value!=='') {
        const newBook = new Book(title.value, author.value, pages.value, wasRead);
        addBookToLibrary(newBook);
        closeModal();
    } else return;
})

// Change was read status
let elements = document.querySelectorAll('.checkbox');
console.log(elements);
for (let i=0; i<myLibrary.length; i++) {
    elements[i].addEventListener('click', function(e) {
        let parent = e.target.parentNode.parentNode;
        console.log(parent)
    })
};

// delete card
let cardxbutton = document.querySelectorAll('.delete-entry');
console.log(cardxbutton);
for (let i=0; i<myLibrary.length; i++) {
    cardxbutton[i].addEventListener('click', function(e) {
        let parent = e.target.parentNode;
        console.log(parent);
        bookCards.removeChild(parent);
        myLibrary.splice(i,1);
    })
};


// show modal function
function showModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add("modal-open");
    const grid = document.querySelector(".grid");
    grid.classList.add("modal-open");
    document.querySelector('.grid-button').disabled = true;
    document.querySelector('#wasRead').disabled = true;
}


// close Modal function
function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove("modal-open");
    const grid = document.querySelector(".grid");
    grid.classList.remove("modal-open");
    // buttons
    document.querySelector('.grid-button').disabled = false;
    // checkbox
    document.querySelector('#wasRead').disabled = false;
    clear();
}


// store new book objects into myLibrary array and add card
function addBookToLibrary(book) {
    bookCards.innerHTML = '';
    myLibrary.push(book);
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const card = document.createElement('div');
        let wasRead;
        if (book.wasRead === 'yes') {
            wasRead = 'checked';
        } else wasRead = '';
        card.classList.add('card');
        card.classList.add(`c${i}`);
        card.innerHTML = `
            <button class="delete-entry grid-button">x</button>
            <div class="title">${book.title}</div>
            <div class="author">${book.author}</div>
            <div class="pages">${book.pages}</div>
            <div class="wasRead"><label for="wasRead">Mark as Read</label>
            <input class="checkbox" id="wasRead" type="checkbox" ${wasRead}></div>
            `;
        bookCards.appendChild(card);        
    }
}

// clear form function
function clear() {
    title.value = '';
    author.value = '';
    pages.value = '';
    document.getElementById('yes').checked = false;
    document.getElementById('no').checked = true;
}


// delete card
function deleteEntry(e) {
    
}