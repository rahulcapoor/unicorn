var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2];
    const sortedArray = mergedArray.sort((a,b) => a-b);
    if(sortedArray.length %2 == 0){
        const midIndex = sortedArray.length /2;
        return (sortedArray[midIndex-1] +sortedArray[midIndex])/2;
    }
    else{
        const midIndex = (sortedArray.length -1) /2;
        return sortedArray[midIndex];
    }
    
};

console.log(findMedianSortedArrays([1,3,4], [2]));