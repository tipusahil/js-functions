// function e peramitar kivabe dite hoi & peramitar er value kivabe function call korar maddome pass korte hoi.
function hablu(peramitar1){
    console.log(peramitar1);
}
hablu('peramitar_value_pass');//peramitar er value string pass korte caile quetion dite hobe,number hole dite hobe, but ekadik peramitar & ekadik peramitar er value hole koma(,) diye diye peramitar er value pass korte hobe.
hablu(5);


// multiple peramitar & er multiple value pass:
// 1.peramitar jotota thakle tototai peramitar er value dite hobe, nahoi undefined/error dite pare.

function multiple_pera(x,a,b,c){//peramitar onk gulaw dewa jai, tai value o peramitar er somoporiman dite hobe, ekane 2ta peramitar diyeci tai 2ta value dici
    var jog = x+ a+b+c;
    var biok =x+ a-b-c;
    var gon = x+ a*b*c;
    var bak = x+ a/b/c;

    console.log(jog);
    console.log(biok);
    console.log(gon);
    console.log(bak);
}


multiple_pera('type= ',5,6,3);

// example 2 of multiple peramitar: 
function doubleit(number){
    var doubled =number * 2;
    console.log(number, 'double > ', doubled );
}
doubleit(88);
doubleit(15);


// node function_peramitar.js