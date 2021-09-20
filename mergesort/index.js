function Mergesort(arr) {
    let n = arr.length;
  
    if (n > 1) {
      let mid = Math.floor(n / 2);
      let left = [];
      let right = [];
  
      for (let i = 0; i < arr.length; i++) {
        if (i < mid) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
    //   console.log(`left:${left}, right:${right},arr:${arr}`);
    console.log(left,right,arr);

      // sort the left side
      Mergesort(left);
      // sort the right side
      Mergesort(right);
      // merge the sorted left and right sides together
      Merge(left, right, arr);
    }
  }
  function Merge(left, right, arr) {
    console.log(left,right,arr);

    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i = i + 1;
      } else {
        arr[k] = right[j];
        j = j + 1;
      }
      k = k + 1;
    }
    if (i < left.length) {
      while (i < left.length) {
        arr[k] = left[i];
        i = i + 1;
        k = k + 1;
      }
    } else {
      while (j < right.length) {
        arr[k] = right[j];
        j = j + 1;
        k = k + 1;
      }
    }
  }
  let array1 = [0, 6, 3, 7, 13, 11,21,18,29];

  Mergesort(array1);
//   console.log(array1);
  module.exports = Mergesort;