//let employees = [
//    {name: 'Viktoria', age: 36, salary:35000, jobTitle: 'Manager' },
//    {name: 'Dominika', age:28, salary: 25000, jobTitle: 'Accountant'},
//    {name: 'Frederico', age:42, salary:40000, jobTitle: 'Supervisor'}
//];


//let accounts = [
//    { accountNumber:123, balance:2200, type: 'Checking',function:'Deposit or withfraw '},
//    { accountNumber: 567, balance: 3400, type: 'Savings', function:'Deposit '},
//]
  
//let dog = {
//    breed : 'Yorkie',
//    age : 5,
//   color : 'Grey',

//    bark: function(){
//       console.log(`${this.breed } is barking`);
//    },

//   wagTail: function(){
//        console.log(`${this.breed} is wagging tail`);
//   },
//
//    fetch: function(){
//       console.log(`${this.breed} is fetching the ${item}`)
//  }

//};



//let product1 = {
//    name: 'Laptop',
 //   price: 1000,
 //   manufacturer: 'Dell',
 //   category: 'Electronics',
 //   description: 'Great device with 200 GB memory card'
//};

//let product2 = {
//    name: 'Sneakers',
 //   price: 80,
//   manufacturer: 'Nike',
 //   category: 'Footwear',
//    description: 'Comfortable sneakers for running and working out'

//};

//console.log(product1); 
//console.log(product2); 

//Increas the price by $10
//product1.price += 10;
//product2.price +=10;
//console.log(`New price of ${product1.name} : $${product1.price}`);
//console.log(`New price of ${product2.name} : $${product2.price}`);



let blogPosts = [
    { title: 'First Post', author: 'Alice', date: '2023-01-01', content: 'Happy New Year!' },
    { title: 'Second Post', author: 'Bob', date: '', content: 'No date on this one.' },
    { title: 'Third Post', author: 'Charlie', date: '2023-03-15', content: 'Spring is coming.' }
];

function checkEmptyDate(posts) {
    return posts.some(post => !post.date);
}

// Example usage:
if (checkEmptyDate(blogPosts)) {
    console.log('There is at least one blog post with an empty date field.');
} else {
    console.log('All blog posts have dates.');
}
