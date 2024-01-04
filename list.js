class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}


const node1 = new Node(7)
const node2 = new Node(10)
const node3 = new Node(15)

// node1.next = node2

// Easy way to link node3 to node2
// node2.next = node3

// Annoying way -- we want to avoid this. So we build a Linked List class instead
// node1.next.next = node3
// console.log(node1.next)


// console.log(node1)
// console.log(node1.data)
// console.log('-------')


// console.log(node2)
// console.log(node2.data)


class LinkedList {
    constructor(head = null){
        this.head = head
    }

    // insert method
    // Method takes in a node as the parameter
    // Add the node from the param to the end of the list
    insert(node){
        let currentNode = this.head
        // If there is no head, node becomes the head
        if(!currentNode){
            this.head = node
        } else if(currentNode.next){
            // Else if there is a node after the head
                // while there is a next node after currentNode, keep checking if the next node has a next node after that one.
            while(currentNode.next){
                // if there is, then set the currentNode to the next node
                currentNode = currentNode.next
            }
            currentNode.next = node
        } else {
            // Default: if there is no next after the head, assign the next node after the head to be that node from param.
            // The else is taking into consideration that there is a head, (the if statement is false) and there isn’t a 
            // head.next (the else if conditional is false), meaning head.next must be “null”, so we make the head.next value the node we wish to insert 👍🏼
            currentNode.next = node
        }
    }
    size(){
        // Initialize a count as a let and as 0
        let count = 0
        // Initialize a currentNode to hold the node we are looking at, as the head
        let currentNode = this.head
        // While currentNode is truthy, increment count by 1 and reassign currentNode to be the next node
        while(currentNode){
            count++
            currentNode = currentNode.next
        }
        return count
    }

    clear(){
        // empty out our linked list so there are no nodes
        this.head = null
    }

    search(dataProp){
        // Look for a node w data that matches our dataProp
        let currentNode = this.head

        // While currentNode has a node assigned to it, check that node
        while(currentNode){
            // if the data matches, return that node
            if(currentNode.data === dataProp){
                return currentNode
            } else {
                // else go to the next node
                currentNode = currentNode.next
            }
        }
        // if no node w the data is found, return null
        return null
    
    }
}

const list = new LinkedList()

list.insert(node1)
list.insert(node2)
list.insert(node3)
// console.log(list)
// list.clear()
// console.log(list)
// console.log(list.size())

console.log(list.search(11))