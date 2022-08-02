var minimumDifference = function(nums, k) {
    const sortedNums = nums.sort((a,b) => a-b);
    console.log(sortedNums);
    let finalDifference = 0;
    
    for(let i = 0; i+k <= nums.length; i++){
        const numbersGrp = sortedNums.slice(i, i+k);
        const difference = numbersGrp[k-1] - numbersGrp[0];
        //console.log(difference);
        if(i==0 || finalDifference > difference){
            finalDifference = difference;
        }
    }
    return finalDifference;
};

console.log(minimumDifference([1730,78090,78197,76063,41072,25772,64973,44059,97954,20449,37462,60265,53283,43481,81501,73746,19123,34867,12144,62845,77983,59895,57157,38916,56188,37623,52200,88411,30711,28715,51323,77016,30741,63977,3071,9129,20313,80290,11220,90641,8553,79604,46684,86482,85661,55637,5453,86799,56086,80546,70214,99889,8780,48720,11455,47179,52401,44928,16540,65339,41927]
    ,52));