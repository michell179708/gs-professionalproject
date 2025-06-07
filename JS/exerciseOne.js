//Work with a small function that determines what number 
//is major or minor

//function that determined which number is greater
function WhichIsGreater(a,b){
    //we use the if expression to determine which number is greater, the operador greater than to determine the greater number;
    if (a>b){
        return a;  
    }else{
        return b;
    }

    /**another way to do it
     * return (a,b) ? a:b; 
     */
}
// we create the variable greatest that stores the result of the function.
let greatest = WhichIsGreater(10,5);

console.log(greatest);