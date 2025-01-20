// ( ` backtick` )ei backtick er ta dynamic string likar ketre use hoi, ortat ei backtick er vitore string & dynamic string,variable lika jai. jmn: 

function backtick1(peramitar){
    var hablu = 10;

    return  `bactick inside string,peramitar ${peramitar}, again variable  ${hablu}, 53 number`;
    
    // backtick er vitore return er sate peramitar liklam,varaible liklam eki sate string o liklam, kuno (+)sign diye concat o kora lageni, etai hocce backtick er power.
}

var output = backtick1('argument');

console.log(output);
// console.log(backtick1('argument'));shorthand
