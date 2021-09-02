'use strict'
const LinkedList =require('../index')
let newLen = new LinkedList();


let value = 1;
let value2 = 2;
let value3 = 3;
let value4 = 4;
let value5 = 5;
let value6 = 6;

describe('linked-list tests- Challange 07 Testing kthFromEnd(k)', () => {
    it('k is greater than the length of the linked list', () => {
        newLen.append(value);
        newLen.append(value2);
        newLen.append(value3);
        newLen.append(value4);
        newLen.append(value5);
        newLen.append(value6);
        expect(newLen.kthFromEnd(7)).toEqual('Exception');
    });

    it('k and the length of the list are the same', () => {
        expect(newLen.kthFromEnd(6)).toEqual('Exception');
    });
    it('k is not a positive integer', () => {
        expect(newLen.kthFromEnd(-2)).toEqual('K Not Positive');
    });
    it('linked list is of a size 1', () => {
        let newLl2 = new LinkedList();
        newLl2.append(8);
        expect(newLl2.kthFromEnd(2)).toEqual('Exception');
        expect(newLl2.kthFromEnd(1)).toEqual('Exception');
        expect(newLl2.kthFromEnd(0)).toEqual(8);
    });

    it('Happy Path', () => {
        let newLen = new LinkedList();

        newLen.append(value);
        newLen.append(value2);
        newLen.append(value3);
        newLen.append(value4);
        newLen.append(value5);
        newLen.append(value6);
        let value7 = 7;
        newLen.append(value7);
        expect(newLen.kthFromEnd(3)).toEqual('Happy Path');
    });

});