let num1
let num2
let opSelected = false
let operation

const addNumbers = ([...nums]) => nums.reduce((total, num) => total + num)

const subtractNumbers = ([...nums]) => nums.reduce((total,num) => total - num)

const multiplyNumbers = ([...nums]) => nums.reduce((total, num) => total * num)

const divideNumbers = ([...nums]) => {
    if (num2 == 0) return display.textContent = 'divby 0 error'
    return nums.reduce((total, num) => total / num)
}
const operate = () => {
    let result
    switch (operation) {
        case '+': result = addNumbers([parseInt(num1),parseInt(num2)]); break
        case '-': result = subtractNumbers([num1,num2]); break
        case '/': result = divideNumbers([num1,num2]); break
        case 'x': result = multiplyNumbers([num1,num2]); break
    }
    display.textContent = result
    num1 = result
    num2 = undefined
    opSelected = false
    operator.forEach(operator => operator.style.backgroundColor = '#806496')
    console.log('operate',num1, operation, num2, opSelected)
}

const updateDisplay = (e) => {
    if (display.textContent == 'clearAll' || display.textContent == 'divby 0 error') display.textContent = ''
    if (e.target.textContent == '.') {
        decimalButton.disabled = 'true'
        decimalButton.style.backgroundColor = 'grey'
    }
    if (num1 == undefined) { 
        display.textContent = display.textContent + e.target.textContent
    } else if (opSelected == true && display.textContent == num1) {
        display.textContent = e.target.textContent
        num2 = display.textContent;
    } else {
        display.textContent = display.textContent + e.target.textContent
        num2 = display.textContent;
    }
    console.log('updateNumber: ',num1, operation, num2, opSelected)
}

const setOperator = (e) => {
    operation = e.target.textContent;
    num1 = display.textContent
    e.target.style.backgroundColor = '#647A96'
    opSelected = true
    console.log('setOperator: ',num1, operation, num2, opSelected)
}

const clearAll = () => {
    display.textContent = 'clearAll'
    opSelected = false
    num1 = undefined
    num2 = undefined
    operation = undefined
    operator.forEach(operator => operator.style.backgroundColor = '#806496')
    console.log('clearDisplay: ',num1, operation, num2, opSelected)
}

const back = () => display.textContent = display.textContent.slice(0, (display.textContent.length -1))

const clearLast = () => display.textContent = ''

const display = document.querySelector('.display')

const numbers = Array.from(document.querySelectorAll('.number'))
numbers.forEach(number => number.addEventListener('click', updateDisplay))

const operator = Array.from(document.querySelectorAll('.operator'))
operator.forEach(operator => operator.addEventListener('click', setOperator))

const clearAllButton = document.querySelector('.clearall')
clearAllButton.addEventListener('click', clearAll)

const equalButton = document.querySelector('.equals')
equalButton.addEventListener('click', operate)

const clearLastButton = document.querySelector('.clearlast')
clearLastButton.addEventListener('click', clearLast)

const backButton = document.querySelector('.back')
backButton.addEventListener('click', back)

const decimalButton = document.querySelector('.decimal')
decimalButton.addEventListener('click', updateDisplay)