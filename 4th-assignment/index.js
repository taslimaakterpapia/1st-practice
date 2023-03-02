function mindGame(number){
  

        let result = ((((number * 3)+10)/2)-5);
        return result;
    
}
console.log(mindGame(20));



function evenOdd(str) {
    let length = str.length;

    if(length % 2 === 0){
        // console.log('even');
        return 'even';
    }
    else{
 
        return 'odd';
    }

  }
console.log(evenOdd('phero'));




function isLGSeven(num) {
    let difference = (num - 7);
    if(typeof(num) !='number'){
        return 'Please enter a number';
    }
    else if(difference < 7) {
        return difference ;
    } 
    else{
       return 2 * difference;
    }
}

console.log(isLGSeven(40));




function findingBadData(array) {  
    let count = 0;  
    for (let i = 0; i < array.length; i++) {  
        
         if (array[i] < 0) {   
        count++;
      }
    }
    return count;
  }
  console.log(findingBadData([ 2,5,-7 ]));


  


  function gemsToDiamond(frnd1 , frnd2, frnd3){
    let firstfrnd = 21 * frnd1;
    let secFrnd = 32 * frnd2;
    let thirdFrnd = 43 * frnd3;

    let totalDiamonds = firstfrnd + secFrnd + thirdFrnd;
    if(typeof(frnd1, frnd2, frnd3) != 'number'){
        return 'Enter a valid number';
    }
    else if(totalDiamonds > 1000 * 2){
       return totalDiamonds - 2000;
    }
    else{
        return totalDiamonds;
    }
    

}

console.log(gemsToDiamond( 50, 200, 30));
