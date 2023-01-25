//Variables
const mainDisplay = document.querySelector(".main-display");
const secondaryDisplay = document.querySelector(".secondary-display");
const testerBtn = document.querySelector("#tester-btn")
const mainBtns = document.querySelectorAll(".main-btn");
let mainDisContent = [];

//Functions
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
    },
    btnFunc(elm) {
        elm.addEventListener('click',
            (e) => {
                mainDisContent.push(`${e.target.innerText}`);
                mainDisplay.innerText = mainDisContent.join('');
                // mainDisplay.textContent = e.target.innerText;
                // console.log(e.target.innerText)
            }
        )
    },
}

// testerBtn.addEventListener(click,
//     (e) => {
//         // mainDisplay.textContent = this.
//         console.log(e)
//     }
// )

mainBtns.forEach((btn) => calc.btnFunc(btn))