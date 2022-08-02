
function GetNumber(sum, digits){
    const minValue = Math.pow(10, digits-1);
    const upperLimit = Math.pow(10, digits)-1;
   
    const digitEqualToSum = [];
    for(let i= minValue; i <= upperLimit; i++){
        const nnumberInStringFormat = i.toString();
        const numbers = nnumberInStringFormat.split("");

        let sumofNumbers = 0;
        for(let num = 0; num < numbers.length; num++){
            sumofNumbers += +numbers[num];
        }

        if(sumofNumbers == sum){
            digitEqualToSum.push(i);
        }
    }

    console.log(digitEqualToSum);
}


GetNumber(6, 3);
