// array theke jor sonka gulo  niye notun ekta jor sonkar array banate hbe,& jor sonka gulor sum ber korte hobe. & eshob kisu function er maddome korte hobe.


function evenNumOfArray(array) {

    var even_num_sum = 0;
    var even_array = [];

    for (const num of array) {
        if (num % 2 === 0) {
            even_array.push(num);
            even_num_sum += num;
        }
    }
    return even_num_sum, even_array ;//ekane if er vitorer (even_array) eta ar (even_num_sum) eksate return kore dilm, jekan theke function call kora hoyece okhane.

}

let numbers = [4, 1, 8, 4, 88, 3, 55, 6];
 var  even_num_sum= evenNumOfArray(numbers);//return pabe even sonkar jugfol..
 var  even_array= evenNumOfArray(numbers);//return pabe even sonkar notun ekta array

console.log(`array er jor/even sonka gulor jogfol =  ${even_num_sum}`);
console.log('array er jor sonka gulor notun arekta array', even_array);


// node return_even_num_of_array.js