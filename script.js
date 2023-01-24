const calc = {
    add(x,y) {return x+y},
    subtract(x,y) {return x-y},
    multiply(x,y) {return x*y},
    divide(x,y) {return x/y},
    funcSele(opertor,x,y) {
        if(opertor === "+") {return this.add(x,y)}
        else if(opertor === "-") {return this.subtract(x,y)}
        else if(opertor === "*") {return this.multiply(x,y)}
        else {return this.divide(x,y)}
    }
}

console.log(calc.funcSele('*',2,3))