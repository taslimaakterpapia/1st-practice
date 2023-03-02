
// // 2 ta jinis er sum korar somoy
//  1st er man likhle r 2nd er man likhte 
//  vule gele opore function er vitore = 0 
//  likhle undefined dekhabe na 0
//   take second man hisebe dhore sum ber kore dibe


function add(first, second = 0){
const total = first + second ;
return total;

}

const result = add(10);
console.log(result);




function fullName(first, last = 'Gazi'){
const name = first + ' ' + last ;
return name;

}

const name = fullName('papia');
console.log(name);


