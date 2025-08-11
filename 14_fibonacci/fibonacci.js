const fibonacci = function(value) {
  value = Number(value);
  let a = 0;
  let b = 1;

  if (value === 0) return a;
  if (value === 1) return b;
  if (value < 0) return("OOPS");
  for (let i = 2; i <= value; i++) {
  let next = a + b;
  a = b;
  b = next;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
