import Book from './book.js';

export default class BookManager {
    static createBookElement = (book) => `
        <tr id="${book.id}">
          <td class="book-info"> "${book.title}" by ${book.author}</td>
          <td class="remove-button">
            <button type="button" onclick="removeBookWrapper('${book.id}')">Remove</button>
          </td>
        </tr>`;

    loadData = () => {
      const tbody = document.querySelector('tbody');
      const books = JSON.parse(localStorage.getItem('books')) || [];
      books.forEach((bookData) => {
        const book = new Book(bookData.title, bookData.author, bookData.id);
        tbody.innerHTML += BookManager.createBookElement(book);
      });
    };

    addBook = () => {
      this.title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const id = new Date().getTime().toString();
      const book = new Book(this.title, author, id);
      const tbody = document.querySelector('tbody');
      tbody.innerHTML += BookManager.createBookElement(book);
      const books = JSON.parse(localStorage.getItem('books')) || [];
      books.push({ title: book.title, author: book.author, id: book.id });
      localStorage.setItem('books', JSON.stringify(books));
      alert('Data inserted successfully');
    };

    removeBook = (id) => {
      const tbody = document.querySelector('tbody');
      const book = document.getElementById(id);
      tbody.removeChild(book);

      const books = JSON.parse(localStorage.getItem('books')) || [];
      const updatedBooks = books.filter((bookData) => bookData.id !== id);
      localStorage.setItem('books', JSON.stringify(updatedBooks));
    };

    list1 = () => {
      this.title = document.getElementById('title').value;
      document.getElementById('bookListId').classList.add('bookList');
      document.getElementById('bookListId').classList.remove('nobookList');
      document.getElementById('wrapId').classList.add('nowrap');
      document.getElementById('wrapId').classList.remove('wrap');
      document.getElementById('addNewID').classList.remove('lstClass');
      document.getElementById('addNewID').classList.add('noLstClass');
    };

    cnt = () => {
      this.title = document.getElementById('title').value;
      document.getElementById('wrapId').classList.remove('wrap');
      document.getElementById('wrapId').classList.add('nowrap');
      document.getElementById('addNewID').classList.add('lstClass');
      document.getElementById('addNewID').classList.remove('noLstClass');
      document.getElementById('bookListId').classList.remove('bookList');
      document.getElementById('bookListId').classList.add('nobookList');
    };

    addBook1 = () => {
      this.title = document.getElementById('title').value;
      document.getElementById('wrapId').classList.remove('nowrap');
      document.getElementById('wrapId').classList.add('wrap');
      document.getElementById('addNewID').classList.remove('lstClass');
      document.getElementById('addNewID').classList.add('noLstClass');
      document.getElementById('bookListId').classList.remove('bookList');
      document.getElementById('bookListId').classList.add('nobookList');
    };
}
