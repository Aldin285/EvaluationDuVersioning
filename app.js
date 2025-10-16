function renderBooks() {
  const tbody = document.getElementById('book-list');
  tbody.innerHTML = '';

  books.forEach((book, index) => {
    const tr = document.createElement('tr');

    const titleTd = document.createElement('td');
    titleTd.textContent = book.title;
    tr.appendChild(titleTd);

    const authorTd = document.createElement('td');
    authorTd.textContent = book.author;
    tr.appendChild(authorTd);

    const actionsTd = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = "Modifier les donnéesuu";

    const input = document.createElement('input');
    input.type = 'text';
    input.value = book.title;
    


    editBtn.onclick = () => {
      const newTitle = input.value.trim();
     
      books[index].title = newTitle;
      
      renderBooks();
      
    };

    actionsTd.appendChild(editBtn);
    actionsTd.appendChild(input);

    tr.appendChild(actionsTd);

    tbody.appendChild(tr);
  });
}

renderBooks();
