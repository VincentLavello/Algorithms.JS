function SLL(value,nextNode,action) {
    var Node = new Map();
    var Head = new Map();
    var SetHead = false;
    var SetNode = false
    var mapkeynum = value; 
    var nextnodeValue=0;
    var mapkeynumstring=mapkeynum.toString();
    var nextNodeString=nextNode.toString();
    //actions: 0 new head, 1: add to front, 2 add to rear
    switch(action) {
        case 0: //new head
                // if (!SetHead) {
                Head.set(mapkeynumstring, nextNodeString)
                // }
                // if there are already nodes
                if (SetHead) {
                  var iterKey = Node.keys();
                  var iterVal = Node.values();
                  Node.set(iterKey.next().value, iterVal.next().value)
                }// if head is the first node created ADD TO NODES
                else {
                  var iterKey = Head.keys();
                  var iterVal = Head.values();
                  Node.set(iterKey.next().value, iterVal.next().value) 
                  SetHead=true;
                }
                break;
        case 1: //add new first node - called from head if firt time
        
             Node.set(mapkeynumstring, nextNodeString);
             break;
        case 2: //add to front -- assumes there's a head oops.
              iterKey = Head.keys(); //get value of key string
              mapkeynum=iterKey.next().value
              iterVal = Head.values(); // get head map object value array
              nextnodeValue=iterVal.next().value; // heads next
              // CREATE A NEW NODE WITH HEAD.VALUE AS THE NEXT VALUE
              SLL(value, mapkeynum, 1); // set head as next
              Head.clear(); //head map only keeps one.
              //REINIT HEAD AS NEWLY COPY OF NEWLY CREATED NODE
              SLL(value, mapkeynum, 0); //copy of entry but in headnode
            
            Node.set(mapkeynumstring, nextNodeString);
            break;

        case 3: //add last
             break;

        case 4: //last
           break;

        default: //
        
    }
     for (var [key, value] of Head) {
      console.log("Head Value:" + key + " - Head Next:" + value);     
    }
    return Node;
}


    // nextNodeString = nextNode.tostring();
    // Node.set(keynumstring, nextNodeString);

    //   return = Node;

 //actions: 0 new head, 1: add to front, 2 add reaara
function testSLL(keynum, value, action ) {
    test = SLL(keynum, value, action);
    var iterKey = test.keys();
    var iterVal = test.values();
    // console.log(iterKey.next().value);
    // console.log(iterVal.next().value);
 for (var [key, value] of test) {
      console.log("Node Value:" + key + " - Node Next:" + value);     
    }
    
}
testSLL(2,1,0);
testSLL(1,0,1);

//W O R K S:
function test2() {
    var Node = new Map();
      Node.set('1', '7');
      Node.set('7', '2');
      Node.set('2', '3');
      Node.size; // 3
      // Node.get('fox'); // undefined
    
    var keynum = 1; 
    var keynumstring="";
    
    for (var [key, value] of Node) {
      keynumstring=keynum.toString()
      console.log(Node.get(keynumstring));
     keynum=Node.get(keynumstring);
    }
    var iterKey = Node.keys();
     var iterVal = Node.values();
    console.log(iterKey.next().value);
    console.log(iterVal.next().value);
     
    
    // Node.clear();
    // Node.size; // 0
    }
    x = test2();




// test()
// function test2() {
// var Node = new Map();
// Node.set('dog', 'woof');
// Node.set('cat', 'meow');
// Node.set('elephant', 'toot');
// Node.size; // 3
// Node.get('fox'); // undefined
// Node.has('bird'); // false
// Node.delete('dog');
// Node.has('dog'); // false

// for (var [key, value] of Node) {
//   console.log(key + ' goes ' + value);
// }
// // "cat goes meow"
// // "elephant goes toot"

// Node.clear();
// Node.size; // 0
// }
// x = test2();
