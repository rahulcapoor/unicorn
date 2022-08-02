var arrayPairSum = function(nums) {
    const length = nums.length;
    const sortedNums = nums.sort((a,b) => a-b);
    console.log(sortedNums);
    let sum = 0;
    for(let i = 0;  i< length; i++){
        sum += Math.min(sortedNums[i], sortedNums[i+1]);
        i++;
    }
    return sum;
};

console.log(arrayPairSum([-470, 66, -4835, -5623]));