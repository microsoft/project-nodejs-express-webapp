const request = require('supertest');
const indexRoute = require('./index');

describe('index route', () => {
    it('should respond with a 200 code', () => {
        request(indexRoute).get('/').expect(200);
    });
});
