const request = require('supertest');
const app = require('../app');

describe('index route', () => {
    it('should respond with a 200 code', done => {
        request(app)
            .get('/')
            .expect(200)
            .end(done);
    });
});
