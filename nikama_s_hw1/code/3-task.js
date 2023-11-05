let volume = 1071225;
function findNb(m) {
    for (let n = 1;; n++) {
        if (m > 0) {
            let currvol = n**3;
            m = m - currvol;
        }
        else if (m === 0) {
            return n-1;
        }
        else {
            return -1;
            }
    }
}
console.log(findNb(volume));
