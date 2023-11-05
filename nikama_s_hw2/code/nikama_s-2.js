const nums = [1, 2, 3, 4, 6];
for ( let i = 0; i < nums.length; i++ ) {
    let sum1 = 0, sum2 = 0;
    for ( let n = 0; n < i; n++ ) {
        sum1 += nums[n];
    }
    for( let n = i+1; n < nums.length; n++ ) {
        sum2 += nums[n];
    }
    if ( sum1 === sum2 ) {
        console.log(i);
        break;
    }
   else if ( i === nums.length - 1 ) {
        console.log(-1);
        break;
    }
}
