class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}


const animal = new Animal('Buddy');
animal.speak(); 


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


const person = new Person('Alice', 30);
person.greet(); 


class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`The ${this.make} ${this.model} is starting.`);
    }
}


const car = new Car('Toyota', 'Camry', 2021);
car.start(); 


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}


const rectangle = new Rectangle(10, 5);
console.log(rectangle.getArea()); 


class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.sideLength = sideLength;
    }

    getArea() {
        return this.sideLength * this.sideLength;
    }
}


const square = new Square(4);
console.log(square.getArea()); 


class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance is $${this.balance}.`);
    }
}


const bankAccount = new BankAccount('123456', 'John Doe', 1000);
bankAccount.deposit(500); 


class PersonWithEmail {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    sendEmail(message) {
        console.log(`Sending email to ${this.email} with message: ${message}`);
    }
}


const personWithEmail = new PersonWithEmail('Alice', 'alice@example.com');
personWithEmail.sendEmail('Hello Alice!'); 


class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    discount(percentage) {
        const discountedPrice = this.price - (this.price * (percentage / 100));
        return discountedPrice;
    }
}


const product = new Product('Laptop', 1000, 'A high-performance laptop');
console.log(product.discount(10));


