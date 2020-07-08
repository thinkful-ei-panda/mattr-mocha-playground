const { expect } = require('chai');
const supertest = require('supertest');
// const app = require('../app');
const app = require('../express_testing/app');

describe('GET /generate endpoint', () => {
  it('should generate an array of 5', () => {
    return supertest(app)
      .get('/generate') // invoke the endpoint
      .query({ n: 5 }) // send the query string ?n=5
      .expect(200)  // assert that you get a 200  OK status
      .expect('Content-Type', /json/)
      .then(res => {
        // make sure you get an array
        expect(res.body).to.be.an('array');
        // array must not be empty
        expect(res.body).to.have.lengthOf.at.least(1);
        // this assertion fails
        // expect(res.body).to.eql([1,2,3,4,5]);
        //these two assertions below work
        // expect(res.body).to.include(5);
        // expect(res.body).to.include.members([1,2,3,4,5])
        //more strict assertion
        // expect(res.body).to.have.members([1,2,3,4,5]);
        //an checks for type
        expect(res.body).to.be.an('array').that.have.members([1,2,3,4,5]);
      });
  })
});