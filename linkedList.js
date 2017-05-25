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

  }

  function add(val){
   if (head === null){
    head = {value: val,
            next: null};
            console.log("head is " +head.next);

  }else{
    console.log("adsf");
  }
}
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
console.log(myLL.getHead().next);


//for (var i = 0; i<)