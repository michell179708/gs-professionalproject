/**
 * This exercise create an object array.
 * 
 */

// Create a manual array with pairs
let pairsSecond = [
    [1,{id:1, name:"Nicolas"}],
    [2,{id:2, name:"Felipe"}],
    [3,{id:3, name:"Pig"}],
];

// this object array declare an array with 3 objects and two properties.
let arraySecond = [{
    id : 1,
    name: 'Nicolas',

},{
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Pig'
}
];



//create function that return a pair array
/**
 * this function take an array as parameter
 * create a pair array using for cicle
 * fill the third pair array
 */
function toCollection (arr){
    let collection = [];
    for(idx in arr){
        let elementsThree = arr[idx];
        collection[idx] =  elementsThree[1];
        collection[idx].id = elementsThree[0];
    }
    return collection; 
}

let resultFour = toCollection(pairsSecond);
console.log(resultFour);