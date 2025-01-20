// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// odd/bejor hole: 
function multiply(number1){
    if(number1 %2 !==0){
      var result = number1 *2; 
    }
    return result;
}
var odd = multiply(5);

 console.log("odd/bejor number ta 2 diye gon korar pore result = ", odd);

//  even hole 
function even(number1){
    
    if(number1 %2 ===0){
        var result = number1 /2; 
    }
    return result;
}

var even_res = even(8);
 console.log("even/jor number ta 2 diye bak korar pore result = ",even_res)