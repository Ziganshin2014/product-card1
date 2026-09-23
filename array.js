export const products = [
  { title: 'Кофе', price: 1290 },
  { title: 'Чай', price: 540 },
  { title: 'Кружка', price: 890 },
  { title: 'Термокружка', price: 1490 },
  { title: 'Сироп', price: 350 }
];

const reduceProducts = products.reduce((acc,pro) => {
  acc[pro.title] = pro.price;
  return acc   
},[] )


console.log(reduceProducts)
