'use strict'
const reverseArray =require('../index')
describe('array reverse', () => {



    it('should check the function it works successfully',  () => {
        expect(reverseArray([1,2,3,4,5,6,7])).toEqual([7,6,5,4,3,2,1]);
    });
})