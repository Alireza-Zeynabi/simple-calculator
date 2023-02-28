// replace '/' , '*'
let monitor = document.querySelector('.monitor')
let divideBtn = document.querySelector('.divide')
let equalBtn = document.querySelector('.equal-btn')

equalBtn.addEventListener('click', showDivide)

function showDivide() {

    let monitorVal = monitor.value
    monitorVal = monitorVal.replace('÷', '/')
    monitorVal = monitorVal.replace('x', '*')
    console.log(eval(monitorVal))
    monitor.value = eval(monitorVal)
}
