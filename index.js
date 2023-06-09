import { DateTime } from './node_modules/luxon/src/luxon.js';
import BookManager from './modules/bookManager.js';
import removeBookWrapper from './modules/eventHandlers.js';

const bookManager = new BookManager();

const loadData = () => {
  bookManager.loadData();
};

const lst = document.getElementById('lst');
const cont = document.getElementById('cont');
const addBo = document.getElementById('addNew');

const displayDate = () => {
  const now = DateTime.local();
  const mexicoDate = DateTime.fromObject(
    {
      year: now.year,
      month: now.month,
      day: now.day,
      hour: now.hour,
      minute: now.minute,
    },
    { zone: 'America/Mexico_City' },
  );
  document.getElementById('currentDate').textContent = mexicoDate.toLocaleString(DateTime.DATETIME_FULL);
};

setInterval(displayDate, 1000);

displayDate();

lst.addEventListener('click', () => {
  bookManager.list1();
});

cont.addEventListener('click', () => {
  bookManager.cnt();
});

addBo.addEventListener('click', () => {
  bookManager.addBook1();
});

window.removeBookWrapper = (id) => removeBookWrapper(bookManager, id);

const addBookButton = document.getElementById('addBookButton');
addBookButton.addEventListener('click', () => {
  bookManager.addBook();
});

document.addEventListener('DOMContentLoaded', () => {
  loadData();
});
