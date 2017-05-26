/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;

  function getHead(){
    return head;
  }

  function getTail(){
    return tail;
  }

  function add(val){
    var node = {value: val,
              next: null
    };
    if (!head && !tail){
      head = node;
      tail = node;
    } else {
      var tempNode = tail;
      tail = node;
      tempNode.next = tail;
    }
    return node;
  }

  function remove(num){
    var currentNode = head;
    var counter = 0;

    if (get(num)===false){
      return false;
    }
    else {
      if (num === 0) {
        head = currentNode.next;
      }
      else {
        while (counter < num) {
          prevNode = currentNode;
          currentNode = currentNode.next;
          counter +=1;
        }

        prevNode.next = currentNode.next;
        if (prevNode.next===null){ //removed last item
          tail = prevNode;
        }
      }
      return currentNode;
    }
  }
  function get(num){
    var counter = 0;
    var currentNode = null;
    var prevNode = null;
    while(counter <= num){
      if (counter === 0) {
        currentNode = head;
        counter +=1;
        }
      else {
        prevNode = currentNode;
        currentNode = currentNode.next;
        counter +=1;
      }
      if (currentNode === null) {
        return false;
      }
    }
    return currentNode;
  }

  function insert(value, number){ //the thing i'm inserting and the place
    console.log(number);
    var currentNode = head;
    var counter = 0;
    var addedNode = {
      value: value,
      next: null
    };
    if (get(number)===false || number < 0){
      return false;
    } else if (number === 0) {
      addedNode.next = head;
      head = addedNode;
    } else {
      var prevNode = get(number-1);
      var targetNode = get(number);
      var nextNode = get(number+1);

      prevNode.next = addedNode;
      addedNode.next = targetNode;

      return currentNode;

    }
  }



  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert
  };

}

// var ll = linkedListGenerator();
// ll.add("aaa");
// ll.add("bbb");
// // ll.add("ccc");

// console.log(ll.getHead());

// ll.insert(1, "eee");
//console.log(ll.getHead());
// console.log(ll.getHead().next.next.value);
// console.log(ll.getTail().value);
// ll.remove(2);
// console.log(ll.getTail().value);