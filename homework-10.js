import function returnCard(arr) {
    const card = prompt("Сколько карточек отобразить? От 1 до 5")
    const num = Number(card)
    if (num >= 1 && num <= 5) {
        return num
    } else {
        alert('Ошибка! Введите число от 1 до 5');
        return returnCard()
    }

}

function renderCards(cards) {
    var box = document.getElementById('product-cards');
    var html = '';

    for (var i = 0; i < cards.length; i++) {
        html = html + '<div class="card-test">';
        html = html + '<h3>' + cards[i].title + '</h3>';
        html = html + '<p>' + cards[i].price + ' руб.</p>';
        html = html + '</div>';
    }

    box.innerHTML = html;
}


const count = returnCard();
const shown = products.slice(0, count);
renderCards(shown);