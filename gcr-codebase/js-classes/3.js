"use strict";

// Create Book class
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`${this.title} is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`${this.title} has been issued.`);
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(`${this.title} has been returned.`);
    }
}

// Create book objects
const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Guide", "Alex", "102"),
    new Book("Web Development", "Sam", "103", true)
];

// Display available books
console.log("Available Books:");
books.filter(book => !book.isIssued).forEach(book => {
    console.log(`${book.title} - ${book.author} - ${book.isbn}`);
});

// Search and issue book by ISBN
const searchISBN = "101";
const selectedBook = books.find(book => book.isbn === searchISBN);

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found.");
}
