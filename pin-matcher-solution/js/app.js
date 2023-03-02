
function getpin(){
const pin = generatepin();
const pinstring = pin + '';
if(pinstring.length === 4){
return pin; 
}
else{
    return getpin();
}}


function generatepin(){

const random = Math.round(Math.random()*10000);
return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){

const pin = getpin();

const displayField = document.getElementById('display-pin');
    displayField.value = pin;

})


document.getElementById('calculator').addEventListener('click', function(event){
   const number = event.target.innerText;
   const typedNumberField = document.getElementById('typed-number');
   const previousTypedNumber = typedNumberField.value;
   if(isNaN(number)){
    if(number === 'C'){
        typedNumberField.value = '';

    }
    else if (number === '<'){
 const digits = previousTypedNumber.split('');
 digits.pop();
 const remainingDigits = digits.join('');
 typedNumberField.value = remainingDigits; 


    }
   }
   else{
    const newTypedNumber = previousTypedNumber + number; 
    typedNumberField.value = newTypedNumber;

   }



})



document.getElementById('verify-pin').addEventListener('click', function(){

    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;

    const PinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if (typedNumber === currentPin){
        PinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';


    }
    else {
        pinFailureMessage.style.display = 'block';
        PinSuccessMessage.style.display = 'none';
       
    }

})


