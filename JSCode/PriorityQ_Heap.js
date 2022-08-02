
let Heap = [];

let currentIndex = -1;

function insert(value)
{
    currentIndex++;
    Heap[currentIndex] = value;
    ShiftUpValue(currentIndex);
}

function ShiftUpValue(index){
    const parentIndex = getParentIndex(index);
    while(index > 0 && Heap[index] > Heap[parentIndex]){
        swap(parentIndex, index);
        index = parentIndex;
    }
}

function getParentIndex(index){
    return parseInt((index-1)/2);
}

function swap(i, j)
{
    var temp = Heap[i];
    Heap[i] = Heap[j];
    Heap[j] = temp;
}

function extractMax(){
    const maxPriority = Heap[0];

    Heap[0] = Heap[currentIndex];
    currentIndex--;
    shiftValueDown(0);
    return maxPriority;
}

function getLeftChild(index){
    return parseInt((index*2)+1);
}
function getRightChild(index){
    return parseInt((index*2)+2);
}

function shiftValueDown(index){
    const leftChild = getLeftChild(index);
    const rightChild = getRightChild(index);

    if(Heap[index] < leftChild){
        swap(index, leftChild);
        shiftValueDown(leftChild);
    }
    else if(Heap[index]< rightChild){
        swap(index, rightChild);
        shiftValueDown(rightChild);
    }
}

insert(45);
insert(20);
insert(14);
insert(12);
insert(31);
insert(7);
insert(11);
insert(13);
insert(7);
var i = 0;
// Priority queue before extracting max

while (i <= currentIndex) {
    console.log( Heap[i] + " ");
    i++;
}

