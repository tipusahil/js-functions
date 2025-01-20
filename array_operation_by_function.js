/* 
kaj: write a function to give me the sum of all numbers in an array 
step-1: ekta function declare korte hbe. & check korte hbe j kaj kortece kina.
step-2: ekta peramitar set korte hbe, 
step-3: argument/peramitar er value tik moto pass hocce seta  check korte hbe.
step-4: 
step-5: 


*/

var array_sum = 0;
function func_name(pera) {

    for (const num of pera) {
        array_sum = array_sum + num;
    }

    return array_sum;

}

var arr1 = [1, 22, 5, 22];
func_name(arr1);
// var sum1 = func_name("array er data gulor jugfol = ", array_sum);
console.log("array er data gulor jugfol = ", array_sum);


// node array_operation_by_function.js