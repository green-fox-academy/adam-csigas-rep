function render(data) {
  data.forEach(e => {
    //where
    let tableBody = document.querySelector('tbody');
    let tableRow = document.createElement('tr');
    let infosOfBook = [e.book_name, e.aut_name, e.cate_descrip, e.pub_name,e.book_price];

    for (let i = 0; i < infosOfBook.length; i++) {
      let tableData = document.createElement('td');
      tableData.textContent = infosOfBook[i];
      tableRow.appendChild(tableData);
    }
    tableBody.appendChild(tableRow);
  });
}
const URL = 'http://localhost:3000';
fetch(URL + '/books')
  .then(response => response.json())
  .then(render)



