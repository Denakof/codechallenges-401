   
const {repeatedWord} =require('../index');

describe('first repeated word ',()=>{
    it('return first repeated word',()=>{
        expect(repeatedWord("a b c a")).toEqual("a");
    })
    it('return first repeated word regardless uppercase/lowercase)',()=>{
        expect(repeatedWord("a b c A")).toEqual("a");
    })
    it('return null if there not repeated word ',()=>{
        expect(repeatedWord("a b c ")).toBeNull();
    })
})