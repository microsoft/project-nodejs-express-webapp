const request = require('supertest');
const usersRoute = require('./users');

describe('index route', () => {
    it('should respond with a 200 code', () => {
        request(usersRoute).expect(200);
    });
});
