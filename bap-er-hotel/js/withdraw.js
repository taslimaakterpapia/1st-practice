

document.getElementById('btn-withdraw').addEventListener('click', function(){

const withdrawField = document.getElementById('withdraw-field');
const newwithdrawAmountString = withdrawField.value;
const newwithdrawAmount = parseFloat(newwithdrawAmountString);


const withdrawTotalElement = document.getElementById('withdraw-total');
const previouswithdrawTotalString = withdrawTotalElement.innerText;
const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);

const currentWithdrawTotal = previouswithdrawTotal + newwithdrawAmount;

withdrawTotalElement.innerText = currentWithdrawTotal;


const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);


const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;

balanceTotalElement.innerText = newBalanceTotal;



    withdrawField.value ='';
})