const AllCards = document.querySelector ('#change_all_card');
const ProductCards = document.querySelectorAll ('.object');
const RedHash = '#ff0000';
const BlueHash = 'rgb(0, 247, 255)';


AllCards.addEventListener('click', () => {
    ProductCards.forEach((card) => card.style.backgroundColor = RedHash )
})
    
    


const FirstCard = document.querySelector ('#change_first_card');
const firstcard = document.querySelector ('.mousse_card');

FirstCard.addEventListener('click', () => {
    firstcard.style.backgroundColor = BlueHash
})

const OpenGoogle = document.querySelector ('#openGoogle');
OpenGoogle.addEventListener('click', opengoogle)
function opengoogle () {
    const answer = confirm ('Вы действительно хотите открыть Google?');

    if (answer == true) {
        window.open('https://google.com')
}   else {
    return;
}

}
    



const Consolelog = document.querySelector ('#console_log');
Consolelog.addEventListener('click',() => consolelog ('ДЗ №6'))

function consolelog(message){
    alert(3)
    console.log(message)
}

const title = document.querySelector('.title_aqua');
title.addEventListener('mouseover', function(){
    console.log('Выбери свой продукт')
})

const change = document.querySelector ('#change_button.button');
change.addEventListener('click', () => {
    change.classList.toggle('button')
})

