function jumps(input){
    let initialValue = input[0];
    const size = input.length;
    console.log('size: ', size);

    if(initialValue >= size){
        return 1;
    }

    let jumps = 0;
    let minJumpsRequiredFromIndex = [];

    for(let i = 0; i < size; i++){
        console.log('i: ', i);
        minJumpsRequiredFromIndex[i] = Number.MAX_VALUE;
        jumps++;

        for(let j= i+1; j<= input[i];j++){
            console.log('j: ', j);
            console.log('input[j] : ', input[j] +j );

            if(input[j] + j >= size){
                console.log('input[j]: ', input[j]);
                console.log('j: ', j);
                minJumpsRequiredFromIndex[i] = Math.min(jumps+1, minJumpsRequiredFromIndex[i]);
                console.log('minJumpsRequiredFromIndex[i]: ', minJumpsRequiredFromIndex[i]);
                break;
            }
        }

        if(minJumpsRequiredFromIndex[i] !=  Number.MAX_VALUE){
            jumps = minJumpsRequiredFromIndex[i];
            break;
        }
        
    } 

    return jumps;
    
}



console.log(jumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));