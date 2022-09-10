function maxProfit(price) {
    // code here
    let max = new Array(price.length);
    let lastIndex = -1;
    for(let i= price.length-1; i>=1;i-=2){
        max[i] = 0;
        let value = price[i];
        for(let j =i-1;j>=0;j-=2){
            if(value - price[j] > max[i]){
                lastIndex = j;
            }
            max[i] = Math.max( value - price[j], max[i]);
        }
        console.log(i, max[i])
        i = lastIndex+1;
    }

    let newArray = max.sort((a,b) => a-b).filter(e=>e);
    console.log(newArray);
    return newArray[newArray.length-1] + newArray[newArray.length-2];
    }


console.log(maxProfit([10 ,22, 5 ,75, 65 ,80, 2,100]));
