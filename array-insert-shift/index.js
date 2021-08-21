'use strict'

function insertShiftArray(arr,value){
    let arrlen = arr.length;
    let middle = Math.ceil(arrlen/2);
    let newArr=[]
    for (let index = 0; index < arrlen; index++) {
        if (index == middle){
            newArr.push(value)
        }
        newArr.push(arr[index])
    }

    return newArr;
}

console.log(insertShiftArray([1,2,3], 5));
module.exports= insertShiftArray



