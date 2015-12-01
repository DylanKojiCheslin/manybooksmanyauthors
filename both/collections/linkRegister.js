
Author.registerLinkableType(Book, "book");
configureLinkableType(Author, Book, "book");

Book.registerLinkableType(Author, "author");
configureLinkableType(Book, Author, "author");
