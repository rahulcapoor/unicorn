function cutRod(c, n) {
    let r = new Array(n + 1);
    r[0] = 0;
    for (let i = 1; i <= n; i++) {
        let maxLength = Number.MIN_VALUE;
        for(j=0; j<i; j++){
            maxLength = Math.max(maxLength, c[j] + r[i-j-1]);
        }
        r[i] = maxLength;
    }

    return r[n];
}

console.log(cutRod([3, 5, 10, 9, 10, 17, 17, 20], 8));