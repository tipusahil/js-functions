
// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(pera) {

    var leng= pera.length;
    console.log(leng);


   
    var sum_for_av = 0;

    for(const num of pera){
        sum_for_av += num;
    }
    var avarege = sum_for_av/leng;
    
    return sum_for_av, avarege;
}

let int_arr = [4,3,5,855,43,5];//array k let or const keyword diye declare koratai recomend.

var avarege =  make_avg(int_arr);

console.log(avarege);
