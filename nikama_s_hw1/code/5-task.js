let numbers = "-17 452 -3 6 -35";
function highAndLow(strNum) {
    let allNums = strNum.split(' ');
    min = allNums[0];
    max = allNums[0];
    for (i = 0; i < allNums.length ; i++) {
        allNums[i] = parseInt(allNums[i]);
        if (max < allNums[i]) {
            max = allNums[i];
        }
        else if (min > allNums[i]){
            min = allNums[i];
        }
    }
    console.log(max, min);
}
highAndLow(numbers);

