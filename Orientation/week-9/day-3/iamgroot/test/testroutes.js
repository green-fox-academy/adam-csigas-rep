
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