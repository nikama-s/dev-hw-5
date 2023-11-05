let numb = 25;
let sum = 0;
if (numb > 0) {
    for (let i = 0; i < numb; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
 }
else {
   console.log(0);
}