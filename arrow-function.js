/* This is a normal function 
function add(a, b = 3) {
  const total = a + b;
  return total;
}
*/

/*This is an arrow function */
const add = (a, b = 3) => a + b;

console.log(add(5));
