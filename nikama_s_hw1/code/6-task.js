let numbers = 414581639;
function highAndLow(strin_num) {
    let str_num = strin_num.toString();
    let allnums = str_num.split('');
    for(let n = 0; n < allnums.length; n++) {
        for (let i = 0; i < allnums.length - 1; i++) {
            if (allnums[i] < allnums[i + 1]) {
                [allnums[i], allnums[i + 1]] = [allnums[i + 1], allnums[i]];
            }
        }
    }

    console.log(allnums.join(''));
}
highAndLow(numbers);