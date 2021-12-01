function outer() {
  const outerVar = "I am an outer var";
  function inner() {
    const innerVar = "I am an inner var";
    console.log(innerVar);
    console.log(outerVar);
  }
  return inner;
}

const innerFn = outer();
innerFn();
