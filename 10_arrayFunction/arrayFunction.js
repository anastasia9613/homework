//Write a function that takes an array of objects representing books and returns an array containing the titles of those books.
//let books = [
//    { title: 'To Kill a Mockingbird', author: 'Harper Lee', published: 1960 },
//    { title: '1984', author: 'George Orwell', published: 1949 },
//    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: 1925 },
//    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', published: 1951 }
//]

//function getBookTitles (books){
//    return books.map(book => book.title)
//};

//let bookTitles = getBookTitles(books);
//console.log(bookTitles);

//Write a function that takes an array of objects representing products and returns an array containing only the products that are currently in stock.
//let products = [
//    { name: 'Laptop', price: 1000, inStock: true },
//    { name: 'Smartphone', price: 500, inStock: false },
//    { name: 'Tablet', price: 300, inStock: true },
//    { name: 'Monitor', price: 200, inStock: false }
//];
//function getInStockProducts(products) {
//   return products.filter(product => product.inStock)
//}

//let inStockProducts = getInStockProducts(products);
//console.log(inStockProducts);


//Write a function that takes an array of objects representing users and returns the first user whose email address matches a given email.
//let users = [
//   {name:'Alice',email:'alice@example.com'},
//   {name:'Bob',email:'bob@example.com'},
//   {name:'Charlie',email:'charlie@example.com'}
//]
//function findUserByEmail(users,email) {
//    return users.find(user => user.email === email);
//};

//let targetEmail = 'charlie@example.com'
//let user = findUserByEmail(users,targetEmail);
//console.log(user);

//Write a function that takes an array of objects representing tasks and returns true if all the tasks are marked as complete, otherwise returns false

//let tasks = [
//    { description: 'Task 1', complete: true },
//    { description: 'Task 2', complete: false },
//    { description: 'Task 3', complete: true }
//];

//unction areAllTasksComplete(tasks) {
//    return tasks.every(task => task.complete);
//}

//let allComplete = areAllTasksComplete(tasks);
//console.log(allComplete);

//Write a function that takes an array of objects representing purchases and returns the total amount spent on those purchases.
//let purchases = [
//    { item:'phone', amount:700 },
//    { item:'computer', amount:900 },
//    { item:'ipad',amount:300 }
//];

//function calculateTotalAmount(purchases) {
//    return purchases.reduce((total, purchase) => total + purchase.amount,0);
//}

//let totalSpent = calculateTotalAmount(purchases);
//console.log('Total amount spent:', totalSpent);

//Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.

//let numbers = [13, 15, 17, 19, 21];
//function sumArray(numbers) {
//    return numbers.reduce ((total, number) => total + number, 0);
//}
//let sum = sumArray(numbers);
//console.log(sum);


//Write a function that takes an array of strings as input and returns a new array with all the strings converted to uppercase.
//let string = ['i am learning javascript'];
//function convertToUpperCase(string) {
//    return string.map(string => string.toUpperCase());
//}
//let upperCaseString = convertToUpperCase(string);
//console.log(upperCaseString);

//Write a function that takes an array of numbers as input and returns a new array with all the even numbers from the original array.

//let numbers = [1,2,3,4,5,6,7,8,9];
 //function filterEvenNumbers(numbers) {
//    let evenNumbers = [];
 //   for (let i=0; i <numbers.length; i++)
 //       if (numbers[i] % 2 ===0 ) {
 //           evenNumbers.push(numbers[i]);
 //       }
 //return evenNumbers;
 //}

 //console.log(filterEvenNumbers(numbers));


 //Write a function that takes an array of strings as input and returns a new array with all the strings that have a length of 4 or less.
 function filterShortStrings(strings) {
    return strings.filter(str => str.length <= 4);
}

let strings = ['tree', 'cat', 'apple', 'dog', 'sun', 'sky'];
let shortStrings = filterShortStrings(strings);
console.log('Strings with length 4 or less:', shortStrings); 

