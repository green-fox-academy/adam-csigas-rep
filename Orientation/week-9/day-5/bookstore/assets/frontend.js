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
  
const selectbtn = document.getElementById('catFilter');

selectbtn.addEventListener('change',function(){
  //remove previous tablerows and data except first line
  let nodeList = document.querySelectorAll('tr');
  nodeList.forEach((e,i)=>{
    if(i > 0){
      e.remove();
    }
  })
  //fetch the stuff you need
  fetch(URL + `/books?category=${this.value}`)
    .then(response =>response.json())
    .then(render)
})

