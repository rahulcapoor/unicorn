let finalList = [];
let currentIndex = -1;
function insert(arr){
    arr.map(item => {
        currentIndex++;
        finalList[currentIndex] = item;
    });
}
var mergeKLists = function(lists) {
    console.time('merge');
    lists.map(list => insert(list));
    finalList.sort((a,b) => a-b);
    console.timeEnd('merge');

    console.time('concat');
    const mergeArrayWithConcat = [].concat.apply([], lists);
    const sortedArray = mergeArrayWithConcat.sort((a,b) => a-b);
    console.timeEnd('concat');

    console.time('concat spread');
    const spread = [].concat(...lists);
    spread.sort((a,b) => a-b);
    console.timeEnd('concat spread');


    console.time('reduce');
    let flatArray = lists.reduce((acc, curVal) => {
        return acc.concat(curVal)
    }, []);
    flatArray.sort((a,b) => a-b);

    console.timeEnd('reduce');


    return finalList;
};

console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]));