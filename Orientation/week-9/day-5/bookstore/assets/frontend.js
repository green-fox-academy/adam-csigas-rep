function render(data){
    data.forEach(e => {
        let paragraph = document.createElement('p');
        let bookname = e.book_name;
        paragraph.textContent= bookname;
        document.body.appendChild(paragraph);
    });
} 
const URL = 'http://localhost:3000';
fetch(URL +'/books')
    .then(response => response.json())
    .then(render)



