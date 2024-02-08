

// For reference/ testing follow the structure below for the shape of the nodes that will make up your linked lists:

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // returns an array of all the even positioned node values in the list
  evenNodeValues(){
    // create an empty array to store values of even position nodes
      const result = [];
      // start at the head of the linked list
      let currentNode = this.head;
      // initialize a variable to keep track of the position of the current node in the list
      let position = 1;
      // iterate through the linked list until the end is reached( currentNode is null)
      while (currentNode) {
        // check if the position of the current node is even
        if (position % 2 === 0){
            // if it is even, push the value of the current node to the result array
            result.push(currentNode.value);
        }
        // increment the position counter
        position++
        // move to the next node in the linked list
        currentNode = currentNode.next
      }
      // return the array containing values of even position nodes
      return result;
    }


  // returns an array of the all the odd positioned node values in the list
  oddNodeValues() {
    // create an empty array to store the values of odd positoned nodes
    const result = [];
    // start at the head of the linked list
    let currentNode = this.head;
    //intialitze a variable to keep track of the positon of the current node in the list
    let position = 1;
     //iterate through the linked list until the end is reached( currentNode is null)
    while (currentNode) {
        // check if the postion of the current node is odd
      if (position % 2 !== 0){
        // if it is odd, push the value of the current node to the result array
          result.push(currentNode.value);
      }
      // increment the positon counter
      position++;
      // move to the next node in the linked list
      currentNode = currentNode.next
    }
    // return the array conatining values of odd postioned nodes
    return result;
  }
  

  // removes the odd positioned nodes in the list
  removeOddPositionNodes() {
    let currentNode = this.head;
    let prevNode = null;
    let position = 1;

    while(currentNode){
        if (position % 2 !== 0){
            if (prevNode === null){
                this.head = currentNode.next;
            } else{
                prevNode.next = currentNode.next;
            }
        } else {
            prevNode = currentNode
    }
    position++;
    currentNode = currentNode.next
  }
}

  // removes the even positioned nodes in the list
  removeEvenPositionNodes() {}

  // Optional
  insert(nodeValue) {}
}
