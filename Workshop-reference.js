const app = require('../app');
const supertest = require('supertest');
const { expect } = require('chai');
describe('App component', () => {
  it('GET / should return 200 and "Hello world"', () => {
    return supertest(app)
      .get('/')
      .expect(200, { message: 'Hello world' });
  });
  describe('GET /books', () => {
    it('should return 200 and array of books', () => {
      return supertest(app)
        .get('/books')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.be.an('array');
          Array.isArray(res.body) === true;
          expect({o: 1}).to.eql({o: 1});
          expect(res.body[0]).to.be.an('object');
          expect(res.body[0]).to.include.all.keys(
            'title', 'author', 'published_date'
          );
        });
    });
    it(`should return 400 with 'Sort must be one of "title" or "rank"`, () => {
      return supertest(app)
        .get('/books')
        .query({ sort: 'invalid' })
        .expect(400, 'Sort must be one of title or rank');
    });
    const validSorts = ['title', 'rank'];
    validSorts.forEach(validSort => {
      it(`should return ${validSort}-sorted data when sort param is "${validSort}"`, () => {
        return supertest(app)
          .get('/books')
          .query({ sort: validSort })
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('array');
            let i = 0, sorted = true;
            while (sorted && i < res.body.length - 1) {
              sorted = res.body[i][validSort] < res.body[i + 1][validSort];
              i++;
            }
            expect(sorted).to.be.true;
          });
      });
    });
  });
});