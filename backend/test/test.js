var request = require('supertest');
var app = require('../src/server');

describe('GET /', function() {
 it('respond with Welcome to Board Geek API', function(done) { //navigate to root and check the the response is "Welcome to Board Geek API"
 request(app).get('/').expect('Welcome to Board Geek API', done);
 });
});