function fetchBooks() {
  // Don't forget to return fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderBooks(data); // <-- Call renderBooks here
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(function (book) {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
