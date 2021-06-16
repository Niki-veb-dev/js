'use strict';
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
let money,time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "0грн");
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
        savings : true,
        chooseExpenses: function (){
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
            };
        },
        detectedDayBudget4000 : function(){
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert(" Ежедневний бюджет " + appData.moneyPerDay);
        },
        detectedLevel: function(){
            if(appData.moneyPerDay <= 100 ){
                console.log("Минимальный случай достатка");
            }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
                console.log("Средний уровень достатка");
            }else if (appData.moneyPerDay > 2000){
                console.log("Высокий уровень достатка");
            } else {
                console.log("ERROR");
            }
        },

        chooseOptExpenses: function(){
            for(let i = 0; i < 3; i++){
                let question = prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i] = question;
                console.log(appData.optionalExpenses);
            }
        },
        checkSaving: function(){
            if(appData.savings == true){
                let save = +prompt("Какова сума накопления?"),
                percent = +prompt("Под каой процент ?");
                appData.monthIncome = save / 100/12*percent;
                alert("Доход в меся с вашего депозита : " + appData.monthIncome);
            }
        },

        chooseIncome: function(){
            let items = prompt('Что принесет дополнительний доход через запятую', '');
            if(typeof(items) != "string" || items == "" || typeof(items) == null){
                console.log("Вы ввели некоретные данные")
            }else {
                appData.income = items.split(', ');
                appData.income.push(prompt("Что может что-то еще ?"));
                appData.income.sort();
            }

        appData.income.forEach(function(itemmassive, i){
            alert("Способ доп зароботка : №" + (i+1) + " - " + itemmassive);
        });
        }
    };

for(let key in appData){
    console.log("Наша програма включает в себя : " + key + " - " + appData[key]);
}
    
// appData.chooseExpenses();
// appData.detectedDayBudget();
// appData.detectedLevel();
// appData.checkSaving();
appData.chooseIncome();
