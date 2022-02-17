// Starting js 

function getInputValue(inputId){
    const inputBalanceText = document.getElementById(inputId);
    const inputBalanceNum = inputBalanceText.value;
    const inputBalance = parseInt(inputBalanceNum);
    inputBalanceText.value = '';
     return inputBalance;
     
}

// Making claculate button clickable
document.getElementById('calculate-btn').addEventListener('click', function(){
    const mainIncomeBalance = getInputValue('main-balance')
    console.log(mainIncomeBalance);

    //Get Main Balane 
    //  const mainBalanceText = document.getElementById('main-balance');
    //  const mainBalanceNum = mainBalanceText.value;
    //  const mainBalance = parseInt(mainBalanceNum);
    //  mainBalanceText.value = '';
    //  console.log(mainBalance);

    //Get food fild value
    //  const foodBillText = document.getElementById('food-bill');
    //  const foodBillNum  = foodBillText.value;
    //  const foodBill = parseInt(foodBillNum);   
    //  foodBillText.value = '';
    //  console.log(foodBill);
    const foodCost = getInputValue('food-bill')

    //get rent fild value

    //  const rentBillText = document.getElementById('rent-bill');
    //  const rentBillNum  = rentBillText.value;
    //  const rentBill = parseInt(rentBillNum);   
    //  rentBillText.value = '';
    //  console.log(rentBill);

    const rentCost = getInputValue('rent-bill')

    // get colthes fild value

    //  const clothesBillText = document.getElementById('clothes-bill');
    //  const clothesBillNum  = clothesBillText.value;
    //  const clothesBill = parseInt(clothesBillNum);   
    //  clothesBillText.value = '';
    //  console.log(clothesBill);

    const clothesCost = getInputValue('clothes-bill')

     const totalExpensestext = document.getElementById('total-expenses');
     const totalExpenses = parseInt (totalExpensestext.innerText);
     const totalCost = foodCost + rentCost + clothesCost;
     console.log(totalCost);
     totalExpensestext.innerText = totalCost;

    const balanceText = document.getElementById('balance');
    const balance =  mainIncomeBalance - totalCost;
    balanceText.innerText = balance;
    console.log(balance);
    // const balanceRemains = balance - totalExpenses;
    // balanceText.innerText = balanceRemains;

})

document.getElementById('saving-btn').addEventListener('click', function(){
    // const savingPercentText = document.getElementById('saving-percentage');
    // const savingPercent = parseFloat(savingPercentText.value);

    const savingPercent = getInputValue('saving-percentage')


    const savingPercentAmount = savingPercent / 100;
    const savingAmmount = parseFloat(balance.innerText) * savingPercentAmount;
    console.log(savingAmmount);
     
    const savedAmounTextIs = document.getElementById('saving-ammount')
    const savedAmmountNum= savedAmounTextIs.innerText;
    const savedAmount = parseFloat(savedAmmountNum);
    savedAmounTextIs.innerText = savingAmmount;

    const remainBalnaceText = document.getElementById('remaining-balance');
    const remainBalnaceValue = remainBalnaceText.innerText;
    const remainBalnace = parseFloat(remainBalnaceValue);
    remainBalnaceText.innerText = balance.innerText - savingAmmount;
    

})