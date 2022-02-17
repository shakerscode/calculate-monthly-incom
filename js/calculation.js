// Starting js 

// function getInputValue(main){
//     const mainBalanceText = document.getElementById('main-balance');
//     const mainBalanceNum = mainBalanceText.value;
//     const mainBalance = parseInt(mainBalanceNum);
//     mainBalanceText.value = '';
//     console.log(mainBalance);

// }

// Making claculate button clickable
document.getElementById('calculate-btn').addEventListener('click', function(){
    // const mainIncomeBalance = getInputValue()

    //Get Main Balane 
     const mainBalanceText = document.getElementById('main-balance');
     const mainBalanceNum = mainBalanceText.value;
     const mainBalance = parseInt(mainBalanceNum);
     mainBalanceText.value = '';
     console.log(mainBalance);

    //Get food fild value
     const foodBillText = document.getElementById('food-bill');
     const foodBillNum  = foodBillText.value;
     const foodBill = parseInt(foodBillNum);   
     foodBillText.value = '';
    //  console.log(foodBill);

    //get rent fild value

     const rentBillText = document.getElementById('rent-bill');
     const rentBillNum  = rentBillText.value;
     const rentBill = parseInt(rentBillNum);   
     rentBillText.value = '';
    //  console.log(rentBill);

    // get colthes fild value

     const clothesBillText = document.getElementById('clothes-bill');
     const clothesBillNum  = clothesBillText.value;
     const clothesBill = parseInt(clothesBillNum);   
     clothesBillText.value = '';
    //  console.log(clothesBill);

     const totalExpensestext = document.getElementById('total-expenses');
     const totalExpenses = parseInt (totalExpensestext.innerText);
     const totalCost = foodBill + rentBill + clothesBill;
     console.log(totalCost);
     totalExpensestext.innerText = totalCost;

    const balanceText = document.getElementById('balance');
    const balance =  mainBalance - totalCost;
    balanceText.innerText = balance;
    console.log(balance);
    // const balanceRemains = balance - totalExpenses;
    // balanceText.innerText = balanceRemains;

})

document.getElementById('saving-btn').addEventListener('click', function(){
    const savingPercentText = document.getElementById('saving-percentage');
    const savingPercent = parseFloat(savingPercentText.value);
    // console.log(savingPercent);
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