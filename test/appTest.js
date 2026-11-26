const chai = require('chai');
const request = require('supertest');
const app = require('../app');

describe('App Tests', () => {
    it('should return the updated Version 2.0 homepage', function(done) {
        this.timeout(5000);

        request(app)
            .get('/')
            .expect(200)
            .expect((res) => {
                chai.expect(res.text).to.include('Hello, Kubernetes CI/CD!');
                chai.expect(res.text).to.include('Version 2.0');
                chai.expect(res.text).to.include('Application successfully updated through Jenkins CI/CD pipeline.');
            })
            .end(done);
    });
});
