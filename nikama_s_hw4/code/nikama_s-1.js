function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        let newKey = key.repeat(Math.ceil(str.length / key.length));
        newKey = newKey.slice(0, str.length);
        for (let i = 0; i < str.length; i++) {
            if (abc.indexOf(str[i]) !== -1) {
                let replacement = abc[abc.indexOf(str[i]) + abc.indexOf(newKey[i])];
                if (replacement === undefined) {
                    replacement = abc[abc.indexOf(str[i]) + abc.indexOf(newKey[i]) - abc.length];
                }
                str = str.slice(0, i) + replacement + str.slice(i + 1, str.length);
            }
        }
        console.log(str);
    }
    this.decode = function (str) {
        let newKey = key.repeat(Math.ceil(str.length / key.length));
        newKey = newKey.slice(0, str.length);
        for (let i = 0; i < str.length; i++) {
            if (abc.indexOf(str[i]) !== -1) {
                let replacement = abc[abc.indexOf(str[i]) - abc.indexOf(newKey[i])];
                if (replacement === undefined) {
                    replacement = abc[abc.indexOf(str[i]) - abc.indexOf(newKey[i]) + abc.length];
                }
                str = str.slice(0, i) + replacement + str.slice(i + 1, str.length);
            }
        }
        console.log(str);
    }
}