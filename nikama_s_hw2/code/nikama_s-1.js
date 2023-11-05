const honor = [1, 2, 3, 4, 7, 9];
const day = 2;
let sumsArr = [];
for( let n = 0; n < honor.length / day; n++ ) {
    let sum = 0;
    for ( let i = n; i < honor.length; i += honor.length / day ) {
        sum += honor[i];
    }
    sumsArr.push(sum);
}
let max = sumsArr[0];
for (let el of sumsArr) {
    if (max < el) max = el;
}
console.log(max);