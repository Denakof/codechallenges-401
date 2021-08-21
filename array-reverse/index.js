'use strict'
function reverseArray(arr){
    let arrlen = arr.length-1
    let results = [];
    for (let i = 0; i<= arrlen; i++){
        results.push(arr.pop());
    }

    return results;
}

console.log(reverseArray([1,2,3,4,5,6,7]));

module.exports= reverseArray;
