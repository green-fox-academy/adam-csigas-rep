'use strict';

let bookTit = function (){
    return `SELECT book_name,aut_name,cate_descrip,pub_name,book_price FROM book_mast 
            JOIN author ON book_mast.aut_id = author.aut_id 
            JOIN category ON book_mast.cate_id = category.cate_id 
            JOIN newpublisher ON book_mast.pub_id = newpublisher.pub_id`;
}

/* let catquery = function(){
    return `${bookTit()} 
            WHERE cate_descrip = ?;`
} */
module.exports = bookTit;


