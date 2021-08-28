  
'use strict'
const addUp =require('../index')
describe('q1', () => {



    it('should check the function it works successfully',  () => {
        expect(addUp([[1,2,3,4,5,6,7]])).toEqual([28]);
    });

    it('should check the function it works successfully',  () => {
        expect(addUp([ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ])).toEqual([6, 5, 20]);
    });

})