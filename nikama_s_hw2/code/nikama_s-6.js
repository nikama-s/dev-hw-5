let island =
    ["OXOOOX",
    "OXOXOO",
    "XXOOOX",
    "OXXXOO"]
let perimeter = 0;
for ( let l = 0; l < island.length; l++) {
    for ( let i = 0; i < island[l].length; i++ ) {
        if ( island[l][i] === "X" ) {
            perimeter = perimeter + 4;
            if ( l === island.length - 1) {
                if ( island[l][i + 1] === "X" ){
                    perimeter =  perimeter - 2;
                }
            }
            else {
                if (island[l][i + 1] === "X") {
                    perimeter = perimeter - 2;
                }
                if (island[l + 1][i] === "X") {
                    perimeter = perimeter - 2;
                }
            }
        }
    }
}
console.log(perimeter);