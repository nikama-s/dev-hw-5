object = {
    "r1n": {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            },
            "fv": [1, 3, 6, 9]
        },
        "rmk": {
            "amr": [50, 50, 100, 150, 250]
        }
    },
    "fik": {
        "er": [592, 92, 9, 13],
        "gp": [12, 34, 116, 29]
    }
}
function getRootProperty(object, item) {
    for ( let i in object ) {
        if ( Array.isArray(object[i]) && object[i].includes(item) ) return i;
        else if ( typeof object[i] === 'object' && Array.isArray(object[i]) === false ) {
            let retry = getRootProperty(object[i], item);
            if ( retry !== null) return i;
        }
    }
    return null;
}
console.log(getRootProperty(object, 5 ));