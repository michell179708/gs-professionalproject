/**
 * This exercise create an algorinthm tha return the price
 * of a product and the tax 
 */

function price(price, tax){
    let fullPrice = price + price * tax;
    return fullPrice;
}

let resultTwo = price(19.90,0.15);
console.log(resultTwo);

