// Задание №3

const data = {
    name: 'Yusuf',
    age: 11,
    surname: 'Ziganshin',
    country: 'Russia',
    email: 'ziganshin.yusuf@mail.ru',
    city: 'Zelenodolsk',
}

// Задание №4

const carData = {
    owner: data  ,
    brand: 'Kia' ,
    model: 'SportAge',
    yearofmanufacture: 2019,
    color: 'black',
    boxview: 'machine',
    maxspeed: 240,
    

}

carData.owner = data

// Задание №5

function checkMaximumspeed (car) {
    if (!car.maxspeed) {
        car.maxspeed = 240
        console.log ('Максимальная скорость добавлена')
    } else {
        console.log('Максимальная скорость уже есть')
        return}
    }

checkMaximumspeed(carData)

// Задание №6

function outputValue (Data, value) {
    console.log(Object.values({},Data.value))
}

outputValue (data, name)

//Задание №7

const products = ['milk', 'eggs', 'bread']

// Задание №8

const library1 = [{name: 'qqq',author: 'eee',yearofmanufacture:10000,covercolor: 'green',genre: 'www'},
    {name: 'ttt',author: 'eee',yearofmanufacture:2022,covercolor: 'green',genre: 'www'},
    {name: 'rrr',author: 'eee',yearofmanufacture:2003,covercolor: 'green',genre: 'www'},
    {name: 'yyy',author: 'eee',yearofmanufacture:2024,covercolor: 'green',genre: 'www'}

]

library1.push({name: 'uuu',author: 'eee',yearofmanufacture:2020,covercolor: 'green',genre: 'www'})

// Задание №9

const library2 = [{name: 'q',author: 'eee',yearofmanufacture:1999,covercolor: 'green',genre: 'www'},
    {name: 't',author: 'eee',yearofmanufacture:1800,covercolor: 'green',genre: 'www'},
    {name: 'r',author: 'eee',yearofmanufacture:2026,covercolor: 'green',genre: 'www'},
    {name: 'y',author: 'eee',yearofmanufacture:2005,covercolor: 'green',genre: 'www'}

]

const library3 = [...library1,...library2]



function Checkrarity (lib){
    const Israre = lib.yearofmanufacture < 2000
    return {
        ...lib,
        Israre:Israre,
        rarity: Israre ? 'Это редкий!!!' : 'Это не редкий!!!'
    }
}

const Alllibrary = library3.map(Checkrarity)

console.log(Alllibrary)
