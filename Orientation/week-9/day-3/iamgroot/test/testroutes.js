
'use strict';

const test = require('tape');
const request = require('supertest');

const app = require('../routes');

test('groot endpoint1', (t) => {
    request(app)
        .get('/groot?somemessage=somebodytolove')
        .set('accept', 'application/json')
        .end((err, resp) => {
            if (err) throw err;
            t.equal(resp.status, 200);
            t.same(resp.body, {
                "received": "somebodytolove",
                "translated": "I am Groot!"
            });
            t.end();
        });
});

test('groot endpoint2', (t) => {
    request(app)
        .get('/groot')
        .set('accept', 'application/json')
        .end((err, resp) => {
            if (err) throw err;
            t.equal(resp.status, 400);
            t.same(resp.body, {
                "error": "I am Groot!"
            });
            t.end();
        });
});
// ------------------ yondu task tests start here

test('yondu endpoint1 - when only root accessed', (t) => {
    request(app)
        .get('/yondu')
        .set('accept', 'application/json')
        .end((err, resp) => {
            if (err) throw err;
            t.equal(resp.status, 400);
            t.same(resp.body, {
                "error": "Either given number is not correct or the given value is not a number."
            });
            t.end();
        });
});

test('yondu endpoint2 - when everything is ok', (t) => {
    request(app)
        .get('/yondu?distance=100&&time=2')
        .set('accept', 'application/json')
        .end((err, resp) => {
            if (err) throw err;
            t.equal(resp.status, 200);
            t.same(resp.body, {
                "distance": "100",
                "time": "2",
                "speed": 50
            });
            t.end();
        });
});

test('yondu endpoint3 if distance and time not given', (t) => {
    request(app)
        .get('/yondu?distance=&&time=')
        .set('accept', 'application/json')
        .end((err, resp) => {
            if (err) throw err;
            t.equal(resp.status, 400);
            t.same(resp.body, {
                "error": "Either given number is not correct or the given value is not a number."
            });
            t.end();
        });
});

//--------------------------
test('cargo pre-test', (t) => {
    request(app)
        .get('/rocket')
        .set('accept', 'application/json')
        .end((err, resp) => {
            if (err) throw err;
            t.equal(resp.status, 200);
            t.same(resp.body, {
                "received": "somebodytolove",
                "translated": "I am Groot!"
            });
            t.end();
        });
});