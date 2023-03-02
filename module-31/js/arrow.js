// function declaration

function add(first, second){
    const total = first + second ;
    return total;
}

// function expression 

const add1 = function add(first, second){
    const total = first + second ;
    return total;
}

// function expression with anonymous function

function add(first, second){
    const total = first + second ;
    return total;
} 
// -------------

function add4(first, second){
    return  first + second ;
   
}
// -------------
const add5 = function(first, second){
    return  first + second ;

}


// arrow function 

const add6 = (first, second) => first + second ;

const result = add(10,20);
console.log(result);


// interview question: differences between
// function declaration, function expression and arrow function



