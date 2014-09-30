'use strict';

var BookShelf = {

    books: [
        'Alphabet Soup',
        'Infinite Jest',
        'Wisdom of the Enneagram'
    ],

    addBook: function(b) {
        this.books.push(b);
        this.books.sort();
    }
};



