
//   - Use the following Node class structure as a reference for the following problems:
  
//   class Node {
//     constructor(value, next = null) {
//       this.value = value;
//       this.next = next;
//     }
//   }
  
  - Part 1:
  Write a function that takes in a linked list comprised of node objects and returns an array of all the values within each node. (You can assume all linked list inputs will have a value (head !== null))
    -Ex:
    input: {value : 1, next: {value: 5, next : {value: 12, next: {value: 8 , next: null}}}}

    output: [1,5,12,8]

function linkedListArray(head) {
    const result = [];
    // 1. Intialize an empty array to store the values
    let current = head;
   // 2. Start from the head of the linked list.
    
   //3.  traverse the linked list using a loop until the end (null) is met.
   while (current !== null) {
    // 4. In each iteration , push the value of the current node into the array.
        result.push(current.value);
        // 5. Move to the next node in the  linked list.
        current = current.next
    }
    // 6. Return the array containing values of all nodes in the linked list.
    return result;
}

//thought process
// Initialize an empty array to store the values.
// Start from the head of the linked list.
// Traverse the linked list using a loop until the end (null) is met.
// In each iteration, push the value of the current node into the array.
// Continue the loop until the end of the linked list.
// Return the array.


  - Part 2:
  Write a function that takes in a linked list comprised of node objects and returns a string representing the values in each node in the format below. 
  (You can assume all linked List inputs will end with null) 
    -Ex:
    input: {value : 1, next: {value: 5, next : {value: 12, next: {value: 8 , next: null}}}}
    
    output : "1 -> 5 -> 12 -> 8 -> null"
    
    function linkedListToString (head) {
        // Initialize an empty string to store the formatted values.
        let result = "";
        // Start from the head of the linked list.
    let current = head;


    // Traverse the linked list using a while loop until the end (null) is reached.
    while ( current !== null) {
        // In each iteration, append the value of the current node to the string.
        result += current.value + (current.next ? " -> " : " -> null");
        // If the current node has a next node, append " -> " to the string; otherwise, append " -> null".
        current = current.next;
        // Continue the loop until the end of the linked list.
    }
    return result;
    // Return the formatted string.
}

// thought process