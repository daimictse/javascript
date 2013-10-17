var BookList = function() {
    booksRead = 0;
    booksNotRead = 0;
    bookShelf = [];
    currentBook;
    lastBook;
    nextBook;

    this.setNextBook = function(){
        for (var i=0; i<bookShelf.length; i++) {
            if (bookShelf[i].read == false) {
                nextBook = bookShelf[i];
                return nextBook;
            }
        }
    }
    this.setCurrentBook = function(Book){
        currentBook = Book;

        for (var i=0; i<bookShelf.length; i++) {
            if (bookShelf[i] != Book && bookShelf[i].read == false) {
                nextBook = bookShelf[i];
            }
        }
        return currentBook;
    }
/*    this.currentBook = function() {
        return this.bookShelf[booksRead];
    }
    this.lastBookRead = function() {
        if (booksRead == 0) {
            return null;
        } else {
            return this.bookShelf[booksRead-1];
        }
    }*/
    this.add = function(Book) {
        this.bookShelf.push(Book);
        this.booksNotRead++;
    }
    this.finishCurrentBook = function() {
        this.currentBook().read = true;
        this.currentBook().readDate = new Date(Date.now());
        this.booksRead++;
        this.booksNotRead--; 
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.nextBook = this.setNextBook();
    }
}

var Book = function(Title, Genre, Author) {
    this.Title = Title;
    this.Genre = Genre;
    this.Author = Author;
    read = false;
    readDate;
}

bookList = new BookList();
book1 = new Book("Harry Potter", "Fantasy", "J.K. Rowling");
book2 = new Book("Lord of the Rings", "Fantasy", "J.R.R. Tolkien");
book3 = new Book("Romeo and Juliet", "Love Story", "Shakespeare");
bookList.add(book1);
bookList.add(book2);
bookList.add(book3);
bookList.setCurrentBook(book1);
bookList.finishCurrentBook(book1);

