import bookListings from "./booklistings.mjs";

function filterBookbyTitle(bookListings, title) {
    let result = [];
    for (let book of bookListings) {
        if (book.title.startsWith(title)) {
            result.push(book);
        }
    }
    return result;
}

function filterBookbyAuthorName(bookListings, author) {
    let result = [];
    for (let book of bookListings) {
        if (book.author.includes(author)) {
            result.push(book);
        }
    }
    return result;
}

function filterBookBeforeYear(bookListings, publication_year) {
    let result = [];
    for (let book of bookListings) {
        if (book.publication_year < (publication_year)) {
            result.push(book);
        }
    }
    return result;
}

function filterBookAfterYear(bookListings, publication_year) {
    let result = [];
    for (let book of bookListings) {
        if (book.publication_year > (publication_year)) {
            result.push(book);
        }
    }
    return result;
}

function filterBookByIsbn(bookListings, author) {
    let result = [];
    for (let book of bookListings) {
        if (book.author.includes(author)) {
            result.push(book.isbn);
        }
    }
    return result;
}

function listBooksAplhabetically(bookListings, author) {
    let result = [];
    for (let book of bookListings) {
        if (book.author.includes(author)) {
            result.push(book.isbn);
        }
    }
    return result;
}

//console.log("Books starting with 'The': ", filterBookbyTitle(bookListings, "The"));
//console.log("Author's name includes 't' : ", filterBookbyAuthorName(bookListings, "t"));
//console.log("Books published after 1992: ", filterBookAfterYear(bookListings, "1992"));
//console.log("Books published before 2004: ", filterBookBeforeYear(bookListings, "2004"));
//console.log("Book ISBN by author: ", filterBookByIsbn(bookListings, "Marcus"));