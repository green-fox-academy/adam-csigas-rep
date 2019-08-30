/* READY STATES

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete

*/

'use strict';

window.onload = function () {

    let http = new XMLHttpRequest(); // allows  us to make http request, and get data back from server

    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            //console.log(JSON.parse(http.response));
        }
    };

    http.open("GET", "data/tweets.json", true);
    http.send();

    //jquery method

    $.get("data/tweets.json", function (data) {
        console.log(data);
    })

    console.log("test")
};