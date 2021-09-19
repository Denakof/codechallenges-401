'use strict'

const selectionsort=require('../index')
describe('selection sort', () => {
    it('should sort the elements of the array',()=>{
        let array = [8,4,23,42,16,15];
        selectionsort(array)
         expect(array).toEqual([4,8,15,16,23,42])
    })
})
