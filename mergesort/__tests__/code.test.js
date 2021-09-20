'use strict'
const  Mergesort= require('../index')
describe('Mergesort', () => {
    it('should sort the elements of the array',()=>{
        let array = [8,4,23,42,16,15];
        Mergesort(array)
         expect(array).toEqual([4,8,15,16,23,42])
    })
})