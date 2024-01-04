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
        // Returns the number of nodes in the list
        return count
    }
    clear(){
        // empty out our linked list so there are no nodes
        this.head = null
    }
    search(dataProp){
        // Look for a node w data that matches our dataProp and return it
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
    getFirst(){
        // if we have a head, return the head, else return null
        return this.head
    }
    getLast(){
        // initialize a currentNode var to be this.head
        let currentNode = this.head
        // while currentNode.next is a node, reassign currentNode to currentNode.next
        // Side note: "?" is for optional chaining: meaning if the object that we put the question on exists, then we can continue dotting into that object
        while(currentNode.next){
            currentNode = currentNode.next
        }
        // when we break the while loop, currentNode is the last node
        // return currentNode
        return currentNode
    
    }
    isEmpty(){
        // if list is empty return true, otherwise return false
        // we just have to check if the head is a node
        // return this.head === null

        // If this.head is null, then it is a falsy value, 
        // If this.head is a node, then it is a truthy value
        // We can put the bang operator in front of it, to turn it to a boolean
        return !this.head
    }
    getKth(k){
        // if k > this.size return null
        // References itself to call the size() method, so we use the "this" keyword
        if(k > this.size()) return null
        // Initialize a counter to be 1
        let counter = 1
        // Initialize currentNode to be this.head
        let currentNode = this.head
        // While loop to iterate, condition is:
        while(k !== counter){
        // while k !== counter
            // add one to counter
            counter++
            // reassign currentNode to be the next node
            currentNode = currentNode.next
        }
        // Return currentNode
        return currentNode
    }
    delete(dataProp){
        // Delete a node whose data is equal to the dataProp param
        // search() method? Finds the node we want to delete but it doesn't reattach the previous node to the next node => problem

        // Each node knows it's own data value and the node that comes after it.
        // Meaning each node can see the data of the node that comes after it, as well as the next node that comes after that node.
        // If the currentNode's next node's data is equal to the dataProp, we can remove that node,
        // but before we remove that node, we want to reassign the currentNode's next property to point to the node that we're removing's next property

        // Initialize currentNode var to be this.head
        let currentNode = this.head
        // If the currentNode's data equals the dataProp, reassign this.head to be the next node
        if(currentNode.data === dataProp){
            this.head = currentNode.next
        } else if(currentNode.next.data === dataProp){
            // console.log("Current Node: ", currentNode)
            // console.log("currentNode.next: ", currentNode.next)
            // console.log("currentNode.next.next: ", currentNode.next.next)

            currentNode.next = currentNode.next.next
            // console.log("New List: ", this)
        }
        // While there are nodes in the linked list, iterate through
        while(currentNode){
            // If the next node's data is equal to the dataProp
            if(currentNode.next?.data === dataProp){
                // Take that node out, as reassign currentNode's next prop to be currentNode.next.next(the node after the next)
                currentNode.next = currentNode.next.next
            }
            // Reassign currentNode to be the next node so we can keep iterating through all the nodes in the list
            currentNode = currentNode.next
        }
    }

    // addToFront(node){
        // Assign node's next prop to be this.head
        // Reassign this.head to be node
    // }

    // toArray(){
        // Initialize an empty arr
        // Iterate through all the nodes, and push the data from each node to the array
        // return array
    // }

    // reverse(){
        // 1. Initilize new reversedArr var and assign it the output of the toArray() call on this linked list, and also call the reverse method on the newly created array(this can be done in one or two steps)
        // 2. Initialize a new empty array(reversedNodes) to hold our nodes as we create them(this will help us keep the nodes so we can update their "next" props)

        // 3. Iterate through the reversedArr
            // 3a. Create a new instance of the Node class for each value.
            // 3b. Push that new node to the reversedNodes array
            // 3c. If i - 1 >= 0, assign the next node of the element in that index of reversedNodes to be the newly created node ( reversedNodes[i - 1].next = node )

        // 4. Reassign this.head to be the first element in the reversedNodes array
    // }
}

const list = new LinkedList()
list.insert(node1)
list.insert(node2)
list.insert(node3)

// list.clear()

list.delete(15)
console.log(list)
// console.log(list.getFirst())
// console.log(list.getLast())
// console.log(list.isEmpty())

// console.log(list.getKth(3))

// console.log(list.size())
// console.log(list)
// list.clear()
// console.log(list)
// console.log(list.size())

// console.log(list.search(11))



// Linked List vs Array run time
// Arrays have to re-index every single element that comes after, if we are inserting an element at the beginning or anywhere in the middle
//             0, 1, 2, 3, 4
// let arr = [ 2, 5, 7, 8, 10]
// arr.unshift(1)
//  0  1  2  3  4  5
// [1, 2, 5, 7, 8, 10]
// console.log(arr)