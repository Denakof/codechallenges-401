'use strict'
function SelectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
        console.log(`array:${arr}, j:${j}, min:${min}`);
        if (arr[j] < arr[min]) {
        min = j;
      }
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
}

let array = [8,4,23,42,16,15];
// console.log(array);
SelectionSort(array);
// console.log(array);

module.exports=SelectionSort