let words = ["tsar", "rat", "tar", "tars", "cheese", "star", "h"];
let finalArr = [];
let wordsAgain = words;
function ifAreAnagrams(word1, word2) {
    return word1.split('').sort().join('') === word2.split('').sort().join('');
}
while (wordsAgain.length > 0) {
    let word = wordsAgain.shift();
    let anagrams = [word];
    for (let i = wordsAgain.length - 1; i >= 0; i--) {
        if (ifAreAnagrams(word, wordsAgain[i])) {
            anagrams.push(wordsAgain.splice(i, 1)[0]);
        }
    }
    finalArr.push(anagrams);
}
console.log(finalArr);