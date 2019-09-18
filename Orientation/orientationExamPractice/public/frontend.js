'use strict';

//items
const loadData = () => {
  fetch('/api/items')
    .then(response => response.json())
    .then(response2 => {
      const myJson = response2.items;
      for (let i = 0; i < myJson.length; i++) {
        const option = document.createElement('option');
        option.text = `${myJson[i].title}`;
        option.value = `${myJson[i].id}`;
        const select = document.querySelector('select');
        select.appendChild(option);
      }
      return response2;
    })
    .then(response3 => {
      const itemsToList = response3.items;
      itemsToList.forEach(e => {
        const ul = document.querySelector('ul');
        let li = document.createElement('li');
        li.textContent = `${e.title} (highest bid: ${e.highestBid} , ${e.highestBidderName})`;
        ul.appendChild(li);
      });
    })
}
window.onload = loadData;
