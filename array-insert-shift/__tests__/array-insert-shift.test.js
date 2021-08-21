'use strict'
const insertShiftArray =require('../index')
describe('insertShiftArray', () => {



    it('should check the function it works successfully (even)',  () => {
        expect(insertShiftArray([1,2,3,4],5)).toEqual([1,2,5,3,4]);
    });
    
    it('should check the function it works successfully(odd)',  () => {
        expect(insertShiftArray([1,2,3],5)).toEqual([1,2,5,3]);
    });
})