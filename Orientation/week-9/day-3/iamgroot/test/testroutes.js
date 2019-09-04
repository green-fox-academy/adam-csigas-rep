
'use strict';

const test = require('tape');
const request = require('supertest');

const app = require('../routes');

test('groot endpoint', (t) => {
    request(app)
        .get('/groot?somemessage=somebodytolove')
        .set('accept', 'application/json')
        .send({
            "received": "somebodytolove",
            "translated": "I am Groot!"
        })
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

test('groot endpoint', (t) => {
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