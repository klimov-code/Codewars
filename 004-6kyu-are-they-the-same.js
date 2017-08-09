/*
Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays
have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in
a squared, regardless of the order.
*/

function comp(array1, array2){
  return (!array1 || !array2) ?
    false :
    array1.map(v => v * v).sort().toString() == array2.sort().toString();
}
