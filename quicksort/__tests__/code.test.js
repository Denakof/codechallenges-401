'use strict'
const QuickSort = require('../index');
describe('quicksort', () => {
    it('should sort the elements of the array',()=>{
        let array = [8,4,23,42,16,15,55];
        QuickSort(array,0,6)
         expect(array).toEqual([4,8,15,16,23,42,55])
    })
})