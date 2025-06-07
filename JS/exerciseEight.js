/**
 * This exercise create an object array.
 * 
 */

// this object array declare an array with 3 objects and two properties.
let arrayFirst = [{
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

// Create a manual array with pairs
let pairs = [
    [1,{id:1, name:"Nicolas"}],
    [2,{id:2, name:"Felipe"}],
    [3,{id:3, name:"Pig"}],
];

//create function that return a pair array
/**
 * this function take an array as parameter
 * create a pair array using for cicle
 * fill the third pair array
 */
function toPairs(arr){
    let pairsTwo = [];
    for(idx in arr){
        let elements = arr[idx];
        pairsTwo[idx] = [elements.id, elements];
    }
    return pairs; 
}

let resultThree = toPairs(arrayFirst);
console.log(resultThree);