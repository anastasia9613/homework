//Create an array of products with at least 5 products.Properties:name,price,quanity

let products = [
    {name: "Shampoo", price: 20, quantity: 50},
    {name: "Gel", price: 10, quantity: 40},
    {name: "Cream", price: 8, quantity: 60},
    {name: "Moisturizer", price:12, quantity: 30},
    {name:"Sunscreen", price: 11, quantity: 100}
]

//Loop though the array using a for loop and print out the name and price of each product
//for (let i = 0; i < products.length; i++){
//    console.log(`name: ${products[i].name}, price: $${products[i].price}`)
//};

//Use a while loop to find the product with the lowest price.Print out the name and price of the product.

//let i = 0;
//let lowestPriceProduct = products[0];
//while (i< products.lenght){
//    if(products[i].price < lowestPriceProduct.price){
//    lowestPriceProduct = products[i];
    
//    }
//    i++;
//}

//console.log(`name:${lowestPriceProduct.name},price: $${lowestPriceProduct.price}`);

//Use a for of loop to calculate the total value of all products in the array.


//let sum = 0;
//for (let i =0; i <products.length; i++){
//    sum +=products[i].price * products[i].quantity;
//}
//console.log(`total value of all products: $${sum.toFixed(2)}`);  

//Use a for in loop to print out all the properties of each product in the array.
// for (let i = 0; i < products.length; i++) {
//    console.log(`Products ${i + 1} : Name:${products[i].name}, Price: $${products[i].price}, quantity: ${products[i].quantity}`)
// }


