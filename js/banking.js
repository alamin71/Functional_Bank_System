document.getElementById('deposit-button').addEventListener('click',function(){
    const depositinput = document.getElementById('deposit-input');
    const depositAmounttext = depositinput.value;
    const depositAmount = parseFloat(depositAmounttext);
    //get current deposit
    const depositotal = document.getElementById('deposit-total');
    const depositTotalText = depositotal.innerText;
    const previousDepositAmount = parseFloat(depositTotalText);
     depositotal.innerText = previousDepositAmount + depositAmount;

     //clear deposit input
     depositinput.value = '';
     //update balance 
    const totalBalance =  document.getElementById('Total-Balance');
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = previousBalance + depositAmount;
    
});
//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawinput = document.getElementById('withdraw-input');
    const withdrawinputtext = withdrawinput.value;
    const withdrawAmount = parseFloat(withdrawinputtext);
    //get withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotaltext = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotaltext);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    //clear withdraw input
    withdrawinput.value = '';
    //after witdraw balance update
   const balanceTotal = document.getElementById('Total-Balance');
   const balanceTotaltext = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotaltext);
   balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

});