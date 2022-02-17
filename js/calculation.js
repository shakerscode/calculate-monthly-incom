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


// function getCalculationValue(calculation, foodCost, rentCost, clothesCost,  mainIncomeBalance){
   
    
//     if(calculation < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0){
//         return alert('Please enter a valid number');
      
//     }
//     else if(typeof(clothesCost) == 'string'){
//         return alert('Please enter a valid number');
//     }
//     else if(calculation == 'total-expenses'){
//         const totalCost = foodCost + rentCost + clothesCost;
//         document.getElementById('total-expenses').innerText = totalCost ;
//         return totalCost
//     }
//     else if(calculation == 'balance'){
//         const balance =  mainIncomeBalance - totalCost;
//         document.getElementById('balance').innerText = balance;
//         return balance;
//     }
    

// }


 


// Making claculate button clickable
document.getElementById('calculate-btn').addEventListener('click', function(){

        const mainIncomeBalance = getBalanceAmount('main-balance'); 
        const foodCost = getInputValue('food-bill');
        const rentCost = getInputValue('rent-bill');  
        const clothesCost = getInputValue('clothes-bill');  
         


    
        //Get Main Balane 
    //  const mainBalanceText = document.getElementById('main-balance');
    //  const mainBalanceNum = mainBalanceText.value;
    //  const mainBalance = parseInt(mainBalanceNum);
    //  mainBalanceText.value = '';
    //  console.log(mainBalance);

// 111111111111111
    // const foodBillText = document.getElementById('food-bill');
    // const foodBillNum  = foodBillText.value;
    // const foodCost = parseInt(foodBillNum);  
   

        // const foodCost = getInputValue('food-bill')


// // 1111111
//     const rentBillText = document.getElementById('rent-bill');
//     const rentBillNum  = rentBillText.value;
//     const rentCost = parseInt(rentBillNum);
  
      
      

        //  const rentCost = getInputValue('rent-bill')

    // get colthes fild value

     
    // //  11111
    //  const clothesBillText = document.getElementById('clothes-bill');
    //  const clothesBillNum  = clothesBillText.value;
    //  const clothesCost = parseInt(clothesBillNum);   
      
     

        // const clothesCost = getInputValue('clothes-bill')
        
        // const allExpensesCalculation = getCalculationValue('total-expenses', foodCost, rentCost, clothesCost, mainIncomeBalance);
        // const allBalanceCalculation = getCalculationValue('balance', foodCost, rentCost, clothesCost, mainIncomeBalance);


        const errorforNum = document.getElementById('error-text');
        const errorfoNegNum = document.getElementById('saving-error');
       
        const totalExpensestext = document.getElementById('total-expenses');
        const totalExpenses = parseInt (totalExpensestext.innerText);


       const totalCost = foodCost + rentCost + clothesCost;
         
         
        totalExpensestext.innerText = totalCost;

        const balanceText = document.getElementById('balance');
        const balance =  mainIncomeBalance - totalCost;
        balanceText.innerText = balance;
        console.log(balance);
        const balanceRemains = balance - totalExpenses;
        balanceText.innerText = balanceRemains;

})

document.getElementById('saving-btn').addEventListener('click', function(){

    const mainIncomeBalance = getBalanceAmount('main-balance');
    // const savingPercentText = document.getElementById('saving-percentage');
    // const savingPercent = parseFloat(savingPercentText.value);

    const savingPercent = getInputValue('saving-percentage')
    // const textErr = document.getElementById('saving-error');

    // if(savingPercent < 0){
    //     return document.getElementById('saving-error').style.display = 'block'
        
    // }
    // else{
    //     const savingPercentAmount = savingPercent / 100;
    //     const savingAmmount = parseInt(balance.innerText) * savingPercentAmount;
    //     return savingAmmount;
    // }

    // if(savingPercent < 0){
    //     return alert('Please enter a number');

    // }
    // else if(savingPercent > 0){

    //     const savingPercentAmount = savingPercent / 100;
    //     const savingAmmount = parseInt(balance.innerText) * savingPercentAmount;
    // }


    const savingPercentAmount = savingPercent / 100;
    const savingAmmountTotal = mainIncomeBalance  * savingPercentAmount;
    
    console.log(savingAmmountTotal)

    const savedAmountTextIs = document.getElementById('saving-ammount')
    const savedAmmountNum= savedAmountTextIs.innerText;
    const savedAmount = parseInt(savedAmmountNum);
    savedAmountTextIs.innerText = parseInt(savingAmmountTotal);

    const remainBalnaceText = document.getElementById('remaining-balance');
    const remainBalnaceValue = remainBalnaceText.innerText;
    const remainBalnace = parseInt(remainBalnaceValue);
    const total = balance.innerText - savingAmmountTotal;
    remainBalnaceText.innerText = parseInt(total);
    console.log(total);
    

})