
 const _ = require('lodash');
class item{
    constructor(){
        this.value,
        this.priority
    }
}

let priorityQ = [];
for(var i =0; i<100000; i++){
    priorityQ.push(new item());
}

let currentIndex = -1;

function enqueue(value, priority){
    currentIndex++;
    priorityQ[currentIndex] = new item();
    priorityQ[currentIndex].value = value;
    priorityQ[currentIndex].priority = priority;
}

function getItem(){
    console.time('array map'); 
    const highestPriority = _.maxBy(priorityQ, item => item.priority);
    console.timeEnd('array map'); 
    console.time('array filter'); 
    const valueWithSamePriority = [...priorityQ].filter(e=> e.priority === highestPriority?.priority);
    console.timeEnd('array filter'); 

    return valueWithSamePriority.pop();
}

function peek(){
    return getItem()?.value;
}

function dequeue(){
    const ind = priorityQ.findIndex(item=> item == getItem());
    for (var i = ind; i < currentIndex; i++) {
        priorityQ[i] = priorityQ[i + 1];
    }
    currentIndex--;
}
  

enqueue(10, 2);
enqueue(14, 4);
enqueue(16, 4);
enqueue(12, 3);
console.time('array peek'); 
console.log(peek());
console.timeEnd('array peek'); 
// Dequeue the top element
console.time('array dequeue'); 
dequeue();
console.timeEnd('array dequeue'); 

console.time('array peek'); 
console.log(peek());
console.timeEnd('array peek'); 

console.time('array dequeue'); 
dequeue();
console.timeEnd('array dequeue'); 

console.time('array peek'); 
console.log(peek());
console.timeEnd('array peek'); 