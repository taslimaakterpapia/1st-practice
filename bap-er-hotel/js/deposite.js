document.getElementById('btn-deposite').addEventListener('click', function(){

    const depositeFiled = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeFiled.value;
     const newDepositeAmount = parseFloat(newDepositeAmountString);




     
   const depositeTotalElement = document.getElementById('deposite-total');
   const previousDepositeTotalString = depositeTotalElement.innerText;
   const previousDepositeTotal = parseFloat(previousDepositeTotalString);

  
   const currentDepositeTotal =  previousDepositeTotal + newDepositeAmount;

   depositeTotalElement.innerText = currentDepositeTotal;






const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);


const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;

balanceTotalElement.innerText = currentBalanceTotal;





   depositeFiled.value ='';


})