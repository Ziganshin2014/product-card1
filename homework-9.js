const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



const newArray = arrayNumbers.filter(Number => Number > 4)

console.log(newArray)

const movies = [
  "Побег из Шоушенка",
  "Крёстный отец",
  "Тёмный рыцарь",
  "Криминальное чтиво",
  "Властелин колец: Братство Кольца",
  "Форрест Гамп",
  "Начало",
  "Матрица",
  "Бойцовский клуб",
  "Интерстеллар"
];

const newMovies = movies.filter(movie => movie.includes("Интерстеллар"))

console.log(newMovies)

function reverseArray(arr) {
  return [...arr].reverse();
}

console.log(movies)

const arrNum = arrayNumbers.map(arr => [...arr].reverse())

console.log(arrayNumbers)


