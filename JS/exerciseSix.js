/**
 * This exercise count the positive number that an array
 */
// we create and inicialize an array 
let arrayOne = [2, 5, 7 ,15 , -5 , -100, 55];

function howManyPositive(arr){
    let amount = 0;
    for(element of arr){
        if(element > 0){
            amount++;
        }
    }
    return amount;
}

let resultOne = howManyPositive(arrayOne);
console.log(resultOne);