class Vector {
    constructor(vector) {
        this.vector = vector;
    }
    add(b) {
        if (this.vector.length !== b.vector.length) throw new Error;
        else {
            let c = [];
            for (let i = 0; i < this.vector.length; i++) {
                c.push(this.vector[i] + b.vector[i]);
            }
            console.log(new Vector(c));
            return new Vector(c);
        }
    }
    subtract(b) {
        if (this.vector.length !== b.vector.length) throw new Error;
        else {
            let c = [];
            for (let i = 0; i < this.vector.length; i++) {
                c.push(this.vector[i] - b.vector[i]);
            }
            console.log(new Vector(c));
            return new Vector(c);
        }
    }
    dot(b) {
        if (this.vector.length !== b.vector.length) throw new Error;
        else {
            let mult = 0;
            for (let i = 0; i < this.vector.length; i++) {
                mult += this.vector[i] * b.vector[i];
            }
            console.log(mult);
        }
    }
    norm() {
        let sum = 0;
        for (let el of this.vector) {
            sum += el * el;
        }
        console.log(Math.sqrt(sum));
    }
    equals(b) {
        let equal = true;
        if (this.vector.length !== b.vector.length) equal = false;
        for (let i = 0; i < this.vector.length; i++) {
            if (this.vector[i] !== b.vector[i]) equal = false;
        }
        console.log(equal);
    }
    toString() {
        let str = `${this.vector}`;
        str = '(' + str + ')';
        console.log(str);
    }
}
