'use strick'
// let num = 161;
// // if (num < 49){
// //     console.log("ААААА залупаа")
// // }else if{
// //     console.log(" неверно")
// // }
// // (num == 50) ? console.log(" сума равна 50") : console.log(" Сума не 50");
// switch(num) {
//     case num < 49:
//         console.log("49");
//         break;
//     case num > 0:
//         console.log("много");
//         break;
//     default :
//     console.log(" Yor are dude");
//     break;
// };
var money,time;

function start(){
    time =  prompt("Введите дату в формате YYYY-MM-DD", "2021-01-01");
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", "0грн");
    }
}
start();

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income : [],
        savings : true
    };

function chooseExpenses(){
    for(let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
            if(typeof(a)!= null && (typeof(a)) === 'string' && typeof(b)!= null && (typeof(b)) === 'string' &&
            a != '' && b != '' && a.length < 50){
                console.log("Congradulation");
                appData.expenses[a] = b;
            } else {
                console.log("bad result");
            i--;
            }
    }
}
chooseExpenses();

function detectedDayBudget(){
    appData.moneyPerDay = (appData.budget / 30);
    alert(" Ежедневний бюджет " + appData.moneyPerDay);
}

detectedDayBudget();

function detectedLevel(){
    if(appData.moneyPerDay < 100 ){
        console.log("Минимальный случай достатка");
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень достатка");
    }else if (appData.moneyPerDay > 2000){
        console.log("Высокий уровень достатка");
    } else {
        console.log("ERROR");
    }
}

detectedLevel();

function checkSaving(){
    if(appData.savings == true){
        let save = +prompt("Какова сума накопления?"),
        percent = +prompt("Под каой процент ?");
        appData.monthIncome = save / 100/12*percent;
        alert("Доход в меся с вашего депозита : " + appData.monthIncome);
    }
}
checkSaving();