/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;

  function getHead(){
    return head;
  }

  function getTail(){
    if (!head) {
      return null;
    }else{
    while(head.next){
      head = head.next;
      return head.next;
    }
  }
}
  function add(val){
    var node = {value: val,
              next: null
    };
    if (!head){
      head = node;
    }else{
      current = head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    return node;
  }

  function remove(){
  }

  function get(){
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

var myLL = linkedListGenerator();

myLL.add("james");
myLL.add("dory");
myLL.add("jeff");
console.log(myLL.getHead());
console.log(myLL.getTail());
