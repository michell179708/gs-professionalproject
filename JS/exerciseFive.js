/**
 * Create an algorithm that return the greatest and lowest 
 * number inside an array
 */

// we create and inicialize an array 
let array = [2, 5, 7 ,15 , -5 , -100, 55];

//we create the function
function getLowestGreatest(arr){
    let lowest = arr[0];
    let greatest = arr[0];
    for(number of arr){
        lowest = lowest < number ? lowest : number; 
        greatest = greatest > number ? greatest : number; 
    }

    return [lowest,greatest];
}

let numbers = getLowestGreatest(array);
console.log(numbers);