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
    return ;
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
  }

  //  if (head === null){
  //   head = {value: val,
  //           next: null};
  //           console.log("head is " +head);

  // }else{
  //   console.log("adsf");
  // }

  // head = {value: val,
  //         next: null,
  //         _length : 0};
  // }
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

//for (var i = 0; i<)