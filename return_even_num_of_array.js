
// array theke jor sonka gulo niye segulo niye notun ekta jor sonkar array banate hbe,& jor sonka gulor sum ber korte hobe.

let numbers =[4,1,8,4,88,3,55,6];//array er ketre let/const variable keyword use kora vlo

var even_num_sum = 0;
var even_array = [];
for( const number of numbers){
    if(number % 2 === 0){
    
        
        even_num_sum += number;//array er jor sonka gulo  sum varaibe er satejog kora hocce for of loop er maddome.

        even_array.push(number);//array er bejor sonka gulo (even_array )ei name mt array te te pass kora hocce.
    }
}

console.log(`array er jor/even sonka gulor jogfol =  ${even_num_sum}`);
console.log( 'array er jor sonka gulor notun arekta array' ,even_array);


// node return_even_num_of_array.js