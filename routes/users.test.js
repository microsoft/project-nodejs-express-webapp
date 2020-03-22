const request = require('supertest');
const app = require('../app');

describe('users route', () => {
    it('should respond with a 200 code', done => {
        request(app)
            .get('/users/')
            .expect('Content-Type', /html/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).toBe('hey');
                return done();
            });
    });
});
