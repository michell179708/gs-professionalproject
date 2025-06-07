//this function determined the index inside the array

function getbyIdx(arr, idx){
    if(idx < 0 || arr.length <= idx){
        return 'This element do not exist';
    }
    return arr[idx]; 
}

let result = getbyIdx([1,2],1);
console.log(result);