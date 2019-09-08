function render(data){
    data.forEach(e => {
        let tablebody = document.querySelector('tbody');
        let tableRow = document.createElement('tr');
        let bookname = e.book_name;
        tableRow.textContent= bookname;
        tablebody.appendChild(tableRow);
    });
} 
const URL = 'http://localhost:3000';
fetch(URL +'/books')
    .then(response => response.json())
    .then(render)



