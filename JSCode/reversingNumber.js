
 
 function reverse(x){
     if(x < Math.sign(-1) * Math.pow(2,31) || x > Math.pow(2,31) -1){
         return 0;
     }
    let rev = 0;
    let absNumber = Math.abs(x);
   
    let lastDigit;

    while(absNumber != 0){
        lastDigit = absNumber%10;
        rev = rev*10 + lastDigit;
        absNumber = Math.floor(absNumber/10);
    }

    return Math.sign(x) * rev;
    
}
console.log(Math.pow(2,31)-1);
console.log(reverse(1534236469));
console.log(reverse(-123466));