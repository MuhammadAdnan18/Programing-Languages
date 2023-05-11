from computer import *  
class Book:
    def __init__(self):
        title = str(input("Enter title of the book: "))
        author = str(input("Enter the name of author: "))
        isbn = str(input("Enter the isb number: "))
        price = float(input("Enter the price of book: "))
        publisher = str(input("Enter the name of publisher: "))
        pages = int(input("Enter total pages: "))
        if not isinstance(title, str):
            raise ValueError("Title must be a string")
        if not isinstance(author, str):
            raise ValueError("Author must be a string")
        if not isinstance(isbn, str):
            raise ValueError("ISBN must be a string")
        if not isinstance(publisher, str):
            raise ValueError("Publisher must be a string")
        if not isinstance(price, float) or price < 0:
            raise ValueError("Price must be a positive float")
        if not isinstance(pages, int) or pages <= 0:
            raise ValueError("Pages must be a positive integer")
        self.title = title
        self.author = author
        self.isbn = isbn
        self.price = price
        self.publisher = publisher
        self.pages = pages

    def get_book_info(self):
        print(f'Title: {self.title}, Author: {self.author}, ISBN: {self.isbn}, Price: {self.price}, Publisher: {self.publisher}, Pages: {self.pages}')

b=Book()

b.get_book_info()
c=Computer()
c.get_computer_info()