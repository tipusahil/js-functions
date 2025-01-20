// argument kontake bole? & argument/peramitar er value hisebe  string,number,boolean,array,object, chaile arekta function kew argument er value hisebe function er peramitar e pass kora jai. niser gulo deklei bujte parbo

function fun_name(pera1){
console.log(pera1);
}

fun_name('function call korar smy ei bracket er vitore ja thake ta holo function er argument/peramitar er value');

// peramitar er value/argument hisebe array/ or arrayname pass:

function direct_array(array1){
    console.log(array1)

    return `array1 er size = ${array1.length}`;
}


var for_size = direct_array([2,4,4,2,'argument hisebe direct array pass']);//evabe direct array na diye chaile kuno ekta array declare kore oi array er name ta arogument hisebe pass kore dilew  hbe.jmn: 

// var array1 =[3,4,34];
// direct_array(array1);// evabe

console.log(for_size);


// argument hisebe ekta object pass: 

var object_1 = {
    price: 500,
    date: '23-4-2025',
    product: 'phone',
}

function for_obj(pera){
    console.log(pera);
}
for_obj(object_1);//argument hisebe direct ekta obj k pass kore dilm
for_obj(object_1.price);//shudo obj er key er value pass

// node argument_in_function.js

