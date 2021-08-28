'use strict'

let arr=[ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]	
function addUp(x){
    let newArr=[];
    for (let i = 0; i < x.length; i++) {
        newArr.push(0)
        for (let j = 0; j < x[i].length; j++) {
newArr[i]+= x[i][j]
            
        }
        
        
    }
    return newArr
}
console.log(addUp(arr))
module.exports=addUp