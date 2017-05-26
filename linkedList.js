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

  function remove(){
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

  function insert(){
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
