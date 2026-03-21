console.log('Learning objects');


// let company = 'Nike';
// let itemName = 'Running shoe';
// let price = 2500;
// let avgRating = 4.5;
// let numberOfRating = 45;


let product = {
  company: 'Nike',
  itemName: 'Running shoe',
  price: 2500,
  rating: {
  fiveStar: 4,
  fourStar: 5,
  threeStar: 8,
  twoStar: 12,
  oneStar: 2,
  },
  avgRating: 4.5,
  numberOfRating:45,
};

console.log(product.rating)

console.log(product);

console.log(product.avgRating);// accessing object property using dot notation
console.log(product['avgRating']);// accessing object property using bracket notation.
let key = 'company';

console.log(product[key]);

//modifying object
product.discount = 49;// adding new key value pair
console.log('after modification:',product)
// deletion of key value pair from object

delete product.avgRating;
console.log('after deletion:', product);

