let truck = [["[IIII]", "[llll]", "[1111]", "[@@@@]", "[||||]", "[║║║║]", "[yyyy]"], ["hj", "[nnnn", "[jjj]" ]];
let sausageArr =[];
let arr = [];
for ( let box of truck ) {
    for ( let item of box ) {
        if ( item.startsWith("[") && item.endsWith("]") && item.length === 6 && item[1] === item[2] && item[1] === item[3] && item[1] === item[4]) {
            item = item.replace("[", "").replace("]", "");
            sausageArr.push(item);
        }
    }
}
for ( let pack = 0; pack < sausageArr.length; pack++ ) {
    if (( pack + 1 ) % 5 !== 0 ) arr.push(sausageArr[pack])
}
arr = arr.join('').split('').join(' ');
console.log(arr);
