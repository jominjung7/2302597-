// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position 
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits,length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits,length -1]);

// 3. Looping over an array
//print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruits of fruits) {
    console.log(fruits);
}

// c. forEach 
fruits.forEach((fruit, Index) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('apple', 'banna');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// combine two arrays
const fruits2 = ['apple', 'banana'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
}

// Q2. make a array out of an string
{
    const fruits = 'appie,banana, oranage';
    const result = fruits.split(',');
    console.log(result);
}

// Q5. find a student with the score 90
{
    const result = students.find(student) ==>  student.score === 90;
    console.log(result);
}