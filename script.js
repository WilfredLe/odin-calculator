//Variables
const mainDisplay = document.querySelector(".main-display");
const secondaryDisplay = document.querySelector(".secondary-display");
const testerBtn = document.querySelector("#tester-btn")
const mainBtns = document.querySelectorAll(".main-btn");
const equalBtn = document.querySelector(".equal-btn");
const clearBtn = document.querySelector(".clear-btn");
const deleBtn = document.querySelector("#back-btn");
const heartBtn = document.querySelector("#heart-btn");
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
        let numX = parseFloat(parseFloat(x).toFixed(2));
        let numY = parseFloat(parseFloat(y).toFixed(2));
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
                if(mainDisplay.classList.contains('heart')) {
                    mainDisplay.classList.add('main-display');
                    mainDisplay.classList.remove('heart');
                    secondaryDisplay.classList.add('secondary-display');
                    secondaryDisplay.classList.remove('heart');
                    secondaryDisplay.innerText = ""
                };
                lastIndex = mainDisContent.length-1;
                if(mainDisContent.length === 0) 
                    {mainDisContent.push(`${e.target.innerText}`)}
                else if(mainDisContent.indexOf('.') !== -1) 
                    {
                        periodIndex = mainDisContent.indexOf('.');
                        numIndex = periodIndex - 1;
                        mainDisContent.pop();
                        mainDisContent[numIndex] = parseFloat(`${mainDisContent[numIndex]}.${e.target.innerText}`);
                    }
                else if(!isNaN(parseInt(e.target.innerText)))
                    {
                        if(!isNaN(parseInt(mainDisContent[lastIndex]))) 
                            {mainDisContent[lastIndex] = parseFloat(`${mainDisContent[lastIndex]}${e.target.innerText}`); console.log('IT TRIGGERS')}
                        else 
                            {mainDisContent.push(`${e.target.innerText}`)}
                    }
                else 
                    {mainDisContent.push(`${e.target.innerText}`)};
                mainDisplay.innerText = mainDisContent.join('');
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
                totalHolder = null
            }
        )
    },
    deleteBtnFunc(deleBtn) {
        deleBtn.addEventListener('click', () => {
                lastIndex = mainDisContent.length-1;
                if(mainDisContent.length === 0) {}
                else if(mainDisContent[lastIndex].toString().length > 1) {
                origNum = mainDisContent.pop().toString();
                changedNum = origNum.split('');
                changedNum.pop();
                changedNum.join('');
                mainDisContent.push(parseInt(changedNum));
                }
                else {mainDisContent.pop()}
                mainDisplay.innerText = mainDisContent.join('')
            }
        )
    },
    heartBtnFunc(heartBtn) {
        heartBtn.addEventListener('click', () => {
                mainDisplay.innerText = "You are amazing and deserve all the boba in the world";
                mainDisplay.classList.add('heart');
                mainDisplay.classList.remove('main-display');
                secondaryDisplay.innerText = "<3 <3 <3 <3 <3 <3 <3 <3 <3";
                secondaryDisplay.classList.add('heart');
                secondaryDisplay.classList.remove('secondary-display')
            }
        )
    }
}


mainBtns.forEach((btn) => calc.btnFunc(btn));
calc.equalBtnFunc(equalBtn);
calc.clearBtnFunc(clearBtn);
calc.deleteBtnFunc(deleBtn);
calc.heartBtnFunc(heartBtn);