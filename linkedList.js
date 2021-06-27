/*
A linked list is a collection of objects called nodes.
Each node is linked to a successor
node in the list using an object reference. The reference to another node is called a link.
Moving through a
linked list involves following the links of the list from the beginning node to the end
node (not including the header node, which is sometimes used as a hook for entry into
a linked list). 

 we mark the end of a linked
list by pointing to a null node.
*/

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = new Node("head");
    }

    find(item) {
        //start at the head
        let currNode = this.head;
        //loop through and check on every iteration if the element of the node is the type we are looking for
        //if it is return that node
        //else go on to the next node
        while (currNode.element !== item) {
            currNode = currNode.next
        }
        return currNode
    }

    insert(newElement, item){
        const newNode = new Node(newElement);
        let current =   this.find(item)
        newNode.next =  current.next;
        current.next = newNode;
    }

    remove(){

    }

    display(){
        let currNode = this.head;
        while (!(currNode.next === null)) {
            console.log(currNode.next.element);
            currNode = currNode.next
        }
    }
}

const cities = new LinkedList();

cities.insert('lagos', 'head')
cities.insert('abuja', 'lagos')
cities.insert('kano', 'abuja')
cities.display()