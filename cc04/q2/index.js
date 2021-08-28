"use strict";

function fab(n) {
  let n1 = 0,
    n2 = 1;
  let nextTerm = n1 + n2;

  while (nextTerm <= n) {
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }
  return n2;
}
console.log(fab(5));

module.exports = fab;
