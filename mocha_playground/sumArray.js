// function sum(arr) {
//   return new Promise((resolve, reject) => {
//     const ans = arr.reduce((acc, curr) => {
//       return acc + curr;
//     }, 0);
//     resolve(ans);
//   });
// }
  
module.exports = sum;

function sum(arr) {
  return new Promise((resolve, reject) => {
    const ans = arr.reduce((acc, curr) => {
      const num = parseFloat(curr);
      return acc + (isNaN(num) ? 0 : num);
    }, 0);
    resolve(ans);
  });
}