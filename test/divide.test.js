// const divide = require('../index');
// // const chai = require('chai');
// // const expect = chai.expect;
// const expect = require('chai').expect;


// describe('Divide function', () => {
//   it('should divide positive integers correctly', () => {
//     // define inputs
//     const a = 8;
//     const b = 4;
//     const expectedAnswer = 2;
      
//     // invoke the function
//     const actualAnswer = divide(a, b);
      
//     // assert that expected === actual
//     expect(actualAnswer).to.equal(expectedAnswer);
//   });

//   it('should throw an error when divide by zero', () => {
//     // define inputs
//     const a = 8, b = 0;
  
//     // set up the function call
//     // const fn = () => {
//     //   divide(a, b)
//     // };
//     const fn = () => { divide(a, b) };
  
//     // assert that exception is thrown
//     expect(fn).to.throw();
//   });

// });

const expect = require('chai').expect;
const divide = require('../index');
const sort = require('../index');

describe('Divide function', () => {
  it('should divide positive integers correctly', () => {
    expect(divide(8, 4)).to.equal(2);
  });

  it('should throw an error when divide by zero', () => {
    expect(() => { divide(8, 0) }).to.throw();
  });

});

// describe('Sort function', () => {
//   it('should sort an array of numbers correctly', () => {
//     const arr1 = [2,3,1];
//     const arr2 = [1,2,3];
//     // return sort(arr1)
//     // expect(sort(arr1, 4)).to.equal(2);
//     expect( sort(arr1) ).to.deep.equal(arr2);
//   });
    
// });

// describe('Chai Examples function', () => {
//   it('chaie test 1', () => {
//     expect(2).to.equal(2, '2 === 2'); // pass
//   });
  
//   it('chai test 2', () => {
//     expect(2).to.equal("2", '2 === "2"'); // fail, wrong types
//   });

//   it('chai test 3', () => {
//     expect(2).to.equal(3, '2 === 3'); // fail, wrong values
//   });

//   it('chai test 4', () => {
//     expect('hen').to.equal('Hen', "'hen' === 'Hen'"); 
//   });

//   it('chai test 5', () => {
//     const a = { x: 5 };
//     const b = { x: 5 };
//     expect(a).to.deep.equal(b);
//   });
  
// });




