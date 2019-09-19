'use strict';
const ul = document.querySelector('ul');
//items
function dropDownBidItems(data) {
  const myJson = data.items;
  for (let i = 0; i < myJson.length; i++) {
    const option = document.createElement('option');
    const select = document.querySelector('select');
    option.text = `${myJson[i].title}`;
    option.value = `${myJson[i].id}`;
    select.appendChild(option);
  }
}
//listMaker
function listmaker(data){
    const itemsToList = data.items;
    itemsToList.forEach(e => {
      let li = document.createElement('li');
      li.textContent = `${e.title} (highest bid: ${e.highestBid} , ${e.highestBidderName})`;
      ul.appendChild(li);
    });
}

const loadData = () => {
  fetch('/api/items')
    .then(response => response.json())
    .then(response => {dropDownBidItems(response)
      return response;
    })
    .then(response => listmaker(response))
}
window.onload = loadData;

//sending bid
const bidBtn = document.getElementById('bid');
let biditem = document.getElementById('biditem');
let name = document.getElementById('name');
let amount = document.getElementById('amount');
let p = document.querySelector('p');

bidBtn.addEventListener('click', e => {
  if (biditem.value == '') {
    return;
  }
  fetch(`/api/items/${biditem.value}/bids`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: biditem.value,
      name: name.value,
      amount: amount.value
    })
  })
    .then(response => response.json())
    .then(response => {
      p.textContent = response.message;
      if (response.message === 'Your bid was successful!') {
        document.querySelector('form').reset();
        ul.innerHTML = '';
        loadData();
      }
      return;
    })
});

function myFunction() {
  let checkbox = document.getElementById('agecheck');
  if(checkbox.checked){
    console.log('it works');
  }else{
    console.log('noes');
  }
}