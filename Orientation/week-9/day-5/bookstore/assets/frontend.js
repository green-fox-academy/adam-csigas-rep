function render(data) {
  data.forEach(e => {
    //where
    let tableBody = document.querySelector('tbody');
    let tableRow = document.createElement('tr');
    let infosOfBook = [e.book_name, e.aut_name, e.cate_descrip, e.pub_name, e.book_price];

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
  


/* 
event listener selectre --> change? onchange vmi
fetch erre req.query. === science

*/

const selectbtn = document.getElementById('catFilter');

selectbtn.addEventListener('change',function(){
  console.log(this.value)
  if(!document.getElementById('mainrow')){
    
  }
  fetch(URL + `/books?category=${this.value}`)
    .then(response =>response.json())
    .then(render)
})

