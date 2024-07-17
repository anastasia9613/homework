//Write a function that takes in an array of numbers and returns the sum of all the numbers in the array.
//const numbers = [1,3,5,7,9];
//function sumArray(numbers){
//    return numbers.reduce((acc, curr) =>acc +curr, 0)
//}
//const sum = sumArray(numbers);
//console.log(sum);

//Write a function that takes in a string and returns the string reversed.
//const originalString = "anastasiia";
//function reverseString(str){
//    return str.split('').reverse().join('');
//}
//const reversedString = reverseString(originalString);
//console.log(reversedString);

//Write a function that takes in an array of objects representing people, where each object has properties for name, age, and gender, and returns an array of objects representing only the people who are over the age of 18.
//let people = [
//    {name:'Anastasiia',age: 28,gender: 'Female'},
//    {name:'Veronica',age: 27,gender:'Female'},
//    {name:'David',age: 16,gender:'Male'},
//    {name:'Alex',age: 15,gender:'Male'}
//];

//function filterAdults(people){
//    return people.filter(person =>person.age >18)
//}
//let adults = filterAdults(people);
//console.log(adults);

//Write a function that takes in an array of numbers and returns a new array containing only the even numbers from the original array.
//let numbers = [1,2,3,4,5];
//let evenNumbers = [];
//for (let i = 0; i<numbers.length; i++) {
//    if (numbers[i] % 2 ===0) {
//        evenNumbers.push(numbers[i])
//    }
//}

//console.log(evenNumbers);

//Write a function that takes in an array of strings and returns a new array containing only the strings that start with the letter "A".
//let words = ['apple','strawberry','apricot','cucumber'];
//let wordsStartWithA = words.filter (word => {
//   return word.startsWith('a')
//});

//console.log(wordsStartWithA);

//Write a function that takes in an array of objects representing books, where each object has properties for title, author, and published, and returns an array of strings 
//const books = [
//    {title:'To Kill a Mockingbird',author:'Harper Lee', published:1960},
//   {title:'The Great Gatsby',author:'F.Scott Fitzgeradld',published:1925},
//    {title:'1984',author:'George Orwell',published:1949}
//];

//function getRecentBookTitles(books) {
//    return books
//    .filter(book => book.published >=2000)
//    .map(book => book.title);
//}

//let recentBookTitles = getRecentBookTitles(books);
//console.log(recentBookTitles);

//Write a function that takes in two numbers and returns the larger of the two.
//let num1 = 13;
//let num2 = 19;

//function getLargerNumber (num1, num2){
//    return num1 > num2 ? num1 : num2;
//}
//let largerNumber = getLargerNumber(13,19);
//console.log(largerNumber);

//Write a function that takes in an array of numbers and returns the smallest number in the array.
//let numbers = [1,3,5,7,9,];

//function findSmallestNumber(numbers){
//    return Math.min(...numbers);
//}
//let smallestNumber = findSmallestNumber(numbers);
//console.log(smallestNumber);

//Write a function that takes in an array of strings and returns the longest string in the array.
//let cities = ['Moscow','USA','Switzerland','Poland']
//function longestString(array){
//    let longest = " ";
//    for (let i= 0; i<array.length;i++){
//        if(array[i].length > longest.length){
//            longest = array[i];
//        }
//   }
//   return longest;
//}

//let string = longestString(cities);
//console.log(string);

//Write a function that takes in an array of objects representing students, where each object has properties for name and grade, and returns an array of objects representing only the students who have a grade of "A".
 
let students =[
    {name:'Joshua',grade:'A'},
    {name:'Mattew',grade:'B'},
    {name:'Steven',grade:'A'}

]

function filterStudentsWithGradeA(students){
    return students.filter(student => student.grade === "A")
}

let studentsWithGradeA = filterStudentsWithGradeA(students);
console.log(studentsWithGradeA);

