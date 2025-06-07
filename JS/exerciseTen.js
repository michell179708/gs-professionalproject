  /**
   * This exercise create an array using a n number
   */

  let lenght = 7;

  //this function create an array with a lenght
  function creaArray(n){
    //we create an if to verify is the lenght is not zero
    // and if zero we return an empty array
    if(n <= 0){
        return [];
    }

    // we create a for to make sure how many times we will create an index
    let arr = [];
    for( let i = 0; i < n; i++){
        arr[i] = i +1;
    }

    return arr;
  }

  let resultado = creaArray(lenght);
  console.log(resultado);