let firstArray = [8, 4, 2];
let secondArray = [5,5,7];
let bothArrays = [...firstArray, secondArray];
console.log(bothArrays);

let fruit = ['grape', 'apple', 'orange'];
let newString = 'mango';
let newArray = [newString, ...fruit];
console.log(newArray);

let myObject = {color:'brown', eyesColor: 'hazel'};
let keyAdd = 'age';
let valueAdd = '3 months';
let newObject = keyValuePair(myObject, keyAdd, valueAdd);
console.log(newObject);

function keyValuePair(obj, key, value){
    let newObject = {...obj};
    newObject[key] = value;
    return newObject;
}

let numbersArray = [1, 2, 22];
let newNumbers = Math.max(...numbersArray);
console.log(newNumbers);

let string = ['square', 'triangle', 'circle'];
string.sort();
console.log(string);

