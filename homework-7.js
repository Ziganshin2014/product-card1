function StateTheTemperature (c, t) {
    console.log(`Сейчас в ${c} температура — ${t} градусов по Цельсию`)
}

StateTheTemperature ('Москва', '20')

function CheckSpeed (speed) {
    if (speed == 299792458) {
        console.log(`Световая скорость`)
    }
    if (speed > 299792458) {
        console.log(`Сверхсветовая скорость`)
    }
    if (speed < 299792458) {
        console.log(`Субсветовая скорость`)
    }
}

CheckSpeed ('299792458')
const product = "milk"
const price = 89

function BuyProduct (Budget) {
    if (Budget >= price) {
        console.log(`${product} приобретён. Спасибо за покупку!`)    
    } else  { console.log(`Вам не хватает ${price - Budget} рублей,  пополните баланс`) }
}

BuyProduct ('9')

function test () {

}

const test1 = 1
let test2 = 1
var test3 = 1