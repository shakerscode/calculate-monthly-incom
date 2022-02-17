// Starting js 


//Function for all input
function getBalanceAmount(input){
    const getInputText = document.getElementById(input);
    const getInputNUm = getInputText.value;
    const inputTotalBalance = parseInt(getInputNUm);
    return inputTotalBalance; 
}

function getInputValue(inputId){
    const inputBalanceText = document.getElementById(inputId);
    const inputBalanceNum = inputBalanceText.value;
    const inputBalance = parseInt(inputBalanceNum);
    return inputBalance; 
}


//Function for calculation


function getCalculationValue(calculation, foodCost, rentCost, clothesCost,  mainIncomeBalance){
   
    //applying condition
    if(calculation < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0){
        return alert('Please enter a valid number');
      
    }
    else if (isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)){
        return alert("Please don't enter Alphabet word. Enter a valid number");
    }
    
    const totalCost = foodCost + rentCost + clothesCost;
    if(calculation == 'total-expenses'){
        document.getElementById('total-expenses').innerText = totalCost;
        return totalCost;
    }
    else if(totalCost > mainIncomeBalance){
        return alert('You do not have sufficient balance.');
    }
    else if(calculation == 'balance'){
        const balance =  mainIncomeBalance - totalCost;
        document.getElementById('balance').innerText = balance;
        return balance;
    }
    

}

// Making claculate button clickable
document.getElementById('calculate-btn').addEventListener('click', function(){

        const mainIncomeBalance = getBalanceAmount('main-balance');

        const foodCost = getInputValue('food-bill')

        const rentCost = getInputValue('rent-bill')

        const clothesCost = getInputValue('clothes-bill')
        
        const allExpensesCalculation = getCalculationValue('total-expenses', foodCost, rentCost, clothesCost, mainIncomeBalance);
        const allBalanceCalculation = getCalculationValue('balance', foodCost, rentCost, clothesCost, mainIncomeBalance);

})
//Making save button clcikable
document.getElementById('saving-btn').addEventListener('click', function(){

    const mainIncomeBalance = getBalanceAmount('main-balance');

    const savingPercent = getInputValue('saving-percentage')  


    const savingPercentAmount = savingPercent / 100;
    const savingAmmountTotal = mainIncomeBalance  * savingPercentAmount;
     
    const savedAmountTextIs = document.getElementById('saving-ammount')
    const savedAmmountNum= savedAmountTextIs.innerText;
    const savedAmount = parseInt(savedAmmountNum);
    savedAmountTextIs.innerText = parseInt(savingAmmountTotal);

    if(savingAmmountTotal > balance.innerText){
        return alert('You do not have sufficent balance')
    }

    const remainBalnaceText = document.getElementById('remaining-balance');
    const remainBalnaceValue = remainBalnaceText.innerText;
    const remainBalnace = parseInt(remainBalnaceValue);
    remainBalnaceText.innerText = balance.innerText - savingAmmountTotal;
    

})