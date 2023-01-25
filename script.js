//Variables
const mainDisplay = document.querySelector(".main-display");
const secondaryDisplay = document.querySelector(".secondary-display");
const testerBtn = document.querySelector("#tester-btn")
const mainBtns = document.querySelectorAll(".main-btn");
const equalBtn = document.querySelector(".equal-btn");
const clearBtn = document.querySelector(".clear-btn");
let mainDisContent = [];
let totalHolder = null;

//Functions
const calc = {
    add(x,y) {return x+y},
    subtract(x,y) {return x-y},
    multiply(x,y) {return x*y},
    divide(x,y) {return x/y},
    power(x,y) {return x**y},
    modul(x,y) {return x%y},
    funcSele(x,operator,y) {
        let numX = parseInt(x);
        let numY = parseInt(y);
        if(operator === "+") {return this.add(numX,numY)}
        else if(operator === "-") {return this.subtract(numX,numY)}
        else if(operator === "×") {return this.multiply(numX,numY)}
        else if(operator === "^") {return this.power(numX,numY)}
        else if(operator === "%") {return this.modul(numX,numY)}
        else {return this.divide(numX,numY)}
    },
    evalFunc() {
        let loopNum = 0;
        if(mainDisContent.length === 3) {loopNum = 1}
        else {loopNum = ((mainDisContent.length - 3) / 2) + 1};
        for(i = 0;i < loopNum; i ++) {
            if(totalHolder === null) {
                totalHolder = this.funcSele(mainDisContent[0],mainDisContent[1],mainDisContent[2]);
            }
            else{
                totalHolder = this.funcSele(totalHolder,mainDisContent[1+(i*2)],mainDisContent[2+(i*2)])
            }
            mainDisplay.innerText = `${totalHolder}`;
        }
    },
    btnFunc(elm) {
        elm.addEventListener('click',
            (e) => {
                lastIndex = mainDisContent.length-1;
                if(mainDisContent.length === 0) 
                    {mainDisContent.push(`${e.target.innerText}`)}
                else if(!isNaN(parseInt(e.target.innerText)))
                    {
                        if(!isNaN(parseInt(mainDisContent[lastIndex]))) 
                            {mainDisContent[lastIndex] = parseInt(`${mainDisContent[lastIndex]}${e.target.innerText}`)}
                        else 
                            {mainDisContent.push(`${e.target.innerText}`)}
                    }
                else 
                    {mainDisContent.push(`${e.target.innerText}`)};
                mainDisplay.innerText = mainDisContent.join('');
                console.log(mainDisContent,parseInt(e.target.innerText),mainDisContent[lastIndex],lastIndex,!isNaN(parseInt(e.target.innerText)))
            }
        )
    },
    equalBtnFunc(equalBtn) {
        equalBtn.addEventListener('click', () => {
                secondaryDisplay.innerText = `${mainDisplay.innerText}=`; 
                this.evalFunc();
                mainDisContent = [];
                mainDisContent.push(totalHolder)
            }
        )
    },
    clearBtnFunc(clearBtn) {
        clearBtn.addEventListener('click', () => {
                mainDisplay.innerText = '';
                secondaryDisplay.innerText = '';
                mainDisContent = [];
            }
        )
    }
}

// testerBtn.addEventListener(click,
//     (e) => {
//         // mainDisplay.textContent = this.
//         console.log(e)
//     }
// )

mainBtns.forEach((btn) => calc.btnFunc(btn));
calc.equalBtnFunc(equalBtn);
calc.clearBtnFunc(clearBtn)