'use strict';
const  LinkedList = require("../index");

describe('LinkedList1 ', () => {
    it('Can successfully add a node to the end of the linked list', () => {
        let ll = new LinkedList();
        ll.append('10');
        expect(ll.tostring()).toEqual('{10} ->NULL');
    });

    it('Can successfully add multiple nodes to the end of a linked list', () => {
        let ll = new LinkedList();
        ll.append('1');
        ll.append('2');
        ll.append('3');
        ll.append('4');
        ll.tostring();

        expect(ll.tostring()).toEqual('{1} ->{2} ->{3} ->{4} ->NULL');
    });

    it('Can successfully insert a node before a node located i the middle of a linked list', () => {
        let ll = new LinkedList();
        ll.insert('1');
        ll.insert('2');
        ll.insert('3');
        ll.insert('4');
        ll.insertBefore('3', 'a');
        expect(ll.tostring()).toEqual('{4} ->{a} ->{3} ->{2} ->{1} ->NULL');
    });

    it('Can successfully insert a node before the first node of a linked list', () => {
        let ll = new LinkedList();
        ll.insert('1');
        ll.insert('2');
        ll.insert('3');
        ll.insert('4');
        ll.insertBefore('4', 'a');
        expect(ll.tostring()).toEqual('{a} ->{4} ->{3} ->{2} ->{1} ->NULL');
    });

    it('Can successfully insert after a node in the middle of the linked list', () => {
        let ll = new LinkedList();
        ll.insert('1');
        ll.insert('2');
        ll.insert('3');
        ll.insert('4');
        ll.insertAfter('3', 'a');
        expect(ll.tostring()).toEqual('{4} ->{3} ->{a} ->{2} ->{1} ->NULL');
    });

    it('Can successfully insert a node after the last node of the linked list', () => {
        let ll = new LinkedList();
        ll.insert('1');
        ll.insert('2');
        ll.insert('3');
        ll.insert('4');
        ll.insertAfter('1', 'a');
        expect(ll.tostring()).toEqual('{4} ->{3} ->{2} ->{1} ->{a} ->NULL');
    });
});  